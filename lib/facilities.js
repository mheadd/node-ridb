var request = require('request');
var querystring = require('querystring');
var client = require('./api-client');

var URL_BASE = 'https://ridb.recreation.gov/api/v1/';
var url;

// Retrieves facility details.
exports.details = function(facilityID, params, callback) {
	if(facilityID) {
		url = URL_BASE + 'facilities/' + facilityID;
	}
	else {
		 url = URL_BASE + 'facilities/?' + querystring.stringify(params);
	}
	client.makeApiCall(url, callback);
};

// Retrieves address information for a facility.
exports.addresses = function(facilityID, facilityAddressID, params, callback) {
	if(facilityID) {
		url = URL_BASE + '/facilities/' + facilityID + '/facilityaddresses/?' + querystring.stringify(params);
	}
	else if(facilityAddressID) {
		url = URL_BASE + 'facilityaddresses/' + facilityAddressID;
	}
	else {
		url = URL_BASE + 'facilityaddresses/?' + querystring.stringify(params);
	}
	client.makeApiCall(url, callback);
};

// Retrieves media for a facility facility. 
exports.media = function(facilityID, entityMediaID, params, callback) {
	if(entityMediaID) {
		url = URL_BASE + 'facilities/' + facilityID + '/media/' + entityMediaID;
	}
	else {
		url = URL_BASE + 'facilities/' + facilityID + '/media/?' + querystring.stringify(params);
	}
	client.makeApiCall(url, callback);
};

// Retrieves links for a facility. 
exports.links = function(facilityID, entityLinkID, params, callback) {
	if(entityLinkID) {
		url = URL_BASE + 'facilities/' + facilityID + '/links/' + entityLinkID;
	}
	else {
		url = URL_BASE + 'facilities/' + facilityID + '/links/?' + querystring.stringify(params);
	}
	client.makeApiCall(url, callback);
};

// Retrieves event information for a facility.
exports.events = function(facilityID, entityEventID, params, callback) {
	if(entityEventID) {
		url = URL_BASE + 'facilities/' + facilityID + '/events/' + entityEventID;
	}
	else {
		url = URL_BASE + 'facilities/' + facilityID + '/events/?' + querystring.stringify(params);
	}
	client.makeApiCall(url, callback);
};
// Retrieves activity information for a facility.
exports.activities = function(facilityID, activityID, params, callback) {
	if(activityID) {
		url = URL_BASE + 'facilities/' + facilityID + '/activities/' + activityID;
	}
	else {
		url = URL_BASE + 'facilities/' + facilityID + '/activities/?' + querystring.stringify(params);
	}
	client.makeApiCall(url, callback);
};