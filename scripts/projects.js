const cards = document.getElementById('grid')
const projects = [
    {link: 'project01.html', image: 'Projeto 1'},
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
        <div class="hex">
            <a href="projects/${projects.link}">
                ${projects.image}
            </a>
        </div>
    </div>
    `
})

cards.innerHTML = cardHTML




