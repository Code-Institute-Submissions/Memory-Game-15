const cards = document.querySelectorAll(".card");

cards.forEach(card => card.addEventListener('click', cardSelected));

//reset button
document.getElementById("restart").addEventListener('click', resetGame);

let hasSelectedCard = false;
let firstCard, secondCard;
let lockGameArea = false;//disables clicking more then two cards



function cardSelected (){
   if(lockGameArea === true) return;

   if(this === firstCard) return; // to prevent double clicking same card

   this.classList.add("selected");

   audio.clickedCardAudio.play();
   //let sound = this.children[2];
  // sound.play();

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
//reset button
function resetGame(){
   
}

(function shuffle(){
   cards.forEach(card => {
      let randOrder = Math.floor(Math.random() * 12);
      card.style.order = randOrder;
   });

})();

//audio controll

let audio = {
   introMusic : new Audio("assets/audio/startmusic.mp3"),
   loseAudio : new Audio("assets/audio/losesound.mp3"),
   winAudio : new Audio("assets/audio/winsound.mp3"),
   matchAudio : new Audio("assets/audio/matchsound.mp3"),
   lvlUpAudio : new Audio("assets/audio/lvlupsound.mp3"),
   clickedCardAudio : document.querySelectorAll('.card').children[2],

};