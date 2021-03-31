const upvote = document.querySelectorAll('.upvote');
const downvote = document.querySelectorAll('.downvote');


upvote.forEach(el =>
  el.addEventListener('click', e => {
    const endpoint = `/upvote/${e.target.name}`;
    //USE THIS IN LOCAL STORAGE TO SEND AN ALERT
    //WHEN SOMEONE TRIES TO VOTE TWICE
    console.log(e.target.name);
    fetch(endpoint, {
      method: 'PATCH',
    })
      .then(response => response.json())
      .then(data => (window.location.href = data.redirect))
      .catch(err => console.log(err));
  })
);

downvote.forEach(el =>
  el.addEventListener('click', e => {
    const endpoint = `/downvote/${e.target.name}`;
    console.log(endpoint);
    fetch(endpoint, {
      method: 'PATCH',
    })
      .then(response => response.json())
      .then(data => (window.location.href = data.redirect))
      .catch(err => console.log(err));
  })
);




// const gameBoxes = Array.from(document.querySelectorAll('.game-info'));
// const cool = gameBoxes.reduce(function(a, b){
  
//   return a.filter(x => x.getAttribute('votes') >= b.getAttribute('votes'))
// }, gameBoxes)

// cool.forEach(el => el.style.backgroundColor = 'rgba(192, 255, 104, 0.602)')