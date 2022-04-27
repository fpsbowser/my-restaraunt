const home = () => {
    const title = document.createElement('h1');
    title.className = 'home-title'
    title.innerHTML = 'LOCAL. FRESH. BRICK.'
    
    const para = document.createElement('p');
    para.className = 'home-para'
    para.innerHTML = `Here at Pratt's Brick we specialize in the art of brick oven pizza. Since 1998 we have been perfecting the brick oven style and making it extraordinary.<br><br>With our locally sourced, fresh ingredients, and state of the art brick ovens, we guarantee you'll be back for more!`

    const quote = document.createElement('p');
    quote.innerHTML = `<br>"Tastiest brick oven pizza in the world"<br>-Gordon Ramsay`
    quote.className = 'quote'

    return {title, para, quote}
}

export default home;