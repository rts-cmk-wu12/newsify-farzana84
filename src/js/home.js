require('../sass/styles.scss');
const fetchMostPopularByViews = require('./components/fetch-most-popular-by-views');

/*
fetchMostPopolarByViews(1).then(
    data => console.log(data)
    
);
*/
document.addEventListener('DOMContentLoaded', async () => {



    const settings = document.querySelector('.settings');
    settings.addEventListener('click', () => {
        window.location.href = 'settings.html';
         
     });

    const popularNews = await fetchMostPopularByViews(7);
    console.log(popularNews);


    const sections = document.querySelectorAll('.news-section');

    popularNews.results.forEach(article => {
        sections.forEach(section => {
            const sectionName = section.querySelector('.section-heading__text').textContent.toLowerCase();
            if (article.section.toLowerCase().includes(sectionName)) {
                const dropdownContent = section.querySelector('.dropdown-content');
                const articleElement = document.createElement('article');
                articleElement.classList.add('news-article');
                articleElement.innerHTML = `
                         <img class="news-image" src="${article.media[0]?.['media-metadata'][0].url}" alt="${article.title}">
                          <div class= "news-text">
                           <h3>${article.title}</h3>
                              <p>${article.abstract}</p>
                             </div>`;


                // newsText.appendChild(newsArticleHeading, newsArticleDescription);
                //articleElement.appendChild(newsImage, newsText);
                dropdownContent.appendChild(articleElement);

            }


        });
    });

    sections.forEach(section => {
        const arrow = section.querySelector('.arrow');


        arrow.addEventListener('click', () => {
            const content = section.querySelector('.dropdown-content');
            section.classList.toggle('open');


            console.log('Arrow clicked:', section);
        });
    });

});     


/*const newsText = document.createElement('div');
            const newsImage = document.createElement('img');

            const newsArticleHeading = document.createElement('h3');
            const newsArticleDescription = document.createElement('p');
            newsText.classList.add('news-text')
            newsImage.classList.add('news-img')
            newsArticleHeading.classList.add('news-article__heading')
            newsArticleDescription.classList.add('news-article__description')


            newsImage.src = 'article.media[0]?.["media-metadata"][0].url';
            newsArticleHeading.innerHTML = article.title;
            newsArticleDescription.innerHTML = article.abstract;
*/


