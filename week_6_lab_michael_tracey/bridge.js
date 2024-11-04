// put data into array of objects
// loop over the array to create the markers
// and pop ups - do not create 5 individual markers
// map should have appopriate size, center location, and zoom level
// show all five bridges clearly
// each marker should have popup with...
// bridge name, span length, use html to format this info

// array of bridges 
let bridgelist = [ // initialize bridgelist array with all 5 bridges 
    {name: 'Verrazano-Narrows Bridge', location: 'New York, NY', coordinates: [40.6066, -74.0447], span: 1298.4 },
    {name: 'Golden Gate Bridge', location: 'San Francisco, CA', coordinates: [37.8199, -122.4783], span: 1278.4 },
    {name: 'Mackinac Bridge', location: 'Mackinaw and St Ignace, MI', coordinates: [45.8174, -84.7278], span: 1158.0 },
    {name: 'George Washington Bridge', location: 'New York, NY nd New Jersey, NJ', coordinates: [40.8517, -73.9527], span: 1067.0 },
    {name: 'Tacoma Narrows Bridge', location: 'Tacoma and Kitsap, WA', coordinates: [47.2690, -122.5517], span: 853.44 }
]

// create icon for all bridges which are not the longest bridge
var bridgeIcon = L.icon({
    iconUrl: 'golden-gate-bridge.png', // path to bridge icon
    iconSize: [38, 38], //icon size
    iconAnchor: [19, 38], // anchor point for correct placement
    popupAnchor: [0, -38] // position popup above the icon
})

// create icon for the longest bridge with longest-bridge.png
var longestBridgeIcon = L.icon({
    iconUrl: 'longest-bridge.png', // make sure name is same as in directory - no long path link 
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38]
})

// next we need to find out which bridge is the longest bridge from the array using 
// by using span
let longestBridge = bridgelist.reduce((max, bridge) => bridge.span > max.span ? bridge : max, bridgelist[0])


// create map showing the usa, with an appropriate zoom level
// create new leaflet map and attach to html element ID 'bridges-map'
// setView to zoom and center on the map
// in the array is latitude and longitude
// 4 is the zoom level of the map
let map = L.map('bridges-map').setView([39.8283, -98.5795], 4)
// create layer for map using openstreetmap tiles
// create new tile layer for map - use open street map for map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
}).addTo(map)

// loop over array to create the markers and popups
// do not create five individual markers in code
// for loop loops through each element in bridgeList array
//bridgelist.forEach(function(bridge) {
    // create vartiables from bridge objects for use in fun
  //  let bridgeName = bridge.name // get name of bridge object
  //  let bridgeLocation = bridge.location // get location of bridge object
  //  let bridgeSpan = bridge.span
  //  let bridgeCoordinates = bridge.coordinates

// NEW FOREACH LOOP
    // loop through array and create markers with correct icons
    bridgelist.forEach(function(bridge){
        // for each element in bridgeList, function inside forEach
        // is executed, parameter bridge represents each bridge in array
        // use longest bridge icon if it is the longest brdige
        // or use regular icon
        
        // checks if name of current bridge in loop matches
        // name of longest bridge
        // if true, assigns longestBridgeIcon  
        let iconToUse = (bridge.name === longestBridge.name) ? longestBridgeIcon : bridgeIcon
        
        // create marker at bridge coordinates with 
        // specified icon

        // use L.marker to make new marker for current bridge
        // latitude and longitude coordinates of bridge
        // are used to position marker on map
        // sets icon property of marker to iconToUse var 
        let bridgeMarker = L.marker(bridge.coordinates, { icon: iconToUse})
            // attach popup to makrer
            .bindPopup(`<strong>${bridge.name}</strong><br>Location: ${bridge.location}<br>Span: ${bridge.span} meters`)
            .addTo(map) // add marker to map

    
})

