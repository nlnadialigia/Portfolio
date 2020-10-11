const cards = document.getElementById('grid')
const projects = [
    {link: 'wizard-project.html', image: 'logo-wizard.png'},
    {link: 'project02.html', image: ''},
    {link: 'project03.html', image: ''},
    {link: 'project04.html', image: ''},
    {link: 'project05.html', image: ''},
    {link: 'project06.html', image: ''},
]

let cardHTML = ''

projects.forEach(projects => {
    cardHTML += `
    <div class="items">
        <a href="../views/projects/${projects.link}">
            <img src="../images/${projects.image}">
        </a>
    </div>
    `
})

cards.innerHTML = cardHTML




