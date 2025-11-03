// Une fois que le HTML ressemble à ce que vous voulez : 
// 1. Faire une variable count, qui stockera le nombre de clics
// 2. Faire un eventListener sur le bouton


// JS
const click = document.querySelector('.click');
const div = document.querySelector('.score');
const timerDiv = document.querySelector('.timer');
const resetBtn = document.querySelector('.reset');

let count = 0;
let timeLeft = 5;
let intervalId = null;
let timerRunning = false;

function increment() {
  count++;
  div.innerHTML = count;
}

click.addEventListener('click', () => {
  increment();

  // Lancer le timer seulement au premier clic
  if (!timerRunning) {
    timerRunning = true;
    timerDiv.innerHTML = timeLeft;

    intervalId = setInterval(() => {
      timeLeft--;
      timerDiv.innerHTML = timeLeft;

      if (timeLeft <= 0) {
        clearInterval(intervalId);
        click.disabled = true;  
        timerDiv.innerHTML = "Fin";
        resetBtn.style.display = "inline-block"; 
      }

    }, 1000);
  }
});

// ✅ Bouton "Recommencer"
resetBtn.addEventListener('click', () => {
  // Reset toutes les variables
  count = 0;
  timeLeft = 5;
  timerRunning = false;

  // Reset affichage
  div.innerHTML = count;
  timerDiv.innerHTML = timeLeft;

  // Réactiver le bouton
  click.disabled = false;

  // Cacher le bouton reset
  resetBtn.style.display = "none";

  // S’assurer qu’aucun interval ne continue
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
});


    
    
