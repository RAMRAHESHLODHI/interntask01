const navBar = document.querySelector('.nav-bar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    navBar.classList.add('scrolled');
  } else {
    navBar.classList.remove('scrolled');
  }
});

navBar.addEventListener('mouseover', (e) => {
  if (e.target.tagName === 'A') {
    navBar.classList.add('hover');
  }
});

navBar.addEventListener('mouseout', () => {
  navBar.classList.remove('hover');
});
