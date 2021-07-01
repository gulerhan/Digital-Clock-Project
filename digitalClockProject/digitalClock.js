var date = new Date();
var hours,minutes,seconds,milliseconds;
hours = date.getHours();
minutes = date.getHours();
seconds = date.getSeconds();
document.getElementsByClassName("date")[0].innerText = ((date.getDate() <= 9)? "0"+date.getDate())+" - "+((date.getDate()) +" - "+date.getMonth())+ :date.getFullYear();
setInterval(function(){
 //milliseconds = date.getmilliseconds();
 document.getElementsByClassName("hour")[0].innerHTML = hours;
 document.getElementsByClassName("minute")[0].innerHTML = minutes;
 document.getElementsByClassName("second")[0].innerHTML = seconds++;
 if(parseInt(document.getElementsByClassName("second")[0].innerText) > 59){
   minutes++;
   seconds =0;
 }
 if(parseInt(document.getElementsByClassName("minute")[0].innerText) > 59){
   hours++;
   minutes = 0;
 }
 if(parseInt(document.getElementsByClassName("hour")[0].innerText) > 23){
  hours = 0;
  minutes = 0;
}
 //document.getElementsByClassName("millisecond")[0].innerHTML = milliseconds;

},100)
