var time_stamp = 0; // Or Date.now()
window.addEventListener("click", function(event_) {
    if (event_.timeStamp - time_stamp < 300) { // A tap that occurs less than 300 ms from the last tap will trigger a double tap. This delay may be different between browsers.
        event_.preventDefault();
        return false;
    }
    time_stamp = event_.timeStamp;
});


var bar1=document.getElementById('bar1');
var bar2=document.getElementById('bar2');
var ball=document.getElementById('ball');
var start1=document.getElementById('start1');
var arrowleft=document.getElementById('arrowleft');
var arrowright=document.getElementById('arrowright');
var enter=document.getElementById('enter');
var Count=0;
alert("Ping-Pong Game By Divyansh");
arrowleft.addEventListener('click',function(event){
  arrowleft.style.cursor="grabbing";
  setTimeout(function(){arrowleft.style.cursor="grab";},100);
  if(bar1.offsetLeft>125){
    bar1.style.marginLeft=bar1.offsetLeft-25+'px';
    bar2.style.marginLeft=bar2.offsetLeft-25+'px';
  }
});
arrowright.addEventListener('click',function(event){
  arrowright.style.cursor="grabbing";
  setTimeout(function(){arrowright.style.cursor="grab";},100);
  console.log(1);
  if((bar1.offsetLeft)<window.innerWidth-125){
    bar1.style.marginLeft=bar1.offsetLeft+25+'px';
    bar2.style.marginLeft=bar2.offsetLeft+25+'px';
  }
});
enter.addEventListener('click',function(event){
  enter.style.cursor="grabbing";
  setTimeout(function(){enter.style.cursor="grab";},100);
  start1.style.opacity=0;
  score.innerText=Count;
  setTimeout(function(){score.style.opacity=100;},1000);
  btmlft();
});
window.addEventListener('keypress',function(event){
  if(event.key=='a')
  {
    if(bar1.offsetLeft>125){
      bar1.style.marginLeft=bar1.offsetLeft-25+'px';
      bar2.style.marginLeft=bar2.offsetLeft-25+'px';
    }
  }
  if(event.key=='d')
  {
    if((bar1.offsetLeft)<window.innerWidth-125){
      bar1.style.marginLeft=bar1.offsetLeft+25+'px';
      bar2.style.marginLeft=bar2.offsetLeft+25+'px';
    }
  }
  if(event.key=='Enter')
  {
    start1.style.opacity=0;
    score.innerText=Count;
    setTimeout(function(){score.style.opacity=100;},1000);
    btmlft();
  }
});

function reset(){
  Count=0;
  start1.style.opacity=100;
  score.style.opacity=0;
  bar1.style.marginLeft='50%';
  bar2.style.marginLeft='50%';
  ball.style.marginLeft='50%';
  ball.style.marginTop='60px';
}
function failed(){
  localStorage.setItem("high",Math.max(localStorage.getItem("high"),Count));
  alert("You Failed. Your Score Is : "+Count+". Hightest Score Till Now : "+localStorage.getItem("high"));
}


function getTanFromDegrees(degrees) {
  return Math. tan(degrees * Math. PI / 180);
}
function random(){
  return Math.floor((Math.random()*30)+30);
}
function btmrgt(){
  var angle=random();
  var offsetleft=ball.offsetLeft;
  var minus=0;
  var br=setInterval(function()
  {
    if(ball.offsetTop>=bar1.offsetTop-55){
      if(bar1.offsetLeft<ball.offsetLeft-25+125 && bar1.offsetLeft+250>ball.offsetLeft-25+125+50){
        clearInterval(br);
        Count++;
        score.innerText=Count;
        toprgt();
      }
    }
    if((ball.offsetTop+60)>window.innerHeight){
      failed();
      clearInterval(br);
      reset();
    }
    else if((ball.offsetLeft-25+70)>window.innerWidth){
      clearInterval(br);
      btmlft();
    }
    else{
      var btm=ball.offsetTop;
      ball.style.marginTop=btm+5+'px';
      minus=minus+10;
      var degree=getTanFromDegrees(angle);
      var left=minus/degree;
      ball.style.marginLeft=offsetleft+left+'px';
    }
  },40);
}
function btmlft(){
  var angle=random();
  var degree=getTanFromDegrees(angle);
  var offsetleft=ball.offsetLeft;
  var minus=0;
  var br=setInterval(function()
  {
    if(ball.offsetTop>=bar1.offsetTop-55){
      if(bar1.offsetLeft<ball.offsetLeft-25+125 && bar1.offsetLeft+250>ball.offsetLeft-25+125+50){
        clearInterval(br);
        Count++;
        score.innerText=Count;
        toplft();
      }
    }
    if((ball.offsetTop+60)>window.innerHeight){
      failed();
      clearInterval(br);
      reset();
    }
    else if((ball.offsetLeft-25-10)<0){
      clearInterval(br);
      btmrgt();
    }
    else{
      var btm=ball.offsetTop;
      ball.style.marginTop=btm+5+'px';
      minus=minus+10;
      var left=minus/degree;
      ball.style.marginLeft=offsetleft-left+'px';
    }
  },40);
}
function toplft(){
  var angle=random();
  var degree=getTanFromDegrees(angle);
  var offsetleft=ball.offsetLeft;
  var minus=0;
  var br=setInterval(function()
  {
    if(ball.offsetTop<=65){
      if(bar2.offsetLeft<ball.offsetLeft-25+125 && bar2.offsetLeft+250>ball.offsetLeft-25+125+50){
        clearInterval(br);
        Count++;
        score.innerText=Count;
        btmlft();
      }
    }
    if(ball.offsetTop<13){
      failed();
      clearInterval(br);
      reset();
    }
    else if((ball.offsetLeft-25-10)<0){
      clearInterval(br);
      toprgt();
    }
    else{
      var btm=ball.offsetTop;
      ball.style.marginTop=btm-5+'px';
      minus=minus+10;
      var left=minus/degree;
      ball.style.marginLeft=offsetleft-left+'px';
    }
  },40);
}
function toprgt(){
  var angle=random();
  var degree=getTanFromDegrees(angle);
  var offsetleft=ball.offsetLeft;
  var minus=0;
  var br=setInterval(function()
  {
    if(ball.offsetTop<=65){
      if(bar2.offsetLeft<ball.offsetLeft-25+125 && bar2.offsetLeft+250>ball.offsetLeft-25+125+50){
        clearInterval(br);
        Count++;
        score.innerText=Count;
        btmrgt();
      }
    }
    if(ball.offsetTop<13){
      failed();
      clearInterval(br);
      reset();
    }
    else if((ball.offsetLeft-25+70)>window.innerWidth){
      clearInterval(br);
      toplft();
    }
    else{
      var btm=ball.offsetTop;
      ball.style.marginTop=btm-5+'px';
      minus=minus+10;
      var left=minus/degree;
      ball.style.marginLeft=offsetleft+left+'px';
    }
  },40);
}