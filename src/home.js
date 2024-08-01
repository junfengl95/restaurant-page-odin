import './styles/home.css'

function loadHome(){
    const content = document.createElement('div');

    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Woodlands B&B';
    content.appendChild(headline);

    const description = document.createElement('p')
    description.textContent = `
    Woodlands B&B has all the best in-forest entertainment
    This is Mushroom Theme Restaurant.
    There are trees, flowers, mushrooms to help immerse yourself in the unique environment
    `;
    
    content.appendChild(description);

    return content;
}

export default loadHome;