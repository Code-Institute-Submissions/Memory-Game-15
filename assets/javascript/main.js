const cards = document.querySelectorAll(".card");



cards.forEach(card => card.addEventListener('click', cardSelected));



function cardSelected (){
   this.classList.toggle("selected");
   var x = this.children[2];
   x.play();
}

