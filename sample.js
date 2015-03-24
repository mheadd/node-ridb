var ridb = require('./index');

// Initialize RIDB client.
var key = process.argv[2];
ridb.init(key);

// Get a list of facilities.
ridb.facilities.details(null, {limit: 3}, function(error, response) {
	if(!error) {
		console.log(JSON.stringify(response));
	}
});

// // Get the details of a specific facility.
ridb.facilities.details(234150, {}, function(error, response) {
	if(!error) {
		console.log(JSON.stringify(response));
	}
});

// // Get address details for a specific facility
ridb.facilities.addresses(234150, null, {}, function(error, response) {
	if(!error) {
		console.log(JSON.stringify(response));
	}
});

// Get a list of activities for a specific facility.
ridb.facilities.activities(234150, null, {}, function(error, response) {
	if(!error) {
		console.log(JSON.stringify(response));
	}
});