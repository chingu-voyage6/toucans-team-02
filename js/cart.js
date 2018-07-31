// // CART PAGE - Retrieve local storage and print to ticket

// Get elements
const ticketInsert = document.querySelector('.content-insert');
const ticketButton = document.querySelector('.ticket-btn');
const ticketImage = document.querySelector('.ticket-img');

ticketButton.addEventListener('click', insertDestinations);

function insertDestinations() {
  // Get planets from local storage
  const planetList = JSON.parse(localStorage.getItem('planets'));

  // Insert planets
  let newElement;

  for (i = 0; i < planetList.length; i++) {
    newElement = document.createElement('li');
    newElement.className = 'planet_list';
    newElement.innerHTML = planetList[i];
    ticketInsert.appendChild(newElement);
  }
  // Show image
  ticketImage.style.display = 'block';
}
