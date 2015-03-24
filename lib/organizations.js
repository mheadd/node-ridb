var request = require('request');
var querystring = require('querystring');
var client = require('./api-client');

var URL_BASE = 'https://ridb.recreation.gov/api/v1/organizations';
var url;

// Get organization details.
exports.details = function(orgID, params, callback) {
	if(orgID) {
		var url = URL_BASE + '/' + orgID;
	}
	else {
		var url = URL_BASE + '/?' + querystring.stringify(params);
	}
	client.makeApiCall(url, callback);
};

// Get recreation area details for an organization.
exports.recAreas = function(orgID, recID, params, callback) {
	if(recID) {
		url = URL_BASE + '/' + orgID + '/recareas/' + recID;
	}
	else {
		url = URL_BASE + '/' + orgID + '/recareas?' + querystring.stringify(params);
	}
	client.makeApiCall(url, callback);
};

// Get facilities details.
exports.facilities = function(orgID, facID, params, callback) {
	if(facID) {
		url = URL_BASE + '/' + orgID + '/facilities/' + facID;
	}
	else {
		url = URL_BASE + '/' + orgID + '/facilities?' + querystring.stringify(params);
	}
	client.makeApiCall(url, callback);
};