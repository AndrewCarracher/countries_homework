const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Search = function () {
  this.data = null;
};

Search.prototype.bindEvents = function () {
  PubSub.subscribe('Country:countrySearch', (evt) => {
    const searchType = evt.detail;
    console.log(searchType);
  });
  PubSub.subscribe('Continent:continentSearch', (evt) => {
    const searchType = evt.detail;
    console.log(searchType);
  });
};

module.exports = Search;
