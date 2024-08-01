function loadMenu(){
    const content = document.createElement('div');

    const headline = document.createElement('h1');
    headline.textContent = 'Menu';
    content.appendChild(headline);

    const menuItems = document.createElement('ul');

    const item1 = document.createElement('li');
    item1.textContent = 'Mushrooom Burger - $20';
    menuItems.appendChild(item1);

    const item2 = document.createElement('li');
    item2.textContent = 'Enoki Blooms - $13';
    menuItems.appendChild(item2);

    const item3 = document.createElement('li');
    item3.textContent = 'Shimeji Salid';
    menuItems.appendChild(item3);

    content.appendChild(menuItems)

    return content;
}

export default loadMenu;