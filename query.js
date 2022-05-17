var clock = document.getElementById("time")
var x = setInterval(function () {
    // Get today's date and time
    var now = new Date();
    /*
    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var distance = now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    dayEle.innerHTML = now.prototype.getHours();
    hourEle.innerHTML = minutes;
    minuteEle.innerHTML = seconds;
    secondEle.innerHTML = seconds;
    */
    hour = now.getHours();
    ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12; // the hour '0' should be '12'
    minutes = now.getMinutes();
    seconds = now.getSeconds();
    //dayEle.innerHTML = hour;
    //hourEle.innerHTML = minutes;
    //minuteEle.innerHTML = seconds;
    //secondEle.innerHTML = ampm;
    clock.innerHTML = hour + ":" + minutes + ":" + seconds + " " + ampm;


}, 1000);