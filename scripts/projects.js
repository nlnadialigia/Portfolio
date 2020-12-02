/* eslint-disable no-shadow */
const cards = document.getElementById('grid');
const projects = [
  { name: 'rocketseat', link: 'rocketseat.html', image: 'rocket.png' },
  { name: 'igti', link: 'igti.html', image: 'igti.png' },
  { name: 'wizard', link: 'wizard.html', image: 'logo-wizard.png' },
  { name: 'day30', link: '30D.html', image: '30D.png' },
  { name: 'others', link: 'others.html', image: 'others.png' },
];

let cardHTML = '';

projects.forEach(projects => {
  cardHTML += `
    <div class="items">
      <a href="../views/projects/${projects.link}">
        <img class="${projects.name}"src="../images/${projects.image}">
      </a>
    </div>
    `;
});

cards.innerHTML = cardHTML;
