import './styles.css';
import { Nav } from './components/nav/nav';
import { Garage } from './components/garage/garage';
import { ViewName } from './types';
import { Winners } from './components/winners/winners';

const garage = new Garage();
const winners = new Winners();

const viewElements: Record<ViewName, HTMLElement> = {
  garage: garage.element,
  winners: winners.element,
};
let activeView: ViewName | undefined;

const navMenu = new Nav();
document.body.prepend(navMenu.element);
navMenu.subscribe((viewName) => {
  if (viewName === activeView) return;
  if (activeView) {
    viewElements[activeView].remove();
  }
  const element = viewElements[viewName];
  document.body.append(element);
  activeView = viewName;
});
navMenu.init();
