let guess;
let userguess=[];
let audio=new Audio("music1.wav")
let audio1=new Audio("music.wav")
const initialise=()=>{
    guess=Math.floor(Math.random()*100);
    document.getElementById("newGamediv").style.display="none"
    document.getElementById("playGame").style.display="none"

};
const startGame=()=>{
    document.getElementById("welcome").style.display="none"
    document.getElementById("playGame").style.display="block"
   
}
const startagain=()=>{
    audio1.play()
    window.location.reload()
}
const startnewgame=()=>{
    document.getElementById("newGamediv").style.display="inline"
    document.getElementById("inputbox").setAttribute("disabled",true)
}
const compair=()=>{
    audio1.play()
    let userInput=Number(document.getElementById("inputbox").value)
    userguess=[...userguess, userInput]
    document.getElementById("atemp").innerHTML=userguess
    if(userguess.length< maxguess){
        if(userInput<guess){
        document.getElementById("anshead").innerHTML="Your guess number is low"
        document.getElementById("inputbox").value=""
        }
        else if(userInput>guess){
            document.getElementById("anshead").innerHTML="Your guess number is high" 
            document.getElementById("inputbox").value=""
        }
        else{
            document.getElementById("anshead").innerHTML="Your enter correct number"
            document.getElementById("inputbox").value=""
            startnewgame()
        }
    }
    else{
        if(userInput<guess){
            document.getElementById("anshead").innerHTML=`You loss!! correct number was ${guess}`
            document.getElementById("inputbox").value=""
            startnewgame()
            }
            else if(userInput>guess){
                document.getElementById("anshead").innerHTML=`You loss!! correct number was ${guess}`
                document.getElementById("inputbox").value=""
                startnewgame()
            }
            else{
                document.getElementById("anshead").innerHTML="Your enter correct number"
                document.getElementById("inputbox").value=""
                startnewgame()
            }
    }

    document.getElementById("atem").innerHTML=userguess.length
}
const easy=()=>{
    audio.play()
    startGame()
    maxguess=10
}
const hard=()=>{
    audio.play()
    startGame()
    maxguess=5
}