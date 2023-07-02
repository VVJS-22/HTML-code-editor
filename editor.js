const editorWindow = document.getElementById('js_result').contentWindow; // iframe window.

editorWindow.document.head.appendChild(document.createElement("style")); // create a style tag inside iframe head.

/**
 * Renders HTML content based on user input.
 * @param {String} target - user input to render HTML.
 */
function renderHTML(target) {
    editorWindow.document.body.innerHTML = target.value;
}

/**
 * Renders CSS content based on user input.
 * @param {String} target - user input to render CSS.
 */
function renderCSS(target) {
    editorWindow.document.head.querySelector('style').innerHTML = target.value;
}