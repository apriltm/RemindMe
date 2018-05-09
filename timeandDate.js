
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.strokeStyle = '#28d1fa';
ctx.lineWidth = 17;
ctx.lineCap = 'round';
ctx.shadowBlur = 15;
ctx.shadowColor = '#28d1fa';
var date = new Date();
 /*

function playsound(){
  var getTime = date.toLocaleTimeString('en-US', {hour12: false});
  alert('The time is now ' + getTime);
  audio = new Audio('https://s3.amazonaws.com/audio-experiments/examples/elon_mono.wav');
  audio.play();
}


function submitTime(){
  var getTime = moment().format('H');
  var totalTime = new Date().getHours() + ":" + new Date().getMinutes();
  var myTime = document.getElementById('timeForm').value;
  alert('Time set for ' + myTime + ". The time is now " + new Date().getHours() + ":" + new Date().getMinutes;
  if(myTime === getTime){
     alert('The time is now ' + getTime);
  }


} */

function degToRad(degree) {
  var factor = Math.PI/180;
  return degree*factor;
}

function renderTime() {
  
  var now = new Date();
  var today = now.toDateString();

  var time = now.toLocaleTimeString();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var milliseconds = now.getMilliseconds();
  var newSeconds = seconds + (milliseconds/1000);
  
  // Background
  gradient = ctx.createRadialGradient(250,250,5,250,250,300);
  gradient.addColorStop(0,'#09303a');
  gradient.addColorStop(1, '#000000');
  ctx.fillStyle = gradient;
  //ctx.fillStyle = 'rgba(0,0,0,)';
  ctx.fillRect(0,0,500,500);
  
  // Hours
  ctx.beginPath();
  ctx.arc(250,250,200, degToRad(270), degToRad((hours*15)-90));
  ctx.stroke();
  
  // Minutes
  ctx.beginPath();
  ctx.arc(250,250,170, degToRad(270), degToRad((minutes*6)-90));
  ctx.stroke();
  
  // Seconds
  ctx.beginPath();
  ctx.arc(250,250,140, degToRad(270), degToRad((newSeconds*6)-90));
  ctx.stroke();
  
  // Date
  ctx.font = "25px Economica";
	ctx.fillStyle = '#28d1fa';
	ctx.fillText(today, 175, 250);
  
  
  // Time
  ctx.font = "16px Economica";
	ctx.fillStyle = '#28d1fa';
	ctx.fillText(time, 220, 280);  
}

setInterval(renderTime, 40);