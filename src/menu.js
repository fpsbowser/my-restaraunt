const menu = () => {

    class MenuItem {
        constructor(image, title, description) {
            this.image = image
            this.title = title
            this.description = description
        }
    }

    const title = document.createElement('h1');
    title.className = 'menu-title'
    title.innerHTML = 'MENU'

    const items = []
    
    const item1 = new MenuItem(
        'pizza1.png',
        'Classic Sausage',
        'Tomato sauce, fresh mozzarella, tomato slices, homemade sausage, garlic, basil'
    )
    const item2 = new MenuItem(
        'pizza2.png',
        'Shrimp',
        'Tomato sauce, fresh mozzarella, shrimps imported from Lumbridge, black olives, basil'
    )
    const item3 = new MenuItem(
        'pizza3.png',
        'Classic Cheese',
        'Tomato sauce, fresh mozzarella, optional chili peppers, black olives, basil'
    )
    const item4 = new MenuItem(
        'pizza4.png',
        'Pineapple Lover',
        'Special pineapple/tomato sauce, pineapple slices, bacon, black olives, basil'
    )
    const item5 = new MenuItem(
        'pizza5.png',
        'Fungy',
        'Tomato sauce, fresh mozzarella, onions, peppers, champignons, basil'
    )
    const item6 = new MenuItem(
        'pizza6.png',
        'Spicy Cheese',
        'Spicy tomato sauce, fresh mozzarella, tomato slices, onions, chili peppers'
    )
    const item7 = new MenuItem(
        'pizza7.png',
        'Seafood Delight',
        'White sauce, fresh mozzarella, shrimps, salmon, pineapples, black olives, basil'
    )
    const item8 = new MenuItem(
        'pizza8.png',
        'The Favorite',
        'Tomato sauce, fresh mozzarella, homemade sausage, bacon, peppers, chilli peppers, garlic'
    )

    function addCard(item) {
        const container = document.getElementById('content')
        const newCard = document.createElement('div')
        newCard.className = 'card'
        container.appendChild(newCard)

        const image = document.createElement('img');
        image.src = `assets/${item.image}`
        image.className = 'pizza-img'
        newCard.appendChild(image)

        const title = document.createElement('h3')
        title.innerHTML = item.title
        title.className = 'card-title'
        newCard.appendChild(title)

        const description = document.createElement('p')
        description.innerHTML = item.description
        description.className = 'card-description'
        newCard.appendChild(description)

        items.push(item)
    }

    addCard(item1);
    addCard(item2)
    addCard(item3)
    addCard(item4)
    addCard(item5)
    addCard(item6)
    addCard(item7)
    addCard(item8)

    return {title, item1, item2, item3, item4, item5, item6, item7, item8, addCard}
}

export default menu;