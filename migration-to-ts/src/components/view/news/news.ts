import './news.css';
import { Article } from '../../types';

class News {
  public draw(data: Article[]): void {
    const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

    const fragment = document.createDocumentFragment();
    const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLElement & { content: DocumentFragment };

    news.forEach((item, idx) => {
      const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

      if (idx % 2) {
        const newsItem = newsClone.querySelector('.news__item') as HTMLElement;
        newsItem.classList.add('alt');
      }

      const metaPhoto = newsClone.querySelector('.news__meta-photo') as HTMLElement;
      metaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;

      const metaAuthor = newsClone.querySelector('.news__meta-author') as HTMLElement;
      metaAuthor.textContent = item.author || item.source.name;

      const metaDate = newsClone.querySelector('.news__meta-date') as HTMLElement;
      metaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

      const descriptionTitle = newsClone.querySelector('.news__description-title') as HTMLElement;
      descriptionTitle.textContent = item.title;

      const descriptionSource = newsClone.querySelector('.news__description-source') as HTMLElement;
      descriptionSource.textContent = item.source.name;

      const descriptionContent = newsClone.querySelector('.news__description-content') as HTMLElement;
      descriptionContent.textContent = item.description;

      const readMoreAnchor = newsClone.querySelector('.news__read-more a') as HTMLAnchorElement;
      readMoreAnchor.setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    const newsElement = document.querySelector('.news') as HTMLElement;
    newsElement.innerHTML = '';
    newsElement.appendChild(fragment);
  }
}

export default News;
