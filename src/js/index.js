//const SplashScreen = require('./components/splash-screen');
//const fetchMostPopularByViews = require('./home.js');
require('../sass/styles.scss') ;
import {fetchMostPopularByViews } from './components/fetch-most-popular-by-views.js' ;
document.addEventListener('DOMContentLoaded', async() => {
    const app = document.getElementById('app');

    class SplashScreen {
        #element = null;

        get element() { return this.#element }

        constructor() {
            this.#element = document.createElement('div');
            this.#element.classList.add('splash-screen'); // Add a class for styling
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
            setTimeout(() => { heading.style.opacity = 1; heading.style.transition = 'opacity 1s ease-in-out'; }, 2000); // Animate the heading after 2 seconds
        }
    }

    // Create and display the splash screen
    const splashScreen = new SplashScreen();
    splashScreen.createLogo();
    splashScreen.createHeading();
    app.appendChild(splashScreen.element);

    // Function to show onboarding screen after splash screen
    const showOnboarding = () => {
        app.innerHTML = `
        <div id="onboarding" class="onboarding">
          <div id="wrapper">
            <section class="onborard">
              <div class="onboard_img">
                <img src="images/onboarding1.jpg" alt="onborard">
              </div>
              <div class="onboard1">
                <h1 class="onboard_heading">Stay Connected,<br>Everywhere, Anytime</h1>
                <p class="onboard_writing">Welcome to Newsify, your ultimate destination for breaking news, exclusive stories, and tailored content.</p>
              </div>
              <div class="swap">
                <span class="first_dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
              </div>
              <div class="onboard_button">
                <button class="skip_button">Skip</button>
                <button class="continue_button">Continue</button>
              </div>
            </section>
          </div>
        </div>
      `;
        initializeOnboarding();
    };

    // Simulate a delay to show the splash screen for a few seconds
    setTimeout(showOnboarding, 4000);

    function initializeOnboarding() {
        const slides = [
            {
                image: 'images/onboarding1.jpg',
                heading: 'Stay Connected,<br>Everywhere, Anytime',
                text: 'Welcome to Newsify, your ultimate destination for breaking news, exclusive stories, and tailored content.'
            },
            {
                image: 'images/onboarding2.jpg',
                heading: 'Discover the World,<br>One Story at a Time',
                text: 'Explore a wide range of topics and stories from around the globe, tailored just for you.'
            },
            {
                image: 'images/onboarding3.jpg',
                heading: 'Stay Informed,<br>Stay Ahead',
                text: 'Get timely updates and notifications on the topics that matter most to you.'
            }
        ];

        let currentIndex = 0;

        const onboardImage = document.querySelector('.onboard_img img');
        const onboardHeading = document.querySelector('.onboard_heading');
        const onboardWriting = document.querySelector('.onboard_writing');
        const continueButton = document.querySelector('.continue_button');
        const skipButton = document.querySelector('.skip_button');
        const dots = document.querySelectorAll('.dot, .first_dot');

        continueButton.addEventListener('click', () => {
            if (currentIndex === slides.length - 1) {
                window.location.href = 'auth.html'; // Redirect to authentication page
            } else {
                currentIndex = (currentIndex + 1) % slides.length;
                updateSlide(currentIndex);
            }
        });

        skipButton.addEventListener('click', () => {
           window.location.href = 'auth.html';
            
        });

        function updateSlide(index) {
            onboardImage.src = slides[index].image;
            onboardHeading.innerHTML = slides[index].heading;
            onboardWriting.textContent = slides[index].text;
            updateDots(index);
        }

        function updateDots(index) {
            dots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === index);
            });
        }

        // Initialize with the first slide
        updateSlide(currentIndex);
    }


});
const page = window.location.pathname;

if (page === '/home.html') {

    const popularNews = await fetchMostPopolarByViews(7);
    console.log(popularNews);
    

}

/*if (page === '/index.html') {
    const products = await getProducts();
    console.log(products);
    
    //const productList =document.createElement('div');
    //productList.classList.add('sale-items__product-container');
    const saleItemsContainer = document.querySelector('.sale-items');
    const productList = document.createElement('div');//creat korte hobe document dia ... kintu eta kothae kisher vitor creat hobe sheta tik korte hobe append onujai
    productList.classList.add('sale-items__product-list');

    saleItemsContainer.append(productList);

    products.forEach(product => {
        const newProductCard = createProductCard(product);
        newProductCard.classList.add('product');
        productList.append(newProductCard);
    });

} else if (page == '/cart.html') {
    const shoppingCartTable = document.querySelector('.shopping-cart__table');
    const cartItems = getItems();
    const cartItemsKeysAsArray = Object.keys(cartItems);

    // Create a total price row element here, so it doesn't get appended in each iteration
    const totalPriceRow = document.createElement('tr');
    totalPriceRow.classList.add('shopping-cart__total-price-row');
    const totalPriceLabel = document.createElement('td');
    const totalPriceValue = document.createElement('td');

    // Calculate total price once outside the loop
    const totalPrice = calculateTotal();
    console.log('totalprice', totalPrice);
    totalPriceLabel.innerText = 'Total Price';
    totalPriceValue.colSpan = 3; // Span across the rest of the columns
    totalPriceValue.innerText = totalPrice;

    // Append the label and value cells to the total price row
    totalPriceRow.appendChild(totalPriceLabel);
    totalPriceRow.appendChild(totalPriceValue);

    cartItemsKeysAsArray.forEach(key => {
        const tableRow = document.createElement('tr');
        tableRow.classList.add('shopping-cart__item-row');

        const amountTableData = document.createElement('td');
        const nameTableData = document.createElement('td');
        const priceTableData = document.createElement('td');
        const removeTableData = document.createElement('td');

        const buttonRemove = document.createElement('button');
        buttonRemove.innerText = 'Remove';
        buttonRemove.addEventListener('click', () => {
            deleteItems(key);
            shoppingCartTable.removeChild(tableRow); // Remove row from table
            updateTotalPrice();
        });

        amountTableData.innerText = cartItems[key].amount;
        nameTableData.innerText = cartItems[key].name;
        priceTableData.innerText = cartItems[key].price;
        removeTableData.appendChild(buttonRemove); // Append the button to the cell

        tableRow.append(amountTableData, nameTableData, priceTableData, removeTableData);
        shoppingCartTable.appendChild(tableRow); // Append each item row to the table
    });

    // Append the total price row after all item rows
    shoppingCartTable.appendChild(totalPriceRow);

    function updateTotalPrice() {
        const newTotalPrice = calculateTotal();
        totalPriceValue.innerText = newTotalPrice; // Update total price value
    }
}




    */

