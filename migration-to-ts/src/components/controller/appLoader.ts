import Loader from './loader';

enum NewsApiConfig {
  urlBase = 'https://newsapi.org/v2/',
  apiKey = '062ee587191f42918ec1daaea19f2827',
}

class AppLoader extends Loader {
  constructor() {
    super(NewsApiConfig.urlBase, { apiKey: NewsApiConfig.apiKey });
  }
}

export default AppLoader;
