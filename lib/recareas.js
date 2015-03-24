var request = require('request');
var querystring = require('querystring');
var client = require('./api-client');

var URL_BASE = 'https://ridb.recreation.gov/api/v1/';
var url;

// Get recreation area details.
exports.details = function(recAreaID, params, callback) {
	if(recAreaID) {
		url = URL_BASE + 'recareas/' + recAreaID;
	}
	else {
		 url = URL_BASE + 'recareas/?' + querystring.stringify(params);
	}
	client.makeApiCall(url, callback);
};

// Retrieves facilities details for a recreation area.
exports.facilities = function(recAreaID, facilityID, params, callback) {
	if(facilityID) {
		url = URL_BASE + 'recareas/' + recAreaID + '/facilities/' + facilityid;
	}
	else {
		url = URL_BASE + 'recareas/' + recAreaID + '/facilities/?' + querystring.stringify(params);
	}
	client.makeApiCall(url, callback);
};

// Retrieves address information for recreation areas.
exports.addresses = function(recAreaID, recAreaAddressID, params, callback) {
	if(recAreaID) {
		url = URL_BASE + '/recareas/' + recAreaID + '/recareaaddresses/?' + querystring.stringify(params);
	}
	else if(recAreaAddressID) {
		url = URL_BASE + 'recareaaddresses/' + recAreaAddressID;
	}
	else {
		url = URL_BASE + 'recareaaddresses/?' + querystring.stringify(params);
	}
	client.makeApiCall(url, callback);
};

// Retrieves media for recreation areas
exports.media = function(recAreaID, entityMediaID, params, callback) {
	if(entityMediaID) {
		url = URL_BASE + 'recareas/' + recAreaID + '/media/' + entityMediaID;
	}
	else {
		url = URL_BASE + 'recareas/' + recAreaID + '/media/?' + querystring.stringify(params);
	}
	client.makeApiCall(url, callback);
};

// Retrieves links for a specific recreation area.
exports.links = function(recAreaID, entityLinkID, params, callback) {
	if(entityLinkID) {
		url = URL_BASE + 'recareas/' + recAreaID + '/links/' + entityLinkID;
	}
	else {
		url = URL_BASE + 'recareas/' + recAreaID + '/links/?' + querystring.stringify(params);
	}
	client.makeApiCall(url, callback);
};

// Retrieves events for recreation areas.
exports.events = function(recAreaID, entityEventID, params, callback) {
	if(entityEventID) {
		url = URL_BASE + 'recareas/' + recAreaID + '/events/' + entityEventID;
	}
	else {
		url = URL_BASE + 'recareas/' + recAreaID + '/events/?' + querystring.stringify(params);
	}
	client.makeApiCall(url, callback);
};

// Retrieves activities for recreation areas.
exports.activities = function(recAreaID, activityID, params, callback) {
	if(activityID) {
		url = URL_BASE + 'recareas/' + recAreaID + '/activities/' + activityID;
	}
	else {
		url = URL_BASE + 'recareas/' + recAreaID + '/activities/?' + querystring.stringify(params);
	}
	client.makeApiCall(url, callback);
};