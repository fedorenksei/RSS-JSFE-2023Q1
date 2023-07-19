import './styles.css';
import { Nav } from "./components/nav/nav";

const navMenu = new Nav();

document.body.prepend(navMenu.getElement());
