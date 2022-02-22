function ShowTime() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    if (s < 10) {
        s = "0" + s;
    }
    var text = document.getElementById('time');
    text.innerHTML = `${h} : ${m} : ${s}`
}

setInterval(ShowTime, 1000);