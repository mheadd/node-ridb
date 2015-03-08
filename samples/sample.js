var ridb = require('../index');

// Set up API client with your API key.
ridb.setup('your-api-key');

// Get a list of activities in New York State.
ridb.activities.getAll({ limit: 2, state: 'NY' }, function(error, response) {
	console.log(response);
});