import './styles/about.css'

function loadAbout(){
    const content = document.createElement('div');

    const headline = document.createElement('h1');
    headline.textContent = "Contact Us";
    content.appendChild(headline);

    const phone = document.createElement('p');
    phone.textContent = 'Phone: (123) 456-3332';
    content.appendChild(phone);

    const address = document.createElement('p');
    address.textContent = 'Address: 123 Wood Bv, Sleepy Hollow'
    content.appendChild(address);

    const email = document.createElement('p');
    email.textContent = 'Email: woodbb@sleepyhollow.com';
    content.appendChild(email);

    return content;
}

export default loadAbout;