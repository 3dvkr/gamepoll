const addNewGameButtons = Array.from(
  document.querySelectorAll('.add-new-game-button')
);
const gameForm = document.querySelector('#game-form');
document
  .querySelector('#next-game-date-button')
  .addEventListener('click', () => {
    document.querySelector('#next-game-date').classList.toggle('hidden');
  });

addNewGameButtons.forEach(el =>
  el.addEventListener('click', displayNewGameForm)
);

function displayNewGameForm(e) {
  gameForm.classList.toggle('hidden');
}

gameForm.addEventListener('click', clickedOutSideFormClose)

function clickedOutSideFormClose(e){
  if(e.target === e.currentTarget){
    gameForm.classList.toggle('hidden');
  }
}