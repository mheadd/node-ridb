var ridb = require('./index');

// Initialize ridb client and get all facilities within 100 miles of Syracuse, NY that allow camping.
ridb.init('your-api-key');
ridb.facilities.getAll({latitude: 43.0469, longitude: -76.1444, radius: 100, activity: '9,109', limit: 1}, function(error, response){
        console.log(JSON.stringify(response));
});