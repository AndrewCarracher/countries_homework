const PubSub = require('../helpers/pub_sub.js');

const ContinentView = function (container) {
  this.container = container;
};

ContinentView.prototype.bindEvents = function () {
  PubSub.subscribe('Continent:dataReady', (evt) => {
    const continent = evt.detail;
    // console.log(continent);
    this.render(continent);
  });
};

ContinentView.prototype.render = function (data) {
  this.container.innerHTML = '';

  const continentNameElement = document.createElement('h1');
  continentNameElement.id = "continentName";
  continentNameElement.textContent = data[0].region;
  console.log(data);
  this.container.appendChild(continentNameElement);


  const continentElement = document.createElement('div');
  continentElement.id = "continentView";
  this.container.appendChild(continentElement);

  for(i=0; i < data.length; i++){
    // create wrapper, set bg to flag and display name
    const country = document.createElement('div');
    country.class = "country";
    country.textContent = data[i].name;
    country.style.backgroundImage = data[i].flag;
    continentElement.appendChild(country);
  }
};


module.exports = ContinentView;
