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

    let count = data.length;

    for(i=0; i< data.length; i++){
      if(data[i].name.toLowerCase() === searchName){
        PubSub.publish('Country:dataReady', data[i]);
      }
      else{
        count -- ;
      }
    }

    if(count === 0){
      const countrySearch = "Unfortunatly we cannot find this Country. Please try again or search by Continent";
      PubSub.publish('NotFoundCountry:dataReady', countrySearch);
    }

  });
};

Search.prototype.continentSearch = function (continentName) {
  PubSub.subscribe('Data:dataReady', (evt) => {
    const data = evt.detail;
    const searchName = this.inputFormat(continentName);

    let count = data.length;

    let continent = [];

    for(i=0; i< data.length; i++){
      if(data[i].region.toLowerCase() === searchName){
        // console.log(data[i]);
        continent.push(data[i]);
      }
      else{
        count -- ;
      }
    }

    if(count === 0){
      const continentSearch = "Unfortunatly we cannot find this Continent. Please try again";
      PubSub.publish('NotFoundContinent:dataReady', continentSearch);
    }


    if( continent.length > 0){
      PubSub.publish('Continent:dataReady', continent);
    }
  });
};

Search.prototype.inputFormat = function (input) {
  return input.toLowerCase();
};







module.exports = Search;
