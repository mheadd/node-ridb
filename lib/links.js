var request = require('request');
var querystring = require('querystring');
var client = require('./api-client');

var URL_BASE = 'https://ridb.recreation.gov/api/v1/links';

// retrieves all links. 
exports.getAll = function(params, callback) {
    url = URL_BASE + '/?' + querystring.stringify(params);
	client.makeApiCall(url, params, callback);
};

// retrieves a specific link item.
exports.getSpecific = function(entityLinkID, callback) {
    url = URL_BASE + '/' + entityLinkID;
	client.makeApiCall(url, null, callback);
};