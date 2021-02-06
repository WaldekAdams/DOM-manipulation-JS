const formAdd = document.querySelector('.form--add');
const content = document.querySelector('.content');

const addNode = function (e, node, txt, atr, atrValue) {
    e.preventDefault();
    console.log('ok');

    const element = document.createElement(node);
    if (txt) {
        const text = document.createTextNode(txt);
        element.appendChild(text);
    }
    if (atr) {
        element.setAttribute(atr, atrValue);
    }
    content.appendChild(element)
}

formAdd.addEventListener('submit', (e) => addNode(e,
    formAdd.elements.node.value,
    formAdd.elements.txt.value,
    formAdd.elements.atr.value,
    formAdd.elements.atrValue.value
));