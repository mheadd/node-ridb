var request = require('request');
var querystring = require('querystring');
var client = require('./api-client');

var URL_BASE = 'https://ridb.recreation.gov/api/v1/';

// Retrieves all recreation areas. 
exports.getAll = function(params, callback) {
    url = URL_BASE + 'recareas/?' + querystring.stringify(params);
	client.makeApiCall(url, params, callback);
};

// Retrieves a specific recreation area.
exports.getSpecific = function(recAreaID, callback) {
    url = URL_BASE + 'recareas/' + recAreaID;
	client.makeApiCall(url, null, callback);
};

// Retrieves all facilities within a specific recreation area.
exports.getFacilities = function(params, callback) {
    url = URL_BASE + 'recareas/facilities/?' + querystring.stringify(params);
	client.makeApiCall(url, params, callback);
};

// Retrieves all recreation area addresses.
exports.getAddresses = function(params, callback) {
    url = URL_BASE + 'recareaaddresses/?' + querystring.stringify(params);
	client.makeApiCall(url, params, callback);
};

// Retrieves all media for a specific recreation area.
exports.getMedia = function(recAreaID, params, callback) {
    url = URL_BASE + 'recareas/' + recAreaID + '/media/?' + querystring.stringify(params);
	client.makeApiCall(url, null, callback);
};

// Retrieves links for a specific recreation area.
exports.getLinks = function(recAreaID, params, callback) {
    url = URL_BASE + 'recareas/' + recAreaID + '/links/?' + querystring.stringify(params);
	client.makeApiCall(url, null, callback);
};

// Retrieves events for a specific recreation area.
exports.getEvents = function(recAreaID, params, callback) {
    url = URL_BASE + 'recareas/' + recAreaID + '/events/?' + querystring.stringify(params);
	client.makeApiCall(url, null, callback);
};

// Retrieves events for a specific recreation area.
exports.getActivities = function(recAreaID, params, callback) {
    url = URL_BASE + 'recareas/' + recAreaID + '/activities/?' + querystring.stringify(params);
	client.makeApiCall(url, null, callback);
};