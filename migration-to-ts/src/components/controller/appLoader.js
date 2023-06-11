import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: '062ee587191f42918ec1daaea19f2827', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
