function displayTime(){
    var dateTime= new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var milli = dateTime.getMilliseconds();
    var session= document.getElementById('session');
    document.getElementById('hours').innerHTML =hrs;
    document.getElementById('minutes').innerHTML =min;
    document.getElementById('seconds').innerHTML =sec;
    document.getElementById('milliseconds').innerHTML =milli;

}
setInterval(displayTime,10);
