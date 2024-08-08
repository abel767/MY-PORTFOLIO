// Get the menu and the links inside it
const menu = document.querySelector('.nav-bar');
const links = menu.querySelectorAll('a');

// Add an event listener to each link
links.forEach((link) => {
  link.addEventListener('click', () => {
    // Remove the open class from the menu element
    menu.classList.remove('open');
  });
});

$('.nav-bar a').on('click', function() {
    $('.nav-bar').removeClass('open');
  });