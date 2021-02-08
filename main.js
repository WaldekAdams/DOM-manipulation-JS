const formAdd = document.querySelector('.form--add');
const formSearch = document.querySelector('.form--serch');
const content = document.querySelector('.content');

const showInfo = function (elements, divResults) {
    console.log(elements, divResults);
}

const searchElements = (e, nameElement) => {
    e.preventDefault();
    const elements = document.querySelectorAll(nameElement);
    const divResults = document.querySelector('.result');
    // console.log(elements);

    if (elements.length > 0) {
        divResults.innerHTML = ` <p class = "result__info"> W tym dokumencie znalazlem ${elements.length} elementy ${nameElement}. </p>`

        showInfo(elements, divResults);

    } else {
        divResults.innerHTML = ` <p class = "result__info"> W tym dokumencie nie znalazlem elementów ${nameElement}. </p>`;
        return;
    }
}
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


formSearch.addEventListener('submit', (e) => {

    searchElements(e,
        formSearch.elements.search.value)


})

formAdd.addEventListener('submit', (e) => addNode(e,
    formAdd.elements.node.value,
    formAdd.elements.txt.value,
    formAdd.elements.atr.value,
    formAdd.elements.atrValue.value
));