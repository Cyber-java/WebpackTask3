import './index.css';
import JS_IMAGE from './assets/image.jpeg'

const mainTitle = document.createElement("h1");
mainTitle.textContent = "I love JavaScript";

const jsImageHTML = document.createElement('img');
jsImageHTML.className = 'js-image';
jsImageHTML.src = JS_IMAGE ;
document.body.append(jsImageHTML,mainTitle);

console.log("Hello world");