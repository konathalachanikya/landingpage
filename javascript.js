document.getElementById('hamburger').addEventListener('click', () => {
  const navMenu = document.querySelector('.nav-menu');
  document.getElementById('hamburger').classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('hamburger').classList.remove('active');
    document.querySelector('.nav-menu').classList.remove('active');
  });
});
