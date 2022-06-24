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





devDiv.addEventListener("mouseenter", function(){
    body.style.backgroundImage = "url('images/coding.jpeg')"
    fotoPro.src = "images/cod.jpeg"
    title.style.color = "white"
})

adminDiv.addEventListener("mouseenter", function(){
    body.style.backgroundImage = "url('images/admin.jpeg')"
    fotoPro.src = "images/ad.jpeg"
    title.style.color = "white"
    
})

body.addEventListener("mouseenter", function(){
    body.style.backgroundImage = "url('images/nature.jpeg')"
    fotoPro.src = "images/normal.jpeg"
    title.style.color = "black"
})


profileTop.addEventListener("mouseover",function(){
    body.style.backgroundImage = "url('images/nature.jpeg')"
    fotoPro.src = "images/normal.jpeg"
    title.style.color = "black"
})

let marginLeftPg = 0
body.addEventListener("keydown", function(e){
  
    switch (e.key) {
        case "d":
            marginLeftPg = marginLeftPg + 50
            if (marginLeftPg > (sky.offsetWidth -50) ){
                marginLeftPg = sky.offsetWidth - 50
                mario.style.marginLeft = `${marginLeftPg}px`
            break;
            } else {
                mario.style.marginLeft = `${marginLeftPg}px`
                break;
            }
            
        case "a":
                marginLeftPg = marginLeftPg - 50
                if (marginLeftPg < 0){
                    marginLeftPg = 0
                    mario.style.marginLeft = `0px`
                     break;
                }else {
                    mario.style.marginLeft = `${marginLeftPg}px`
                break;
                }
                
        case "w":
                mario.style.marginTop = "50px"
                setTimeout(()=>{
                    mario.style.marginTop = "100px"
                },500)
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
}, 2000);

if (body.offsetWidth > 700){
    movDiv.style.display = "none"
}

rightBt.addEventListener("click",function(){
    marginLeftPg = marginLeftPg + 50
        if (marginLeftPg > (sky.offsetWidth -50) ){
            marginLeftPg = sky.offsetWidth - 50
            mario.style.marginLeft = `${marginLeftPg}px`
        
        } else {
            mario.style.marginLeft = `${marginLeftPg}px`
 
        }
})

leftBt.addEventListener("click", function(){
    marginLeftPg = marginLeftPg - 50
                if (marginLeftPg < 0){
                    marginLeftPg = 0
                    mario.style.marginLeft = `0px`
           
                }else {
                    mario.style.marginLeft = `${marginLeftPg}px`
           
                }
})

jumpBt.addEventListener("click",function(){
    mario.style.marginTop = "50px"
                setTimeout(()=>{
                    mario.style.marginTop = "100px"
                },500)
})




