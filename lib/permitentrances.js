var request = require('request');
var querystring = require('querystring');
var client = require('./api-client');

var URL_BASE = 'https://ridb.recreation.gov/api/v1/';

// retrieves all permit entrances.
exports.getAll = function(params, callback) {
    url = URL_BASE + 'permitentrances/?' + querystring.stringify(params);
	client.makeApiCall(url, params, callback);
};

// retrieves a specific permit entrance.
exports.getSpecific = function(permitEntranceID, callback) {
    url = URL_BASE + 'permitentrances/' + permitEntranceID;
	client.makeApiCall(url, null, callback);
};

// retrieves all permit entrances for a specific facility.
exports.getAllForFacility = function(facilityID, params, callback) {
    url = URL_BASE + 'facilities/' + facilityID + '/permitentrances' + querystring.stringify(params);
	client.makeApiCall(url, params, callback);
};

// retrieves a specific permit entrance for a specific facility.
exports.getEntranceForFacility = function(facilityID, permitEntranceID, callback) {
    url = URL_BASE + 'facilities/' + facilityID + '/permitentrances/' + permitEntranceID;
	client.makeApiCall(url, null, callback);
};

// retrieves all zones for a specific permit entrance.
exports.getZones = function(permitEntranceID, callback) {
    url = URL_BASE + 'permitentrances/' + permitEntranceID + '/zones';
	client.makeApiCall(url, null, callback);
};

// retrieves a specific zone for a specific permit entrance.
exports.getZonesForSpecificEntrance = function(permitEntranceID, zoneID, callback) {
	url = URL_BASE + 'permitentrances/' + permitEntranceID + '/zones/' + zoneID;
	client.makeApiCall(url, null, callback);
};

// retrieves all attributes for a specific campsite.
exports.getAttributes = function(permitEntranceID, params, callback) {
    url = URL_BASE + 'permitentrances/' + permitEntranceID + '/attributes' + querystring.stringify(params);
	client.makeApiCall(url, null, callback);
};
