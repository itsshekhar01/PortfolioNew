document.addEventListener('DOMContentLoaded', () => {
  // Parallax effect
  let text = document.getElementById('text');
  let leaf1 = document.querySelector('.leaf1');
  let leaf2 = document.querySelector('.leaf2');
  let bush2 = document.querySelector('.bush2');
  let mount1 = document.querySelector('.mount1');
  let mount2 = document.querySelector('.mount2');

  window.addEventListener('scroll', () => {
    let value = window.scrollY;

    if (text) text.style.marginTop = value * 1.1 + 'px';
    if (leaf1) leaf1.style.marginLeft = -value + 'px';
    if (leaf2) leaf2.style.marginLeft = value + 'px';
    if (bush2) bush2.style.marginBottom = -value + 'px';
    if (mount1) mount1.style.marginBottom = -value * 1.1 + 'px';
    if (mount2) mount2.style.marginBottom = -value * 1.2 + 'px';
  });

  // Hamburger menu functionality
  const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont');
  const smallMenu = document.querySelector('.header__sm-menu');
  const headerHamMenuBtn = document.querySelector('.header__main-ham-menu');
  const headerHamMenuCloseBtn = document.querySelector('.header__main-ham-menu-close');
  const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link a');

  if (hamMenuBtn) {
    hamMenuBtn.addEventListener('click', () => {
      smallMenu.classList.toggle('header__sm-menu--active');
      headerHamMenuBtn.classList.toggle('d-none');
      headerHamMenuCloseBtn.classList.toggle('d-none');
    });
  }

  headerSmallMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      smallMenu.classList.remove('header__sm-menu--active');
      headerHamMenuBtn.classList.remove('d-none');
      headerHamMenuCloseBtn.classList.add('d-none');
    });
  });

  // Redirect logo to homepage
  const headerLogoContainer = document.querySelector('.header__logo-container');

  if (headerLogoContainer) {
    headerLogoContainer.addEventListener('click', () => {
      location.href = 'index.html';
    });
  }
});
