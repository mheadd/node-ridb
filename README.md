# RIDB

Wrapper for the Department of Agriculture's Recreation Information Database (RIDB) API. Documentation for the RIDB API can be found [here](http://usda.github.io/RIDB/).

## Installation

<code>npm install ridb</code>

## Usage

Obtain an API key [here](https://ridb.recreation.gov/?action=register). When you have a key, initialize an ridb client like this:

<code>ridb.init('your-api-key');</code>

## Examples

Note - additional examples can be found on the [wiki](https://github.com/mheadd/node-ridb/wiki).

Get all facilities within 100 miles of Syracuse, NY that allow camping.

```javascript
ridb.facilities.details(null, {latitude: 43.0469, longitude: -76.1444, radius: 100, activity: '9,109'}, function(error, response) {
  if(!error) {
    console.log(JSON.stringify(response));
  }
});
```

```json
{
  "METADATA": {
    "RESULTS": {
      "CURRENT_COUNT": 1,
      "TOTAL_COUNT": 6
    },
    "SEARCH_PARAMETERS": {
      "LATITUDE": 43.0469,
      "RADIUS": 100,
      "LONGITUDE": -76.1444,
      "LIMIT": 1,
      "OFFSET": 0,
      "ACTIVITY": "9,109",
      "QUERY": ""
    }
  },
  "RECDATA": [
    {
      "FacilityID": 233523,
      "OrgFacilityID": "AN373226",
      "LegacyFacilityID": 73226,
      "FacilityReservationURL": "",
      "FacilityMapURL": "",
      "FacilityPhone": "570-835-5281",
      "FacilityTypeDescription": "Camping",
      "FacilityLatitude": 41.886944444444445,
      "FacilityDescription": "<h2>Overview</h2>Ives Run Campground sits on the eastern shore of Hammond Lake in north-central Pennsylvania. <br /><br />Surrounded by lush forested ridges, the lake offers recreation for the entire family, including picnicking, swimming, boating, fishing, hiking, hunting and wildlife watching. <br /><br />Ives Run, with its beach and grassy sunning area, is a great place for kids of any age. The facility has campsites as well as group picnic shelters that can be reserved for family reunions, company picnics, neighborhood gatherings and other group events. <h4>Natural Features:</h4>The partially forested campground sits in the pristine setting of the Endless Mountains region of Pennsylvania, along the Allegheny Plateau in the Appalachian Mountains. The Tioga-Hammond Lakes Project consists of two separate dams and reservoirs. The surrounding land paints a scenic picture of rolling mountains and open fields. <h4>Recreation:</h4>Tioga-Hammond Lakes offer a variety of outdoor activities. With a boat ramp and overnight mooring, campers can easily spend time on the water. <br /><br />Anglers seek out record crappie, giant musky, striped, largemouth and smallmouth bass, walleye and channel catfish. <br /><br />The fields and forests around the lakes are popular destinations for both local and out-of-state hunters looking for large and small game species native to the eastern hardwood forests.<br /><br />Four hiking trails, each offering something different, can be accessed from this facility. Near the visitor center, archers use the mile-long Archery Trail, which has targets and tree stands.<h4>Facilities:</h4>Ives Run is a large facility, with nearly 200 reservable campsites, as well as five reservable group picnic shelters available for day use. <br /><br />Other amenities include hot showers, playgrounds, boat ramp, rental mooring slips and a dump station. A swimming area with a grass beach and concrete bottom is also provided. Various sport fields and a volleyball court are close by.<br /><br />Additional fees may be charged for some amenities.",
      "FacilityLongitude": -77.17916666666667,
      "FacilityEmail": "",
      "FacilityDirections": "The campground is located 4 miles south of Tioga and 12 miles north of Wellsboro, Pennsylvania, on State Route 287, within the Ives Run Recreation Area.",
      "FacilityName": "IVES RUN",
      "Keywords": "",
      "FacilityUseFeeDescription": "",
      "StayLimit": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.17916666666667,
          41.886944444444445
        ]
      },
      "LastUpdatedDate": "2015-03-05",
      "FacilityAdaAccess": ""
    }
  ]
}

```

Get a list of organizations with the word 'Department' in the title.

```javascript
ridb.organizations.details(null, {query: 'Department', limit: 2}, function(error, response) {
  if(!error) {
    console.log(JSON.stringify(response));
  }
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
var options = {loop: 'SUNNY', CampsiteAccessible: true, limit: 1};
ridb.campsites.getAllForFacility(234150, options, function(error, response) {
  if(!error) {
    console.log(JSON.stringify(response)); 
  }
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