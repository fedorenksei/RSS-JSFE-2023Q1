import { CallbackFromView } from '../types/index';

type LoaderOptions = {
  apiKey: string;
};

type NewsApiOptions = {
  sources?: string;
};

type NewsApiEndpoint = 'sources' | 'everything';

class Loader {
  baseLink: string;
  options: LoaderOptions;

  constructor(baseLink: string, options: LoaderOptions) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp(
    { endpoint, options = {} }: { endpoint: NewsApiEndpoint; options?: NewsApiOptions },
    callback = () => {
      console.error('No callback for GET response');
    }
  ) {
    this.load('GET', endpoint, callback, options);
  }

  errorHandler(res: Response) {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options: NewsApiOptions, endpoint: NewsApiEndpoint) {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      // todo: find a better workaround
      if (key !== 'apiKey' && key !== 'sources') return;

      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  load(method: 'GET', endpoint: NewsApiEndpoint, callback: CallbackFromView, options: NewsApiOptions = {}) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
