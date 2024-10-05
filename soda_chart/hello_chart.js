let canvas = document.querySelector('#soda-chart')
let ctx = canvas.getContext('2d')

let chart = new Chart(ctx, {
    type: 'bar',
    data: {     // add more labels, add another data and background color for chart
        labels: ['Coke', 'Pepsi', 'Sprite', 'Either', 'Neither'], // labels on chart
        datasets: [ {
            label:'Number of votes', // data at top of chart
            data: [100, 56, 44, 78, 9], // number of votes correlates with coke, pepsi, neither, either
            backgroundColor: ['green', 'red', 'tan', 'blue', 'purple'] //change bar colors
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks:  { // make axis of chart begin at 0, items are more comparable
                    beginAtZero: true // ticks on side of chart
                }
            }]
        }
    }
})