var request = require('request');
var querystring = require('querystring');
var client = require('./api-client');

var URL_BASE = 'https://ridb.recreation.gov/api/v1/';

// Retrieves all facilities.
exports.getAll = function(params, callback) {
    url = URL_BASE + 'facilities/?' + querystring.stringify(params);
	client.makeApiCall(url, params, callback);
};

//  Retrieves a specific facility.
exports.getSpecific = function(facilityID, callback) {
    url = URL_BASE + 'facilities/' + facilityID;
	client.makeApiCall(url, null, callback);
};

// Retrieves all facility addresses.
exports.getAddresses = function(params, callback) {
    url = URL_BASE + 'facilityaddresses/?' + querystring.stringify(params);
	client.makeApiCall(url, params, callback);
};

// Retrieves all media for a specific facility. 
exports.getMedia = function(facilityID, params, callback) {
    url = URL_BASE + 'facilities/' + facilityID + '/media/?' + querystring.stringify(params);
	client.makeApiCall(url, null, callback);
};

// Retrieves all links for a specific facility. 
exports.getLinks = function(facilityID, params, callback) {
    url = URL_BASE + 'facilities/' + facilityID + '/links/?' + querystring.stringify(params);
	client.makeApiCall(url, null, callback);
};

// Retrieves events for a specific facility.
exports.getEvents = function(facilityID, params, callback) {
    url = URL_BASE + 'facilities/' + facilityID + '/events/?' + querystring.stringify(params);
	client.makeApiCall(url, null, callback);
};

// Retrieves activities for a specific facility.
exports.getActivities = function(facilityID, params, callback) {
    url = URL_BASE + 'facilities/' + facilityID + '/activities/?' + querystring.stringify(params);
	client.makeApiCall(url, null, callback);
};