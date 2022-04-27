import home from './home.js'
import menu from './menu.js'
import contact from './contact.js'


// DOM Elements
let div = document.getElementById('content');

// Bind Events
const homeButton = document.getElementById('home')
homeButton.addEventListener('click', () => {
    // Add style
    homeButton.style = 'border: 2px solid gold;color: gold;'
    menuButton.style = ''
    contactButton.style = ''
    homePage()
})

const menuButton = document.getElementById('menu')
menuButton.addEventListener('click', () => {
    // Add style
    menuButton.style = 'border: 2px solid gold;color: gold;'
    contactButton.style = ''
    homeButton.style = ''
    menuPage()
})

const contactButton = document.getElementById('contact')
contactButton.addEventListener('click', () => {
    // Add style
    contactButton.style = 'border: 2px solid gold;color: gold;'
    homeButton.style = ''
    menuButton.style = ''
    contactPage()
})

// Functions
function homePage() {
    removeElements(div)
    div.appendChild(home().title)
    div.appendChild(home().para)
    div.appendChild(home().quote)
}

function menuPage() {
    removeElements(div)
    div.appendChild(menu().title)
}

function contactPage() {
    removeElements(div)
    div.appendChild(contact().title)
    div.appendChild(contact().para)
}
// Remove elements function
function removeElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

// Default
homePage()
homeButton.style = 'border: 2px solid gold;color: gold;'







