var request = require('request');
var querystring = require('querystring');
var client = require('./api-client');

var URL_BASE = 'https://ridb.recreation.gov/api/v1/organizations/';

// Retrieves all organizations. 
exports.getAll = function(params, callback) {
    url = URL_BASE + '/?' + querystring.stringify(params);
	client.makeApiCall(url, params, callback);
};

// Retrieves a specific organization.
exports.getSpecific = function(orgId, callback) {
    url = URL_BASE + '/' + orgId;
	client.makeApiCall(url, null, callback);
};

// Retrieves all recreation areas for an organization.
exports.getAllRecAreas = function(orgId, params, callback) {
    url = URL_BASE + '/' + orgId + '/recareas?' + querystring.stringify(params);
	client.makeApiCall(url, params, callback);
};

// Retrieves a specific rec area for an organization.
exports.getSpecificRecArea = function(orgId, recId, callback) {
    url = URL_BASE + '/' + orgId + '/recareas/' + recId;
	client.makeApiCall(url, null, callback);
};

// Retrieves all facilites for an organization.
exports.getAllFacilities = function(orgId, params, callback) {
    url = URL_BASE + '/' + orgId + '/facilities?' + querystring.stringify(params);
	client.makeApiCall(url, params, callback);
};

// Retireves a specific facilty for an organization.
exports.getSpecificFacility = function(orgId, facId, callback) {
    url = URL_BASE + '/' + orgId + '/facilities/' + facId;
	client.makeApiCall(url, null, callback);
};
