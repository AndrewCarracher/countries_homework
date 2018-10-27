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
  this.container.appendChild(continentNameElement);


  const continentElement = document.createElement('div');
  continentElement.id = "continentView";
  this.container.appendChild(continentElement);

  for(i=0; i < data.length; i++){
    // create wrapper, set bg to flag and display name
    const country = document.createElement('div');
    console.dir(country);
    country.class = "country";
    country.className = "country";
    country.style.backgroundImage = `url( ${data[i].flag})`;
    continentElement.appendChild(country);
    country.id = data[i].name;

    const countryName = document.createElement('div');
    countryName.textContent = data[i].name;
    countryName.className = "continentCountryName";
    country.appendChild(countryName);

    const fullCountryData = data[i];

    country.addEventListener("click", function(event) {
      PubSub.publish('CountryFromContinent:dataReady', fullCountryData);
    })
  }
};


module.exports = ContinentView;
