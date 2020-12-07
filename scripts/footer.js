const contact = document.getElementById('menu');
const social = document.getElementById('social');

contact.addEventListener('click', () => {
  if (social.style.display === 'flex') {
    social.style.display = 'none';
  } else {
    social.style.display = 'flex';
  }
});
