// SELECTOR CLASS FUNC
const $_ = function (selector, node = document) {
  return node.querySelector(selector);
};
const $$_ = function (selector, node = document) {
  return node.querySelectorAll(selector);
};
// CREATE ELEMENT FUNC
const createElement = function ({tagName='', className='', text='', node=null}) {
  let element = document.createElement(tagName);
  element.setAttribute("class", className);
  if (text) {
    element.innerHTML  = text;
  }
  if(node !== null){
    node.appendChild(element);
  }

  return element;
};

