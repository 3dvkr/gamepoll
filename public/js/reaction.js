const userReaction = document.getElementById('userReaction');

userReaction.addEventListener('click', sendAMsg);

function sendAMsg(e) {
  if (e.target != e.currentTarget) {
    if (e.target.name === 'happy-outline') {
      const happyMessage = document.createElement('p');
      happyMessage.textContent = 'Hope to see you there!';
      userReaction.appendChild(happyMessage);
      userReaction.removeEventListener('click', sendAMsg);
    } else if (e.target.name === 'sad-outline') {
      const sadMessage = document.createElement('p');
      sadMessage.textContent = `I'm sure if you came we would have fun...`;
      userReaction.appendChild(sadMessage);
      userReaction.removeEventListener('click', sendAMsg);
    }
  }
}
