console.log("Holaa 👋🏼, esta 🥁🥁🥁 es la tercera pre-entrega");
//Este formulario para realizar la reseña
const reviewForm = document.querySelector('#review-form');

reviewForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.querySelector('#nameInput').value;
  const email = document.querySelector('#emailInput').value;
  const review = document.querySelector('#reviewInput').value;
  
  
  const reviewData = {
    name: name,
    email: email,
    review: review
  };
  
  
  const reviewDataJSON = JSON.stringify(reviewData);
  
  
  localStorage.setItem('reviewData', reviewDataJSON);
  
  
  reviewForm.reset();
});
