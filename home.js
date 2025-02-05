
let light = document.querySelector('.light');
let main = document.querySelector('#ul');
let gameBtn = document.querySelector('#gameBox');
let appBtn = main.childNodes[3];
let closeSnake = document.querySelector('#closeSnake');
let mem = document.querySelector('#mem');
let closeMem = document.querySelector('#closeMem');
let closeMan = document.querySelector('#closeMan');
let man =  document.querySelector('#hangman');
//let apps = document.querySelector('#apps div');
//let appBox = document.querySelector('#apps');
//let games = document.querySelector('#games');
let gamesBox = document.querySelector('.games');

let appBox = document.querySelector('.apps');


function showLight() {
    light.classList.toggle('active');
    
    
}
setInterval(showLight,5000);
    
for(let i =0; i<20; i++){
let box = document.createElement("div");
box.classList.add('box');
box.style.bottom = Math.floor(Math.random()*5)+'%';
box.style.left = Math.floor(Math.random()*100)+'%';
box.style.animationDelay = Math.floor(Math.random()*10)+'s';
box.style.animationDuration = Math.floor((Math.random()*5)+5)+'s';
//box.style.animationDirection ='reverse';
document.body.appendChild(box);
//
}
//console.log(gamesBox.childNodes);

gameBtn.addEventListener('click',()=>{
    
    gamesBox.style.display = gamesBox.style.display =='block'?'none':'block';
    if(appBox.style.display=='block'){
        appBox.style.display='none';
    }
})
appBtn.addEventListener('click',()=>{
    
    appBox.style.display = appBox.style.display =='block'?'none':'block';
    if(gamesBox.style.display=='block'){
        gamesBox.style.display='none';
    }
})

document.querySelector('#closeAge').addEventListener('click',()=>{
    
    document.querySelector('#age').style.display = 'none';
})


document.querySelector('#closeCalc').addEventListener('click',()=>{
    
    document.querySelector('#calc').style.display = 'none';
})
document.querySelector('#closePass').addEventListener('click',()=>{
    
    document.querySelector('#pass').style.display = 'none';
})

document.querySelector('#closeCounter').addEventListener('click',()=>{
    
    document.querySelector('#counter').style.display = 'none';
})

document.querySelector('#closeAlarm').addEventListener('click',()=>{
    
    document.querySelector('#alarm').style.display = 'none';
})
document.querySelector('#closeTodo').addEventListener('click',()=>{
    
    document.querySelector('#doList').style.display = 'none';
})




closeMem.addEventListener('click',()=>{
    
    mem.style.display = 'none';
})
document.querySelector('#closeTic').addEventListener('click',()=>{
    
    document.querySelector('#tic').style.display = 'none';
})
document.querySelector('#closeFlappy').addEventListener('click',()=>{
    
    document.querySelector('#flappy').style.display = 'none';
})

document.querySelector('#closeDoodle').addEventListener('click',()=>{
    
    document.querySelector('#doodle').style.display = 'none';
})

document.querySelector('#closePingpong').addEventListener('click',()=>{
    
    document.querySelector('#pingpong').style.display = 'none';
})

document.querySelector('#closeWhack').addEventListener('click',()=>{
    
    document.querySelector('#whack').style.display = 'none';
})
closeMan.addEventListener('click',()=>{


    
    man.style.display = 'none';
})

closeSnake.addEventListener('click',()=>{
snake.style.display ='none';
})



let section1 = document.querySelector('section').childNodes;
//console.log(section);
section1 = Array.prototype.slice.call(section1);
let section2 = document.querySelector('.section').childNodes;
//console.log(section2);
section2 = Array.prototype.slice.call(section2);
//console.log(section2[1].id);

function openGame(id) {
var i =0;
while(i<section1.length){
    if(section1[i].id === id){
       gamesBox.style.display ='none';
        section1[i].style.display ='block';
        
       }
    i++;    
}
}
function openApp(id) {
    var i =0;
    while(i<section2.length){
        if(section2[i].id === id){
           appBox.style.display ='none';
            section2[i].style.display ='block';
        
           }
        i++;
    }
    }
let startX=0;startY=0;
//openGame('snake')
function move(e) {
    document.addEventListener('mousemove',move);
    document.addEventListener('mouseup',noMove);
       startX = e.x;
       startY= e.y;
       document.querySelector('#tic').style.top = startY-70+'px';
       document.querySelector('#tic').style.left = startX-70+'px';
    };
  
 function noMove() {
    document.removeEventListener('mousemove',move);
 }




