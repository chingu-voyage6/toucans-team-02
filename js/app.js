// Navigation
const mainNav = document.getElementById('main-nav');
const navbarToggle = document.querySelector('.navbar-toggle');

navbarToggle.addEventListener('click', function() {
  if (this.classList.contains('active')) {
    mainNav.style.display = 'none';
    this.classList.remove('active');
  } else {
    mainNav.style.display = 'flex';
    this.classList.add('active');
  }
});

// // Add to shopping cart
// Get buttons
const cartButtons = document.querySelectorAll('button');

// Planets selected
let planetsArray = [];

// Loop through buttons
for (i = 0; i < cartButtons.length; i++) {
  let selected = '';
  selected = cartButtons[i];

  selected.addEventListener('click', planetSelection);
  selected.addEventListener('click', disableButton);
}

// Show popup notification
function planetSelection() {
  // Create message
  const planet = this.dataset.name;

  // Create notification
  const notification = document.createElement('div');

  // Select placement UI element
  const insert = document.querySelector('.insert');
  const destinationSection = document.querySelector('.destinations');

  // Add popup class
  notification.className = 'popup';

  // Append element
  notification.appendChild(
    document.createTextNode(`${planet} added to basket`)
  );

  // Insert
  destinationSection.insertBefore(notification, insert);

  // Remove
  setTimeout(() => {
    notification.style.display = 'none';
  }, 2000);

  // Add selection to local storage
  planetsArray.push(this.dataset.name);
  localStorage.setItem('planets', JSON.stringify(planetsArray));
}
// Prevent mulitple selections
function disableButton() {
  this.disabled = true;
  this.style.backgroundColor = '#FE5C5C';
}
