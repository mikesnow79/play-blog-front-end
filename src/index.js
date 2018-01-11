import path from 'path';
// import './tufte.css';

console.log('Jellow World from front-end repo');
function component() {
  let element = document.createElement('div');
  element.innerHTML = '<article><h1>Hello World</h1><p class="subtitle">Hello Webpack</p></article>';
  return element;
}

document.body.appendChild(component());