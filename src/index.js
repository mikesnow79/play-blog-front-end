import path from 'path';

console.log('Jellow World from front-end repo');
function component() {
  let element = document.createElement('div');
  element.innerHTML = ['Hello', 'Webpack'].join(' ');
  return element;
}

document.body.appendChild(component());