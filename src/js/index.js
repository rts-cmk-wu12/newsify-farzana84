const SplashScreen = require('./components/splash-screen');
require('../sass/styles.scss')

// Create the splash screen
const splashScreen = new SplashScreen();
splashScreen.createLogo();
splashScreen.createHeading();
// Add the splash screen to the body
document.body.appendChild(splashScreen.element);
