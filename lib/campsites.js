var request = require('request');
var querystring = require('querystring');
var client = require('./api-client');

var URL_BASE = 'https://ridb.recreation.gov/api/v1/';

// retrieves all campsites.
exports.getAll = function(params, callback) {
    url = URL_BASE + 'campsites/?' + querystring.stringify(params);
	client.makeApiCall(url, params, callback);
};

// retrieves a specific campsite.
exports.getSpecific = function(campsiteID, callback) {
    url = URL_BASE + 'campsites/' + campsiteID;
	client.makeApiCall(url, null, callback);
};

// retrieves all campsites for a specific facility.
exports.getAllForFacility = function(facilityID, params, callback) {
    url = URL_BASE + 'facilities/' + facilityID + '/campsites?' + querystring.stringify(params);
	client.makeApiCall(url, params, callback);
};

// retrieves a specific campsite for a specific facility.
exports.getSpecific = function(facilityID, campsiteID, callback) {
    url = URL_BASE + 'facilities/' + facilityID + '/campsites/' + campsiteID;
	client.makeApiCall(url, null, callback);
};

// retrieves all permitted equipment for a campsite.
exports.getEquipment = function(campsiteID, params, callback) {
    url = URL_BASE + 'campsites/' + campsiteID + '/permittedequipment?' + querystring.stringify(params);
	client.makeApiCall(url, null, callback);
};

// retrieves a specific permitted equipment for a specific campsite.
exports.getSpecificEquipment = function(campsiteID, permittedequipmentID, callback) {
    url = URL_BASE + 'campsites/' + campsiteID + '/permittedequipment/' + permittedequipmentID;
	client.makeApiCall(url, null, callback);
};

// retrieves all attributes for a specific campsite.
exports.getAttributes = function(campsiteID, params, callback) {
    url = URL_BASE + 'campsites/' + campsiteID + '/attributes?' + querystring.stringify(params);
	client.makeApiCall(url, null, callback);
};
