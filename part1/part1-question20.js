function currDate(){
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}

var temp=setInterval(function(){currDate()},1000);
