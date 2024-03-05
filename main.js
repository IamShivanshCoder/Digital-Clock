let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

function setClock(){
  let now = new Date();
  const hour= now.getHours();
  const minute= now.getMinutes();
  const second = now.getSeconds();
  
  hours.innerHTML = (hour<10)?"0"+hour:hour;
  minutes.innerHTML =(minute<10)?"0"+minute:minute;
  seconds.innerHTML = (second<10)?"0"+second:second;
}
setInterval(setClock,1000)
setClock();