window.addEventListener('load', function (e) {
    handleLoad(e);
});
function handleLoad(_event) {
    document.addEventListener('mousemove', function (e) {
        setInfoBox(e);
    });
    document.addEventListener('click', function (e) {
        logInfo(e);
    });
    document.addEventListener('keyup', function (e) {
        logInfo(e);
    });
    document.body.addEventListener('click', function (e) {
        logInfo(e);
    });
    document.body.addEventListener('keyup', function (e) {
        logInfo(e);
    });
    document.getElementById('div0').addEventListener('click', function (e) {
        logInfo(e);
    });
    document.getElementById('div0').addEventListener('keyup', function (e) {
        logInfo(e);
    });
    document.getElementById('div1').addEventListener('click', function (e) {
        logInfo(e);
    });
    document.getElementById('div1').addEventListener('keyup', function (e) {
        logInfo(e);
    });
}
function logInfo(_event) {
    var type = "Event type: " + _event.type;
    var target = "Target: " + _event.target;
    var currentTarget = "Current target: " + _event.currentTarget;
    var event = "Event: " + _event;
    console.log(type);
    console.log(target);
    console.log(currentTarget);
    console.log(event);
}
function setInfoBox(_event) {
    var mouseX = _event.pageX;
    var mouseY = _event.pageY;
    var html = "X: " + mouseX + "<br>";
    html += "Y: " + mouseY + "<br>";
    html += "Events target: " + _event.target;
    document.getElementById('mouse').style.border = "thin solid black";
    document.getElementById('mouse').innerHTML = html;
    document.getElementById("mouse").style.left = "" + (mouseX + 20);
    document.getElementById("mouse").style.top = "" + (mouseY + 20);
}
