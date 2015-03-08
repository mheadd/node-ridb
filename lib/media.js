var request = require('request');
var querystring = require('querystring');
var client = require('./api-client');

var URL_BASE = 'https://ridb.recreation.gov/api/v1/media';

// retrieves all media. 
exports.getAll = function(params, callback) {
    url = URL_BASE + '?' + querystring.stringify(params);
	client.makeApiCall(url, params, callback);
};

// retrieves a specific media item.
exports.getSpecific = function(entityMediaID, callback) {
    url = URL_BASE + '/' + entityMediaID;
	client.makeApiCall(url, null, callback);
};