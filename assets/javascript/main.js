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

class Echo {
   constructor(time,cards) {
      this.time = time;
      this.cardsArray = cards;
      this.timeRemaining = time;
      this.score = document.getElementById("score-count");
      this.scoreCount = this.score.innerText;
      this.timer = document.getElementById("timer");
      this.AudiControll = new AudiControll();
      this.level = 0;
      this.currentLevel = this.level;
      this.lvlOne = Array.from(document.getElementsByClassName("lvl-1"));
      this.lvlTwo = Array.from(document.getElementsByClassName("lvl-2"));
   }

   startGame(){
      this.score.innerText = 0;
      this.timeRemaining = this.time;
      this.soundsToCheck = null;
      this.matchedSounds = [];
      this.lockBoard = true;
      this.resetCards();
      this.timer.innerText = this.timeRemaining;
      setTimeout(() => {
         this.lockBoard = false;
         this.shuffle(this.cardsArray);
         this.countDown = this.startTimer();

      },700);
      
   }

   startTimer(){
      clearInterval(this.countDown);
      return setInterval(() => {
         this.timeRemaining--;
         this.timer.innerText = this.timeRemaining;

         if(this.timeRemaining === 0)
            this.gameOver();
         
      },1000);
   }

   victory(){
      this.AudiControll.winMusic();
      clearInterval(this.countDown);
      if(this.currentLevel === 0){
      document.getElementsByClassName("overlay-start")[2].classList.add("visible");
      }
      else{
         document.getElementsByClassName("overlay-start")[3].classList.add("visible");
      }
   }


   gameOver(){
      this.AudiControll.loseSound();
      clearInterval(this.countDown);
      document.getElementsByClassName("overlay-start")[1].classList.add("visible");
   }

   resetCards(){
      this.cardsArray.forEach(card =>{
         card.classList.remove("selected");
         card.classList.remove("matched");
      });
   }

   cardSelect(card){
      if(this.canSelectCard(card)){
         card.classList.add("selected");
         card.children[2].play();
      
      if(this.soundsToCheck){
         this.checkForMatch(card);
      }else{
         this.soundsToCheck = card;
         }
      }
   }

   checkForMatch(card){
      if( this.getSoundName(card) === this.getSoundName(this.soundsToCheck))
         this.soundMatch(card, this.soundsToCheck);

      else{
         this.soundMismatch(card, this.soundsToCheck);
         this.soundsToCheck = null;
      }
         
   }

   soundMatch(card1, card2){
      this.matchedSounds.push(card1);
      this.matchedSounds.push(card2);
      card1.classList.add("matched");
      card2.classList.add("matched");
      card1.classList.remove("selected");
      card2.classList.remove("selected");
      this.AudiControll.matchSound();
      this.score.innerText = this.matchedSounds.length / 2;
      
      if(this.matchedSounds.length === this.cardsArray.length){

         this.victory();
      }
      this.soundsToCheck = null;
      this.lockBoard = true;
      setTimeout(() => {
         this.lockBoard = false;
      }, 500);
   }

   soundMismatch(card1,card2){
      this.lockBoard = true;
      setTimeout(() => {
         card1.classList.remove("selected");
         card2.classList.remove("selected");
         this.lockBoard = false;
      }, 1000);
      
   }

   shuffle(){
      this.cardsArray.forEach(card => {
         let randOrder = Math.floor(Math.random() * 20);
         card.style.order = randOrder;
      });
   }

   getSoundName(card){
       return card.getElementsByTagName("audio")[0].src;
      
   }

   canSelectCard(card){
      return !this.lockBoard && !this.matchedSounds.includes(card) && card !== this.soundsToCheck;
   }

   levelUp(){
      document.getElementsByClassName("overlay-start")[2].classList.remove("visible");
      this.currentLevel++;
      this.lvlOne.forEach(el =>{
         el.classList.remove("hidden");
         el.classList.add("card");
         
      });
      this.addCards();
      this.startGame();
     /* if(this.currentLevel === 1){
         
         this.lvlTwo.classList.remove("hidden");
         this.lvlTwo.classList.add("card");
      }
      
      if(this.currentLevel === 2){
         document.getElementsByClassName("overlay-start")[3].classList.add("visible");
      }*/
   }
   addCards(){
      this.lvlOne.forEach(el =>{
         el.addEventListener('click',()=>{
            this.cardSelect(el);
         });
      });
      this.cardsArray.push(...this.lvlOne);
   }
}

//Check if DOMContent is loaded

if (document.readyState === 'loading') {
   document.addEventListener('DOMContentLoaded', ready);
 } else {
   ready();
 }

//Ready game function

function ready(){
   document.getElementById("start-game").addEventListener('click', ()=>{
      
      document.getElementsByClassName("overlay-start")[0].classList.remove("visible");
      game.startGame();
   });
   
   let restartBtn = Array.from(document.getElementsByClassName("restart"));
   restartBtn.forEach(btn => btn.addEventListener('click',()=> {
      game.startGame();
   }));
   
   let stopBtn = Array.from(document.getElementsByClassName("stop-playing"));
   stopBtn.forEach(btn => btn.addEventListener('click',()=>{
      document.getElementsByClassName("overlay-start")[3].classList.add("visible");
   }));

   let nextLvl = document.getElementById("next-lvl");
   nextLvl.addEventListener('click', ()=>{
      
      game.levelUp();
   });
   
   let cards = Array.from(document.querySelectorAll(".card"));
   
   let game = new Echo(60,cards);
   
   cards.forEach(card => card.addEventListener('click', ()=>{
      
      game.cardSelect(card);
   }));
   
   
}


///Lvl up functionality