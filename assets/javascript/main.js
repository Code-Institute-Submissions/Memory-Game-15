//Check if DOMContent is loaded

if (document.readyState === 'loading') {
   document.addEventListener('DOMContentLoaded', ready());
 } else {
   ready();
 }


//audio controll

class AudiControll  {
   constructor() {
   this.introMusic = new Audio("assets/audio/startmusic.mp3");
   this.introMusic.volume = 0.1;
   this.loseAudio = new Audio("assets/audio/losesound.mp3");
   this.winAudio = new Audio("assets/audio/winsound.mp3");
   this.matchAudio = new Audio("assets/audio/matchsound.mp3");
   this.lvlUpAudio = new Audio("assets/audio/lvlupsound.mp3");
   
   }

   loseSound(){
      this.loseAudio.play();
   }

   winMusic(){
      this.winAudio.play();
   }
   matchSound(){
      this.matchAudio.play();
   }

   lvlUpSound(){
      this.lvlUpAudio.play();
   }

}

///Ready game function
function ready(){
   document.getElementById("start-game").addEventListener('click', ()=>{
      
      document.getElementsByClassName("overlay-start")[0].classList.remove("visible");
   });
   
   let cards = document.querySelectorAll(".card");

   cards.forEach(card => card.addEventListener('click', cardSelected));

   let overlays = Array.from(document.getElementsByClassName("overlay-start"));

   overlays.forEach(overlay => { overlay.addEventListener('click',()=>{
         overlay.classList.remove("visible");
         game.startGame();
      });

   });
}


 


class Echo {
   constructor(time,cards) {
      this.time = time;
      this.cards = cards;
      this.timeRemaining = time;
      this.score = document.getElementById("scoreCount");
      this.timer = document.getElementById("timer");
      this.AudiControll = new AudiControll();

   }
}








//////////////////////////////////////////old code -->


const cards = document.querySelectorAll(".card");

   cards.forEach(card => card.addEventListener('click', cardSelected));



let hasSelectedCard = false;
let firstCard, secondCard;
let lockGameArea = false;//disables clicking more then two cards



function cardSelected (){
   if(lockGameArea === true) return;

   if(this === firstCard) return; // to prevent double clicking same card

   this.classList.add("selected");
   
   

   let sound = this.children[2];
   sound.play();

   if(!hasSelectedCard){

      hasSelectedCard = true;
      firstCard = this;
      
   }
   else{
      
      hasSelectedCard = false;
      secondCard = this;
      


      checkForMatch();
   }
   
}

function checkForMatch(){

   if(firstCard.dataset.sound === secondCard.dataset.sound){
      matchedSounds();
   }
   else{
      
      mismatchedSounds();
   }
}

function matchedSounds(){
      firstCard.removeEventListener('click',cardSelected);
      secondCard.removeEventListener('click',cardSelected);

      firstCard.classList.remove("selected");
      secondCard.classList.remove("selected");

      firstCard.classList.add("matched");
      secondCard.classList.add("matched");

      resetBoard();
      //add sounds
      setTimeout(() => {
         matchSound();
      }, 500);
      
}

function matchSound(){
   let audioC = new AudiControll();
      audioC.matchSound();
}

function mismatchedSounds(){

   lockGameArea = true;

   setTimeout(() => {
      firstCard.classList.remove("selected");
      secondCard.classList.remove("selected");

      resetBoard();
      },1000);

      
}

function resetBoard(){
   [hasSelectedCard, lockGameArea] = [false, false];
   [firstCard,secondCard] = [null, null];
}
//reset button function ???


(function shuffle(){
   cards.forEach(card => {
      let randOrder = Math.floor(Math.random() * 12);
      card.style.order = randOrder;
   });

})();

