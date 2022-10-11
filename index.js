

var i = 0

const death = setInterval(()=>{
    i = i + 0.02
    $("#death").css("width",`${i}px`)
    $("#death").css("margin-left",`${i}px`)
    $("#death").css("margin-top",`${i}px`)
    if (i===1000){
        clearInterval(death)
     
    }
},10)

var m = 0

const mario = setInterval(()=>{
    m = m + 0.1
 
    $("#mario").css("margin-left",`${m}px`)

    if (m===1000){
        $("#mario").css("opacity","0")
        clearInterval(mario)
     
    }
},10)

$("#btDev").click(()=>{

    
 
    $("body").css("background-image","url(img/cover.webp)")

    i=0
    $("#death").css("width",`0px`)
    $("#death").css("margin-left",`0px`)
    $("#death").css("margin-top",`0px`)
    $("#death").css("opacity","1")
    $("#mario").css("opacity","0")

    $("#bottomLeftDev").attr("src","img/nodeJs.png")
    $("#bottomRightDev").attr("src","img/javaScript.png")

    $("#bottomLeftDev2").attr("src","img/react.png")
    $("#bottomRightDev2").attr("src","img/network.png")

    $("#titleCenter").text("FullStack Developer and IT operator")
    $("#bodyCenter").text("After working for 9 years in a company as an IT specialist, from 2016 I started to be interested in everything related to web development.I started with the basics up to the creation of more complex web apps with the use of node.js and react.")


})

$("#btGame").click(()=>{

    m=0
    $("body").css("background-image","url(img/marioPaper.png)");
    $("#death").css("opacity","0")
    $("#mario").css("opacity","1")
    $("#bottomLeftDev").attr("src","img/wow1.png")
    $("#bottomRightDev").attr("src","img/starcraft1.png")
    $("#bottomRightDev2").attr("src","img/stone.png")

    $("#bottomLeftDev2").attr("src","img/diablo.png")

    $("#titleCenter").text("Gamer")
    $("#bodyCenter").text("Since i was young i use to play the classic videogame , like tetris, space invaders... when i was teenager i was playng Counter Strike , wow and Starcraft. Unfurtnately i have now no much time as before for play , but when i have same spartime i still to enjoy some nice video game. ")

})

$("#btCrypto").click(()=>{

    $("body").css("background-image","url(img/cryptoPaper.jpg)")
    $("#death").css("opacity","0")
    $("#mario").css("opacity","0")
    $("#bottomLeftDev").attr("src","img/ethereum.png")
    $("#bottomRightDev").attr("src","img/blockchain.webp")

    $("#bottomLeftDev2").attr("src","img/polygon.png")
    $("#bottomRightDev2").attr("src","img/link.png")

    $("#titleCenter").text("CryptoCurrency enthusiast  ")
    $("#bodyCenter").text("Since 2015 i stat to get interest in all the crypto world, invest in some of the coin like bitcoin, ethereum and chainlink. In the more recent years i also start to develope web app with web3 technology.")


})







