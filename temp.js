{
let bar1=document.getElementById('bar1');
let bar2=document.getElementById('bar2');
let ball=document.getElementById('ball');
let start1=document.getElementById('start1');
let arrowleft=document.getElementById('arrowleft');
let arrowright=document.getElementById('arrowright');
let body=document.getElementById('body');
let score=document.getElementById('score');
let enter=document.getElementById('enter');
let audio=new Audio("sound.wav");
let Count=0;
alert("Ping-Pong Game By Divyansh");
let leftmove;
let rightmove;
leftcount=0;
rightcount=0;
function left(){
  if(leftcount==0){
    leftmove=setInterval(function(){
      if(bar1.offsetLeft>125){
        bar1.style.marginLeft=bar1.offsetLeft-25+'px';
        bar2.style.marginLeft=bar2.offsetLeft-25+'px';
      }
    },10);
    leftcount=1;
  }
  else{
    clearInterval(leftmove);
    leftcount=0;
  }
}
function right(){
  if(rightcount==0){
    rightmove=setInterval(function(){
      if((bar1.offsetLeft)<window.innerWidth-125){
        bar1.style.marginLeft=bar1.offsetLeft+25+'px';
        bar2.style.marginLeft=bar2.offsetLeft+25+'px';
      }
    },10);
    rightcount=1;
  }
  else{
    clearInterval(rightmove);
    rightcount=0;
  }
}
window.addEventListener('keypress',function(event){
  if(event.key=='Enter')
  {
    start1.style.opacity=0;
    score.innerText=Count;
    setTimeout(function(){score.style.opacity=100;},1000);
    btmlft();
    body.style.backgroundColor='black';
    score.style.color='white';
    gamestarted();
  }
});
enter.addEventListener('click',function(){
  enter.style.cursor="grabbing";
  setTimeout(function(){enter.style.cursor="grab";},100);
  start1.style.opacity=0;
  score.innerText=Count;
  setTimeout(function(){score.style.opacity=100;},1000);
  btmlft();
  body.style.backgroundColor='black';
  score.style.color='white';
  gamestarted();
});
function gamestarted() {

  arrowleft.addEventListener('touchstart',left);
  arrowright.addEventListener('touchstart',right);
  arrowleft.addEventListener('touchend',left);
  arrowright.addEventListener('touchend',right);
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
  });
}

function reset(){
  Count=0;
  start1.style.opacity=100;
  body.style.backgroundColor='white';
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
  let angle=random();
  let offsetleft=ball.offsetLeft;
  let minus=0;
  let br=setInterval(function()
  {
    if(ball.offsetTop>=bar1.offsetTop-55){
      if(bar1.offsetLeft<ball.offsetLeft-25+125 && bar1.offsetLeft+250>ball.offsetLeft-25+125+50){
        clearInterval(br);
        Count++;
        audio.play();
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
      let btm=ball.offsetTop;
      ball.style.marginTop=btm+5+'px';
      minus=minus+5;
      let degree=getTanFromDegrees(angle);
      let left=minus/degree;
      ball.style.marginLeft=offsetleft+left+'px';
    }
  },15);
}
function btmlft(){
  let angle=random();
  let degree=getTanFromDegrees(angle);
  let offsetleft=ball.offsetLeft;
  let minus=0;
  let br=setInterval(function()
  {
    if(ball.offsetTop>=bar1.offsetTop-55){
      if(bar1.offsetLeft<ball.offsetLeft-25+125 && bar1.offsetLeft+250>ball.offsetLeft-25+125+50){
        clearInterval(br);
        Count++;
        audio.play();
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
      let btm=ball.offsetTop;
      ball.style.marginTop=btm+5+'px';
      minus=minus+5;
      let left=minus/degree;
      ball.style.marginLeft=offsetleft-left+'px';
    }
  },15);
}
function toplft(){
  let angle=random();
  let degree=getTanFromDegrees(angle);
  let offsetleft=ball.offsetLeft;
  let minus=0;
  let br=setInterval(function()
  {
    if(ball.offsetTop<=65){
      if(bar2.offsetLeft<ball.offsetLeft-25+125 && bar2.offsetLeft+250>ball.offsetLeft-25+125+50){
        clearInterval(br);
        Count++;
        audio.play();
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
      let btm=ball.offsetTop;
      ball.style.marginTop=btm-5+'px';
      minus=minus+5;
      let left=minus/degree;
      ball.style.marginLeft=offsetleft-left+'px';
    }
  },15);
}
function toprgt(){
  let angle=random();
  let degree=getTanFromDegrees(angle);
  let offsetleft=ball.offsetLeft;
  let minus=0;
  let br=setInterval(function()
  {
    if(ball.offsetTop<=65){
      if(bar2.offsetLeft<ball.offsetLeft-25+125 && bar2.offsetLeft+250>ball.offsetLeft-25+125+50){
        clearInterval(br);
        Count++;
        audio.play();
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
      let btm=ball.offsetTop;
      ball.style.marginTop=btm-5+'px';
      minus=minus+5;
      let left=minus/degree;
      ball.style.marginLeft=offsetleft+left+'px';
    }
  },15);
}
}
