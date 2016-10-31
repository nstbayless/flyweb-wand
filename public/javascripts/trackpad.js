// trackpad for mouse

var socket = io();

function trackPosition(e) {
    var x = e.clientX - this.offsetLeft;
    var y = e.clientY - this.offsetTop;
    socket.emit('trackpad',{x:x/500*screenwidth,y:y/(500*screenheight/screenwidth)*screenheight});
}

window.onload = function() {
    document.getElementById('trackpad').onclick=trackPosition;
}
