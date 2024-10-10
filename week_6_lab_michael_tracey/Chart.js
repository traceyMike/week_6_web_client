// create array called labels, contains names of bridges from bridgelist
// bridge => bridge.name take paramenter bridge, for each bridge object
// in bridgelist, retrieves value of the name property
// labels becomes an array of bridge names 
const labels = bridgelist.map(bridge => bridge.name) // get the bridge names
// create array called spans, contains span lengths of bridges from bridgelist
// map method called on bridgelist array
// bridge => bridge.span, take parameter bridge retrieve value of the span from each bridge
// spans becomes an array of span lengths 
const spans = bridgelist.map(bridge => bridge.span) // get the brige spans

// colors for the bridges 
const colors = ['red', 'green', 'orange', 'black', 'purple']

// create the chart for the bridgelist
const ctx = document.getElementById('bridges-chart').getContext('2d')
const bridgesChart = new CharacterData(ctx, {
    type: 'bar', // bar is type of chart
    data: {
        labels: labels, // names of the bridges in chart
        datasets: [{
            label: 'Span length (meters)', // this is the dataset label
            data: spans, // the span lengths
            backgroundColor: colors, // use colors array from above
            borderColor: rgb(255, 99, 71), // border color
            borderWidth: 1 // border width
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true // start y-axis at 0
            }
        }
    }
})