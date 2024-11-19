
/*class SplashScreen {
    #element = null;

    get element() { return this.#element }

    constructor() {
        this.#element = document.createElement('div');
        this.#element.classList.add ('splash-screen') ; // Add a class for styling
    }

    createLogo() {
        const logo = document.createElement('img');
        logo.classList.add('newsify-logo');
        logo.src = './images/newsify_logo.png';
        logo.alt = 'Logo';
       
        this.#element.append(logo);
        setTimeout(() => { logo.style.opacity = 1; logo.style.transition = 'opacity 1s ease-in-out'; }, 1000);
    }

    createHeading() {
        const heading = document.createElement('h1');
        heading.textContent = 'Newsify';
        heading.classList.add('newsify-heading');
        heading.style.opacity = 0; // Initially hidden
        this.#element.append(heading); 
        setTimeout(() => { heading.style.opacity = 1; heading.style.transition = 'opacity 1s ease-in-out'; }, 2000);// Animate the heading after 2 seconds

    }
}

module.exports = SplashScreen;*/



