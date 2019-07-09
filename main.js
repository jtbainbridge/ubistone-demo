// Burger Menu
const menuBtn = document.querySelector('.toggle-me');
const burgerMenu = document.querySelector('.burger');

menuBtn.onclick = function () {
    burgerMenu.classList.toggle('visible');
}


// Theme selector
window.onload = themeSelect();

function themeSelect() {
  const lightBtn = document.getElementById('light');
  const darkBtn = document.getElementById('dark');
  const img = document.getElementById('screenshot');

  lightBtn.addEventListener('click', function () {
      lightBtn.classList.add('active');
      darkBtn.classList.remove('active');
      img.setAttribute('src', 'assets/screenshot-light.png');
  });

  darkBtn.addEventListener('click', function () {
      darkBtn.classList.add('active')
      lightBtn.classList.remove('active');
      img.setAttribute('src', 'assets/screenshot-dark.png');
  });
};


// Icon hover effect
window.onload = iconHover();

function iconHover() {
  const icons = document.getElementById('tech').getElementsByTagName('i');
  const iconName = document.getElementById('icon-name');
  const iconNames = ['HTML 5', 'CSS 3', 'JavaScript', 'React', 'Amazon Web Services', 'Git'];
  // Mouse over icon action
  for (let i = 0; i < icons.length; i++) {
      icons[i].addEventListener('mouseover', function () {
          iconName.innerHTML = iconNames[i];
      });
  };
  // Mouse not over icon action
  for (let i = 0; i < icons.length; i++) {
      icons[i].addEventListener('mouseleave', function () {
          iconName.innerHTML = 'Technlogies';
      });
  };
};


// PUNK API (API usage example)
window.onload = getBeers();

function getBeers() {
  const app = document.getElementById('root');
  const container = document.createElement('div');
  container.setAttribute('class', 'b-container');
  app.appendChild(container);
  const request = new XMLHttpRequest();
  request.open('GET', 'https://api.punkapi.com/v2/beers/random', true);
  request.onload = function () {
    // Access Punk API JSON data
    const data = JSON.parse(this.response);

    // Check status of request
    if (request.status >= 200 && request.status < 400) {
      data.forEach(beer => {
        // Create a div with a card class
        const card = document.createElement('div');
        card.setAttribute('class', 'b-card');

        // Create a h1 and set the text content to the beer name
        const h1 = document.createElement('h1');
        h1.textContent = beer.name;

        // Create a description subheading
        const h3 = document.createElement('h3');
        h3.textContent = `Description`;

        // Create a p and set the text content to the beer description
        const p = document.createElement('p');
        p.textContent = beer.description;

        // Create a ABV subheading
        const h3Abv = document.createElement('h3');
        h3Abv.textContent = `ABV`;

        // Create a p and get abv value
        const pAbv = document.createElement('p');
        pAbv.textContent = `${beer.abv} %`;
        
        // Create a img tag and include relevant beer image
        const imgSpan = document.createElement('span');
        const imgTag = document.createElement('img');
        if (beer.image_url === null) {
          console.log('no image to display');
        }
        else {
          imgTag.setAttribute('src', beer.image_url);
          imgTag.setAttribute('class', 'b-img');
          imgSpan.appendChild(imgTag);
        }
        // Append the cards to the container element
        container.appendChild(card);
        // Each card will contain:
        card.appendChild(h1);
        card.appendChild(h3);
        card.appendChild(p);
        card.appendChild(h3Abv);
        card.appendChild(pAbv);
        card.appendChild(imgSpan);
      });
    }
    else {
      console.log('Error fetching data. Check URL or server status.');
      const errorMessage = document.createElement('p');
      errorMessage.textContent = `Sorry, something has broken! Please try again later...`;
      app.appendChild(errorMessage);
    }
  };
  request.send();
}
