window.addEventListener('load', e => {
    handleLoad(e);
});

function handleLoad(_event: Event) {
    document.addEventListener('mousemove', e => {
        setInfoBox(e);
    });
    document.addEventListener('click', e => {
        logInfo(e);
    });
    document.addEventListener('keyup', e => {
        logInfo(e);
    });
    document.body.addEventListener('click', e => {
        logInfo(e);
    });
    document.body.addEventListener('keyup', e => {
        logInfo(e);
    });
    document.getElementById('div0')!.addEventListener('click', e => {
        logInfo(e);
    });
    document.getElementById('div0')!.addEventListener('keyup', e => {
        logInfo(e);
    });
    document.getElementById('div1')!.addEventListener('click', e => {
        logInfo(e);
    });
    document.getElementById('div1')!.addEventListener('keyup', e => {
        logInfo(e);
    });
}

function logInfo(_event: Event) {
    let type = "Event type: " + _event.type;
    let target = "Target: " + _event.target;
    let currentTarget = "Current target: " + _event.currentTarget;
    let event = "Event: " + _event;
    console.log(type);
    console.log(target);
    console.log(currentTarget);
    console.log(event);
}

function setInfoBox(_event: MouseEvent) {
    let mouseX = _event.pageX;
    let mouseY = _event.pageY;
    let html = "X: " + mouseX + "<br>";
    html += "Y: " + mouseY + "<br>";
    html += "Events target: " + _event.target;
    document.getElementById('mouse')!.style.border = "thin solid black";
    document.getElementById('mouse')!.innerHTML = html;
    document.getElementById("mouse")!.style.left = "" + (mouseX + 20);
    document.getElementById("mouse")!.style.top = "" + (mouseY + 20);
}
