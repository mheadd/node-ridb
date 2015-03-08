var organizations = require('./lib/organizations');
var recareas = require('./lib/recareas');
var facilities = require('./lib/facilities');
var campsites = require('./lib/campsites');
var permitentrances = require('./lib/permitentrances');
var tours = require('./lib/tours');
var activities = require('./lib/activities');
var events = require('./lib/events');
var media = require('./lib/media');
var links = require('./lib/links');

var client = require('./lib/api-client');

module.exports = {
    init: function(key) {
        client.init(key);
    },
    organizations: organizations,
    recareas: recareas,
    facilities: facilities,
    campsites: campsites,
    permitentrances: permitentrances,
    tours: tours,
    activities: activities,
    events: events,
    media: media,
    links: links
};