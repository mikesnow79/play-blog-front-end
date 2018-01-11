import path from 'path';
import './tufte.css';

console.log('Jellow World from front-end repo');
function component() {
  let element = document.createElement('div');
  element.innerHTML = '<article><h1>Mike Snow</h1><p class="subtitle">His website</p><section><p>Tufte CSS provides tools to style web articles using the ideas demonstrated by Edward Tufte’s books and handouts. Tufte’s style is known for its simplicity, extensive use of sidenotes, tight integration of graphics with text, and carefully chosen typography.</p></section></article>';
  element.setAttribute('id', 'main-container');
  return element;
}

document.body.appendChild(component());

