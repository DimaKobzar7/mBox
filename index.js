const burgerIcon = document.querySelector('.burgerIcon');
const burgerMenu = document.querySelector('.burgerMenu')
const navBarLinks = document.querySelectorAll('.navbar__link');
const body = document.body;

if (burgerIcon) {
  burgerIcon.addEventListener('click', () => {
    burgerIcon.classList.toggle('burgerIcon-active');
    burgerMenu.classList.toggle('burgerIcon-active');
    body.classList.toggle('stopScrolling')
  });
}

if (navBarLinks) {
  navBarLinks.forEach(menuLink => {
    menuLink.addEventListener('click', (event => {
      navBarLinks.forEach(link => {
        if (link.classList.contains('active')) {
          link.classList.remove('active');
        }
      });

      event.target.classList.add("active")
    }))
  })
}

