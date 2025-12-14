
import { elgameZone, elresultZone, elHands, elRobot, elUser, elrefreshGameButton  } from "./html-elements.js";

function robotChoose() {
const hands = ["rock", "paper", "scissors"];
const randomIndex = Math.trunc( Math.random() * hands.length ); 
return hands [randomIndex];

}
robotChoose();

function swapZone(boolean) {
    if(boolean) {
        elgameZone.style.display = "none";
        elresultZone.style.display = "flex";

    } else {
         elgameZone.style.display = "flex";
        elresultZone.style.display = "none";
    }
}

function chekWinner (user, robot) {
    if(user === robot) {
        return "TIE";       
    }
    else if (user ==="paper" && robot === "scissors") {
        return "ROBOT";
      }   
        else if (user ==="scissors" && robot === "rock") {
        return "ROBOT";
      }   
       else if (user ==="rock" && robot === "paper") {
        return "ROBOT";
      }   else {
        return "USER";
      }

}

elHands.forEach((elHand) => {
    elHand.addEventListener("click", (evt)=> {

          swapZone(true);

       
        const user = evt.target.alt;
        
       
        const robot = robotChoose();

    elUser.src = evt.target.src;
    elRobot.src = "./img/hand-load.svg";
    
    setTimeout(() => {
        elRobot.src = `./img/${robot}.svg`;

        const winner = chekWinner(user, robot);
        console.log(winner);
         
        
    }, 1000);
        
    });
}); 

elrefreshGameButton.addEventListener("click", ()=> {
    swapZone(false);
} );
