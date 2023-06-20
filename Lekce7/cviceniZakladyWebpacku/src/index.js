import { Quote } from './Quote/index.js'
import './style.css';

const c = console.log.bind(document)

const appElm = document.querySelector("#app")
appElm.append(Quote({
    text: "Když máš hlad, nejsi to ty!",
    author: "Snickers",
}))
























