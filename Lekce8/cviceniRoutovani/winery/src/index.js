import './style.scss';

import { Navigation } from './components/Navigation';

import { HomePage } from './pages/HomePage/index.js';
import { CataloguePage } from './pages/CataloguePage';
import { DegustationPage } from './pages/DegustationPage';
import { ContactPage } from './pages/ContactPage';

const appElement = document.querySelector("#app")
appElement.append(Navigation())

if(location.pathname === "/"){
    appElement.append(HomePage())
}
else if(location.pathname === "/catalogue"){
    appElement.append(CataloguePage())
}
else if(location.pathname === "/degustation"){
    appElement.append(DegustationPage())
}
else if(location.pathname === "/contact"){
    appElement.append(ContactPage())
}












