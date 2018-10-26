const Request = function (url) {
  this.url = url;
};

Request.prototype.get = function () {
  // can use return as fetch returns a promise object
  return fetch(this.url)
    //then do this to the result (no ; after fetch as chaining then, use end of statement)
    .then((response) => response.json());
      //.json() will parse json object. Has implicit return so will return response
};

module.exports = Request;
