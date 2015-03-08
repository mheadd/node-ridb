var request = require('request');
var querystring = require('querystring');

var options = {};
var API_KEY;

// Set up API key.
exports.init = function(key) {
	API_KEY = key;
};

// Private method to make API call.
exports.makeApiCall = function(url, params, callback) {
	options.url = url;
	options.headers = { 'apikey' : API_KEY };
	request(options, function (error, response, body){
		if (error) {
            callback(error, null);
        }
        else if (response.statusCode == 200) {
            callback(null, JSON.parse(body));
        }
        else {
            callback('HTTP Response Code: ' + response.statusCode, null);
        }
	});
};