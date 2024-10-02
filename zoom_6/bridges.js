// where in world?

// customize these number?
// latitude and longitude of minnesota
let mapCenter = [45, -93]
// how much zoom in or out
let zoomLevel = 5

let bridgeMap = L.map('bridge-map').setView(mapCenter, zoomLevel)

// add titles - the picutres that make up the map

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',    
}).addTo(bridgeMap) // make sure bridgeMap name matches code 

// when we have a set of objects, and they are all the same - they all have same attributes
// it is common to store as array of objects
// all the things are bridges
// all the bridges have name
// all the bridges have a span, location, longitude and so on
/* a bridge object might be 
{ 
name: 'golden gate bridge',
 span: '1234m',
 locaiton: [35, -600]
 }

 { 
name: 'golden tacoma bridge',
city: 'taiwanko'
 span: '1234m',
 locaiton: [35, -600]
 }   g

 { 
name: 'smelly tacoma bridge',
 span: '1234m',
 locaiton: [35, -600]
 }
*/
// array of bridges
let brigeList = [
    { name: 'Verrazano-Narrows Bridge', location: 'New York, NY', span: '1298.4', location: [48.6066, -74.0447]},
    { name: 'Golden Gate Bridge', location: 'San Francisco, CA', span: '1278.4', location: [42.6266, -74.0447]},
]

bridgeList.forEach(function(bridgeObject) {
    let bridgeName = bridgeObject.name
    let bridgeCoordinates = bridgeObject.coordinates 
    // draw a marker

    let bridgeMarker = L.marker(bridgeCoordinates)
    bridgeMarker.bindPopup('Hello?')
    bridgeMarker.addTo(bridgeMap)
})