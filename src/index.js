import './tufte.css';
import './images/jim_brown.jpeg';

/* eslint-disable no-console */

function component() {
  let element = document.createElement('div');
  let openParaText = '<section><p>Tufte CSS provides tools to style web articles using the ideas demonstrated by Edward Tufte’s books and handouts. Tufte’s style is known for its simplicity, extensive use of sidenotes, tight integration of graphics with text, and carefully chosen typography.</p><figure><img src="/static/jim_brown.jpeg"></figure></section>';
  let mainContainerId = 'main-container';
  element.innerHTML = `<article><h1>Mike Snow</h1><p class="subtitle">His website</p>${openParaText}</article>`;
  element.setAttribute('id', mainContainerId);
  return element;
}

document.body.appendChild(component());

// render(
//   <Counter />,
//   document.getElementById('main-container')
// );

