const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Search = function () {
  this.data = null;
};

Search.prototype.bindEvents = function () {
  PubSub.subscribe('Country:countrySearch', (evt) => {
    const searchType = evt.detail;
    this.getData();
    this.countrySearch(searchType);
  });
  PubSub.subscribe('Continent:continentSearch', (evt) => {
    const searchType = evt.detail;
    this.getData();
    this.continentSearch(searchType);
  });
};


Search.prototype.getData = function () {
const url = `https://restcountries.eu/rest/v2/all`;
  const request = new Request(url);
  request.get()
    .then((data) => {
      PubSub.publish('Data:dataReady', data);
    })
    .catch((err) => {
      PubSub.publish('Activity:error', err);
    })
};


Search.prototype.countrySearch = function (countryName) {
  PubSub.subscribe('Data:dataReady', (evt) => {
    const data = evt.detail;
    const searchName = this.inputFormat(countryName);

    let count = 0;

    for(i=0; i< data.length; i++){
      if(data[i].name.toLowerCase() === searchName){
        console.log(data[i]);
      }
      else{
        count ++ ;
      }
    }

    if(count > 0){
      console.log("country not found");
    }

  });
};

Search.prototype.continentSearch = function (continentName) {
  PubSub.subscribe('Data:dataReady', (evt) => {
    const data = evt.detail;
    const searchName = this.inputFormat(continentName);

    let count = 0;

    for(i=0; i< data.length; i++){
      if(data[i].region.toLowerCase() === searchName){
        console.log(data[i]);
      }
      else{
        count ++ ;
      }
    }

    if(count > 0){
      console.log("Continent not found");
    }



  });
};

Search.prototype.inputFormat = function (input) {
  return input.toLowerCase();
};







module.exports = Search;
