const links = document.querySelectorAll('.menu li a');
const checkbox = document.getElementById('check');

links.forEach((link) => {
  link.addEventListener('click', () => {
    checkbox.checked = false;
  });
});