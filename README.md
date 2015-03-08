# Wrapper for the Recreation Information Database (RIDB) API.

Documentation for the RIDB API can be found [here](http://usda.github.io/RIDB/).

## Installation

<code>npm install ridb</code>

## Usage

Obtain an API key [here](https://ridb.recreation.gov/?action=register).

Get a list of organizations with the word 'Department' in the title.

```javascript
var ridb = require('ridb');

ridb.init('your-api-key');
ridb.organizations.getAll({query: 'Department', limit: 2}, function(error, response) {
	console.log(JSON.stringify(response));
});
```
```json
{
  "METADATA": {
    "RESULTS": {
      "CURRENT_COUNT": 2,
      "TOTAL_COUNT": 6
    },
    "SEARCH_PARAMETERS": {
      "LIMIT": 2,
      "OFFSET": 0,
      "QUERY": "Department"
    }
  },
  "RECDATA": [
    {
      "OrgName": "Department of Agriculture",
      "OrgID": 163,
      "OrgAbbrevName": "USDA",
      "OrgJurisdictionType": "Federal",
      "OrgType": "",
      "LastUpdatedDate": "2007-02-26",
      "OrgURLText": "US Department of Agriculture",
      "OrgURLAddress": "http://www.usda.gov",
      "OrgImageURL": "",
      "OrgParentID": 157
    },
    {
      "OrgName": "Department of Commerce",
      "OrgID": 161,
      "OrgAbbrevName": "DOC",
      "OrgJurisdictionType": "Federal",
      "OrgType": "",
      "LastUpdatedDate": "2007-02-26",
      "OrgURLText": "",
      "OrgURLAddress": "",
      "OrgImageURL": "",
      "OrgParentID": 157
    }
  ]
}

```

Get details for a campsites for a specific facility with 'Sunny' in the title and that are accessible.

```javascript
var ridb = require('ridb');

ridb.init('your-api-key');
var options = {loop: 'SUNNY', CampsiteAccessible: true, limit: 1};
ridb.campsites.getAllForFacility(234150, options, function(error, response) {
	console.log(JSON.stringify(response));
});
```

```json
{
  "METADATA": {
    "RESULTS": {
      "CURRENT_COUNT": 1,
      "TOTAL_COUNT": 46
    },
    "SEARCH_PARAMETERS": {
      "FACILITYID": 234150,
      "LIMIT": 1,
      "OFFSET": 0,
      "QUERY": ""
    }
  },
  "RECDATA": [
    {
      "FacilityID": 234150,
      "CampsiteAccessible": true,
      "Loop": "SUNNY GULCH CAMPGROUND ",
      "ENTITYMEDIA": [],
      "LastUpdatedDate": "2015-02-19",
      "TypeOfUse": "Overnight",
      "ATTRIBUTES": [
        {
          "AttributeName": "Capacity/Size Rating",
          "AttributeID": 50602355,
          "AttributeValue": "Single"
        },
        {
          "AttributeName": "Checkin Time",
          "AttributeID": 50602356,
          "AttributeValue": "2:00 PM"
        },
        {
          "AttributeName": "Checkout Time",
          "AttributeID": 50602357,
          "AttributeValue": "12:00 PM"
        },
        {
          "AttributeName": "Driveway Entry",
          "AttributeID": 50602358,
          "AttributeValue": "Back-In"
        },
        {
          "AttributeName": "Driveway Surface",
          "AttributeID": 50602359,
          "AttributeValue": "Paved"
        },
        {
          "AttributeName": "Fire Pit",
          "AttributeID": 50602360,
          "AttributeValue": "Y"
        },
        {
          "AttributeName": "Max Num of People",
          "AttributeID": 50602361,
          "AttributeValue": 8
        },
        {
          "AttributeName": "Max Num of Vehicles",
          "AttributeID": 50602362,
          "AttributeValue": 2
        },
        {
          "AttributeName": "Min Num of People",
          "AttributeID": 50602363,
          "AttributeValue": 1
        },
        {
          "AttributeName": "Picnic Table",
          "AttributeID": 50602364,
          "AttributeValue": "Y"
        },
        {
          "AttributeName": "Shade",
          "AttributeID": 50602365,
          "AttributeValue": "Partial"
        },
        {
          "AttributeName": "Site Reserve Type",
          "AttributeID": 50602366,
          "AttributeValue": "Site-Specific"
        },
        {
          "AttributeName": "Tent Pad",
          "AttributeID": 50602367,
          "AttributeValue": "Y"
        },
        {
          "AttributeName": "Campfire Allowed",
          "AttributeID": 50602368,
          "AttributeValue": "Y"
        }
      ],
      "CreatedDate": "2014-05-02",
      "PERMITTEDEQUIPMENT": [
        {
          "EquipmentName": "Fifth Wheel",
          "MaxLength": 35
        },
        {
          "EquipmentName": "Pickup Camper",
          "MaxLength": 35
        },
        {
          "EquipmentName": "Pop up",
          "MaxLength": 35
        },
        {
          "EquipmentName": "RV/Motorhome",
          "MaxLength": 35
        },
        {
          "EquipmentName": "Tent",
          "MaxLength": 0
        },
        {
          "EquipmentName": "Trailer",
          "MaxLength": 35
        },
        {
          "EquipmentName": "Caravan/Camper Van",
          "MaxLength": 35
        }
      ],
      "CampsiteType": "STANDARD NONELECTRIC",
      "CampsiteID": 22479,
      "CampsiteName": 2
    }
  ]
}
```