require('../sass/styles.scss');
document.addEventListener('DOMContentLoaded', () => {
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
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlide(currentIndex);
    });
  
    skipButton.addEventListener('click', () => {
      alert('Skipped');
      // Add logic to handle skip action, e.g., navigate to another page
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
  });
  