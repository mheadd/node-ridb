# Wrapper for the Recreation Information Database (RIDB) API.

Documentation for the RIDB API can be found [here](http://usda.github.io/RIDB/).

## Installation

<code>npm install ridb</code>

## Usage

Acquire an API key [here](https://ridb.recreation.gov/?action=register).

```javascript
var ridb = require('ridb');

// Set up API client with your API key.
ridb.setup('your-api-key');

// Get a list of activities in New York State.
ridb.activities.getAll({ limit: 2, state: 'NY' }, function(error, response) {
	console.log(response);
});
```

