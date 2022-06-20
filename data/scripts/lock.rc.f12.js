// Disable rclick
window.oncontextmenu = function () { return false; }
// Disable keyboard event
window.onkeydown = window.onkeyup = window.onkeypress = function () {
    window.event.returnValue = false;
    return false;
}
// Detect
var h = window.innerHeight, w = window.innerWidth;
window.onresize = function () {
    if (h != window.innerHeight || w != window.innerWidth) {
        window.close();
        window.location = "about:blank";
    }
}