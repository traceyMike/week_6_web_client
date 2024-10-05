// variable to show where map at
// need a WHERE and how far are you zoomed in? 
let metroAreaCenterCoordinates = [44.96, -93.2]
// could change zoom level to 11 for more zoom
// could change to 5 to zoom out
let zoomLevel = 9 // 1 = world 20 = city blocks

// set up the map
let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel)

// L is our leaflet object, sets tile layer
// leaflet uses url knows where in world map is dislpayed
// makes request to show right images - tile layer
// attribution is who created the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// instead of making a marker for each school - as shown below
// can make a loop for one set of data to create marker for each school
// add an array of objects
campuses =  [
    {"name": "Minneapolis College", "website": "https://minneapolis.edu", "coordinates": [44.9724, -93.2844] }, 
    {"name": "Saint Paul College", "website": "https://saintpaul.edu", "coordinates": [44.94839, -93.1099] }, 
    {"name": "Normandale Community College", "website": "https://normandale.edu", "coordinates": [44.8297, -93.3312] }, 
    {"name": "North Hennepin Community College", "website": "https://nhcc.edu", "coordinates": [45.1054232,-93.3767558] }, 
    {"name": "Century College", "website": "https://www.century.edu/", "coordinates": [45.0438494,-92.9862026] }
]
// use above array of data 
campuses.forEach(function(collegeCampus){
    let markerText = `${collegeCampus.name}<br><a href="${collegeCampus.website}">Website</a>`;
    L.marker(collegeCampus.coordinates).bindPopup(markerText).addTo(map)
}) // above will create all the markers and add them to map


// make popup for marker to display info use bindPopup
// place it in second let statement after variable in ( )
// argument in bindPopup is a string, can be "Minneapolis College"
// click on marker and pop up appears 
// we can write html in markers - put a link to the college

// create a marker on the map for mctc
// use let to set coordinates
// then marker name is mctcMarker and add it to map and use coordinates variable 
//let mctcCoordinates = [44.9724, -93.2844]
//let mctcMarker = L.marker(mctcCoordinates)
//.bindPopup('Minneapolis College<br><a href="https://minneapolis.edu">Website</a>')
//.addTo(map)

// add marker for st paul college
//let stPaulCoordinates = [44.9483, -93.1099]
//let stPaulMarker = L.marker(stPaulCoordinates)
//.bindPopup('St. Paul College<br><a href="https://saintpaul.edu">Website</a>')
//.addTo(map)

// draw a circle around twin cities metro area
//let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
//    color: 'green', // put lines in {} and customize the circle
//    radius: 30000,
//    fillOpacity: 0.2
//} )
//.bindPopup('Twin Cities Metro Area')
//.addTo(map)

// add a marker for normandale college, with link to site via popup 
// advantage of making marker for normandaleMarker - good for a reference to work with in script
// not necessary to have - is useful to have reference to markers created
//let normandaleCoordinates = [44.8297, -93.3312]
//let normandaleMarker = L.marker(normandaleCoordinates)
//.bindPopup('Normandale Community College<br><a href="https://https://www.normandale.edu">Website</a>')
//.addTo(map)








