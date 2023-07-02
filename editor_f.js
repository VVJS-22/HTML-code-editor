const editorWindow = document.getElementById('js_result');

function renderHTML(target) {
    editorWindow.innerHTML = target.value;
}

function renderCSS(target) {
    document.querySelector('style').innerHTML = target.value;
}