const formAdd = document.querySelector('.form--add');

const addNode = function (e) {
    e.preventDefault();
    console.log('ok');
}

formAdd.addEventListener('submit', addNode);