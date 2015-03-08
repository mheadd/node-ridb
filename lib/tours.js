var request = require('request');
var querystring = require('querystring');
var client = require('./api-client');

var URL_BASE = 'https://ridb.recreation.gov/api/v1/';

// retrieves all tours.
exports.getAll = function(params, callback) {
    url = URL_BASE + 'tours/?' + querystring.stringify(params);
	client.makeApiCall(url, params, callback);
};

// retrieves a specific tour.
exports.getSpecific = function(tourID, callback) {
    url = URL_BASE + 'tours/' + tourID;
	client.makeApiCall(url, null, callback);
};

// retrieves all tours for a specific facility.
exports.getAllForFacility = function(tourID, params, callback) {
    url = URL_BASE + 'facilities/' + tourID + '/tours' + querystring.stringify(params);
	client.makeApiCall(url, params, callback);
};

//
exports.getToursForFacility = function(facilityID, tourID, callback) {
    url = URL_BASE + 'facilities/' + facilityID + '/tours/' + tourID;
	client.makeApiCall(url, null, callback);
};

// retrieves all attributes for a specific tour.
exports.getAttributes = function(tourID, params, callback) {
    url = URL_BASE + 'tours/' + tourID + '/attributes' + querystring.stringify(params);
	client.makeApiCall(url, null, callback);
};