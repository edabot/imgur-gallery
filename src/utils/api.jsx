var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = "07491d10ee36d13";

module.exports = window.api = {
  get: function (url) {
    return fetch(rootUrl + url, {
      headers: {
        'Authorization': 'Client-ID ' +  apiKey
      }
    })
    .then(function(response) {
      console.log(response)
    })
  }
};
