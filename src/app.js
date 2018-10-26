const SearchView = require('./views/search_view.js');
const Search = require('./models/search_function.js');
const CountryView = require('./views/country_view.js');
const ContinentView = require('./views/continent_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const search = new Search();
  search.bindEvents();

  const searchView = new SearchView();
  searchView.bindEvents();

  const resultView = document.querySelector('#display');

  const countryView = new CountryView(resultView);
  countryView.bindEvents();

  const continentView = new ContinentView(resultView);
  continentView.bindEvents();

});
