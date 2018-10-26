const SearchView = require('./views/search_view.js');
const Search = require('./models/search_function.js');

document.addEventListener('DOMContentLoaded', () => {

  const search = new Search();
  search.bindEvents();

  const searchView = new SearchView();
  searchView.bindEvents();

});
