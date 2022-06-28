const body = document.querySelector("body")
const devDiv = document.querySelector("#developerDiv")
const adminDiv = document.querySelector("#designerDiv")
const fotoPro = document.querySelector("#proFoto")
const profileTop = document.querySelector("#top")
const title = document.querySelector("#title")
const mario = document.querySelector("#marioPg")
const sky = document.querySelector("#sky")
const star = document.querySelector("#star")
const movDiv = document.querySelector("#movDiv")
const leftBt = document.querySelector("#leftBt")
const rightBt = document.querySelector("#rightBt")
const jumpBt = document.querySelector("#jumpBt")
const score = document.querySelector("#score")

body.style.backgroundImage = "url('images/nature.jpeg')"
title.style.color = "black"

devDiv.addEventListener("mouseenter", function(){

    fotoPro.src = "images/cod.jpeg"
   
})

adminDiv.addEventListener("mouseenter", function(){
 
    fotoPro.src = "images/ad.jpeg"
   
    
})

body.addEventListener("mouseenter", function(){
    
    fotoPro.src = "images/normal.jpeg"
    
})


profileTop.addEventListener("mouseover",function(){
 
    fotoPro.src = "images/normal.jpeg"
   
})

let marginLeftPg = 0
var scoreGame = 0
body.addEventListener("keydown", function(e){

    switch (e.key) {
        case "d":
            marginLeftPg = marginLeftPg + 50
            if (marginLeftPg > (sky.offsetWidth -50) ){
                marginLeftPg = sky.offsetWidth - 50
                mario.style.marginLeft = `${marginLeftPg}px`
                mario.src = ("images/mario.png")
            break;
            } else {
                mario.style.marginLeft = `${marginLeftPg}px`
                mario.src = ("images/mario.png")
                break;
            }
            
        case "a":
                marginLeftPg = marginLeftPg - 50
                if (marginLeftPg < 0){
                    marginLeftPg = 0
                    mario.style.marginLeft = `0px`
                    mario.src = ("images/mario.png")
                     break;
                     
                }else {
                    mario.style.marginLeft = `${marginLeftPg}px`
                    mario.src = ("images/mario.png")
                break;
                }
                
        case "w":
                mario.style.marginTop = "50px"
                setTimeout(()=>{
                    mario.style.marginTop = "100px"
                },500)
                mario.src = ("images/okeyMario.gif")
                break;
        
        case " ":
            if (doElsCollide(mario, star)){
                scoreGame++
                score.innerHTML = `${scoreGame}`
                mario.src = ("images/okeyMario.gif")
                stars()
            } 
                break;
        
        default:
            break;
    }

   
    
})

function stars(){
    const positionW = Math.floor(Math.random()*sky.offsetWidth)
    const positionH = (Math.floor(Math.random()*100))+50
    star.style.marginLeft = `${positionW}px`
    star.style.marginTop = `${positionH}px`
    star.style.display = "inline"
}

setInterval(() => {
    stars()
}, 4000);

if (body.offsetWidth > 700){
    movDiv.style.display = "none"
}

rightBt.addEventListener("click",function(){
    if (doElsCollide(mario, star)){
        scoreGame++
        score.innerHTML = `${scoreGame}`
        mario.src = ("images/okeyMario.gif")
        stars()
    } 
    marginLeftPg = marginLeftPg + 50
        if (marginLeftPg > (sky.offsetWidth -50) ){
            marginLeftPg = sky.offsetWidth - 50
            mario.style.marginLeft = `${marginLeftPg}px`
        
        } else {
            mario.style.marginLeft = `${marginLeftPg}px`
 
        }
})

leftBt.addEventListener("click", function(){
    if (doElsCollide(mario, star)){
        scoreGame++
        score.innerHTML = `${scoreGame}`
        mario.src = ("images/okeyMario.gif")
        stars()
    } 
    marginLeftPg = marginLeftPg - 50
                if (marginLeftPg < 0){
                    marginLeftPg = 0
                    mario.style.marginLeft = `0px`
           
                }else {
                    mario.style.marginLeft = `${marginLeftPg}px`
           
                }
})

jumpBt.addEventListener("click",function(){
    if (doElsCollide(mario, star)){
        scoreGame++
        score.innerHTML = `${scoreGame}`
        mario.src = ("images/okeyMario.gif")
        stars()
    } 
    mario.style.marginTop = "50px"
                setTimeout(()=>{
                    mario.style.marginTop = "100px"
                },500)
})

doElsCollide = function(el1, el2) {
    el1.offsetBottom = el1.offsetTop + el1.offsetHeight;
    el1.offsetRight = el1.offsetLeft + el1.offsetWidth;
    el2.offsetBottom = el2.offsetTop + el2.offsetHeight;
    el2.offsetRight = el2.offsetLeft + el2.offsetWidth;
    
    return !((el1.offsetBottom < el2.offsetTop) ||
             (el1.offsetTop > el2.offsetBottom) ||
             (el1.offsetRight < el2.offsetLeft) ||
             (el1.offsetLeft > el2.offsetRight))
};






