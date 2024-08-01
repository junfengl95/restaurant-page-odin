import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";

function clearContent(){
    const content = document.getElementById('content');
    while (content.firstChild){
        content.removeChild(content.firstChild);
    }
}

function init(){
    const homeButton = document.getElementById('home');
    const menuButton = document.getElementById('menu');
    const aboutButton = document.getElementById('about')

    homeButton.addEventListener('click', () => {
        clearContent();
        document.getElementById('content').appendChild(loadHome());
    });

    menuButton.addEventListener('click', () => {
        clearContent();
        document.getElementById('content').appendChild(loadMenu());
    });

    aboutButton.addEventListener('click', () => {
        clearContent();
        document.getElementById('content').appendChild(loadAbout());
    });

    // Load home page by default 
    document.getElementById('content').appendChild(loadHome());
}

init();