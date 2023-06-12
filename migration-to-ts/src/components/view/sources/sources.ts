import './sources.css';
import { Source } from '../../types';

class Sources {
  draw(data: Source[]) {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLElement & { content: DocumentFragment };

    data.forEach((item) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

      const itemName = sourceClone.querySelector('.source__item-name') as HTMLElement;
      itemName.textContent = item.name;

      const itemElement = sourceClone.querySelector('.source__item') as HTMLElement;
      itemElement.setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    const sourcesElement = document.querySelector('.sources') as HTMLElement;
    sourcesElement.append(fragment);
  }
}

export default Sources;
