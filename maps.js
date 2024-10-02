// variable to show where map at
// need a WHERE and how far are you zoomed in? 
let metroAreaCenterCoordinates = [44.96, -93.2]
let zoomLevel = 9 // 1 = world 20 = city blocks

let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel)