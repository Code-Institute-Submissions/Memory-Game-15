const cards = document.querySelectorAll(".card");

cards.forEach(card => card.addEventListener('click', cardSelected));



let hasSelectedCard = false;
let firstCard, secondCard;
let lockGameArea = false;//disables clicking more then two cards



function cardSelected (){
   if(lockGameArea === true) return;

   this.classList.add("selected");
   //let sound = this.children[2];
   //sound.play();

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
      //add sounds
}

function mismatchedSounds(){

   lockGameArea = true;

   setTimeout(() => {
      firstCard.classList.remove("selected");
      secondCard.classList.remove("selected");

      lockGameArea = false;
      },1000);

      
}