const formAdd = document.querySelector('.form--add');
const content = document.querySelector('.content');

const addNode = function (e, node = 'div', txt = "tekst", atr = 'style', atrValue = 'font-size:20px') {
    e.preventDefault();
    console.log('ok');

    const element = document.createElement(node);
    const text = document.createTextNode(txt);
    element.setAttribute(atr, atrValue);
    element.appendChild(text);

    content.appendChild(element)
}

formAdd.addEventListener('submit', addNode);