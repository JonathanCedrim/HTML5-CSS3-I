let dialog = document.querySelector(".dialog");
dialog.addEventListener('click', text);

function text(event) {
    dialog.setAttribute('style', 'box-shadow: 0 0 0 5px #000;');
}