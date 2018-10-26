const PubSub = require('../helpers/pub_sub.js');

const CountryView = function (container) {
  this.container = container;
};

CountryView.prototype.bindEvents = function () {
  PubSub.subscribe('Country:dataReady', (evt) => {
    const country = evt.detail;
    this.render(country);
  });
};

CountryView.prototype.render = function (data) {
  this.container.innerHTML = '';

  const countryElement = document.createElement('div');
  countryElement.id = "countryView";
  this.container.appendChild(countryElement);

  const nameElement = document.createElement('h2');
  nameElement.textContent = data.name;
  countryElement.appendChild(nameElement);

  const listElement = document.createElement('ul');
  listElement.id = "listElement";
  countryElement.appendChild(listElement);

  const continentElement = document.createElement('li');
  continentElement.textContent = `Continent: ${data.region}`;
  listElement.appendChild(continentElement);

  const subregionElement = document.createElement('li');
  subregionElement.textContent = `Subregion: ${data.subregion}`;
  listElement.appendChild(subregionElement);

  const populationElement = document.createElement('li');
  populationElement.textContent = `Population: ${data.population}`;
  listElement.appendChild(populationElement);

  const capitalElement = document.createElement('li');
  capitalElement.textContent = `Capital City: ${data.capital}`;
  listElement.appendChild(capitalElement);
};


module.exports = CountryView;
