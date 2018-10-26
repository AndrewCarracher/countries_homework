const PubSub = require('../helpers/pub_sub.js');

const SearchView = function () {
};

SearchView.prototype.bindEvents = function () {



var country = document.getElementById("countrySearch");
country.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        PubSub.publish('Country:countrySearch', country.value);
    }
});

var continent = document.getElementById("continentSearch");
continent.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        PubSub.publish('Continent:continentSearch', continent.value);
    }
});

};

module.exports = SearchView;
