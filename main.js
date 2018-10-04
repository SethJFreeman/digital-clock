function startTime() {
    var today = new Date();
    var h = today.getHours() > 12 ? today.getHours() - 12 : today.getHours();
    var m = today.getMinutes(); // Gets Current Minutes
    var s = today.getSeconds(); // Gets Current Seconds
    m = checkTime(m); // Calls checkTime Function
    s = checkTime(s); // Calls CheckTime Function
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s; // Adds Time To Document
    var t = setTimeout(startTime, 500); // Loops startTime, Which Causes The Clock To Count Up
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

startTime(); // Starts The Clock
