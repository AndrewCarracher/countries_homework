const PubSub = require('../helpers/pub_sub.js');

const NotFoundView = function (container) {
  this.container = container;
};

NotFoundView.prototype.bindEvents = function () {
  PubSub.subscribe("NotFoundCountry:dataReady", (event) => {
    const notFound = event.detail;
    this.render(notFound);
  })
  PubSub.subscribe("NotFoundContinent:dataReady", (event) => {
    const notFound = event.detail;
    this.render(notFound);
  })
};

NotFoundView.prototype.render = function (data) {
  // console.log(message);
  this.container.innerHTML = '';

  const notFoundElement = document.createElement('div');
  notFoundElement.id = "notFoundView";
  this.container.appendChild(notFoundElement);

  const nameElement = document.createElement('h2');
  nameElement.textContent = data;
  notFoundElement.appendChild(nameElement);
};

module.exports = NotFoundView;
