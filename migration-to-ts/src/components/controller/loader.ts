import { RenderingCallback } from '../types/index';

type LoaderOptions = {
  apiKey: string;
};

type NewsApiOptions = {
  sources?: string;
};

type NewsApiEndpoint = 'sources' | 'everything';

class Loader {
  private baseLink: string;
  private options: LoaderOptions;

  constructor(baseLink: string, options: LoaderOptions) {
    this.baseLink = baseLink;
    this.options = options;
  }

  protected getResp(
    { endpoint, options = {} }: { endpoint: NewsApiEndpoint; options?: NewsApiOptions },
    callback: RenderingCallback = () => {
      console.error('No callback for GET response');
    }
  ) {
    this.load('GET', endpoint, callback, options);
  }

  private errorHandler(res: Response) {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  private makeUrl(options: NewsApiOptions, endpoint: NewsApiEndpoint) {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      // todo: find a better workaround
      // if (!(key in urlOptions)) return; // why this doesn't work??
      // if (!Object.prototype.hasOwnProperty.call(urlOptions, key)) return;
      if (key !== 'apiKey' && key !== 'sources') return;

      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  private load(method: 'GET', endpoint: NewsApiEndpoint, callback: RenderingCallback, options: NewsApiOptions = {}) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
