/* Input elements */ // code finds 3 input elements 
let expenseNameInput = document.querySelector('#expense-name')
let expenseAmountInput = document.querySelector('#expense-amount')
let addExpenseButton = document.querySelector('#add-expense')

/* Get chart canvas and contex  */ // finding chart canvas and creating chart content
let chartCanvas = document.querySelector('#expenses-doughnut-chart')
let ctx = chartCanvas.getContext('2d')


// TODO create chart object 
let expenseChart = new Chart(ctx, { // add a doughnut chart
    type: 'doughnut', // add type of chart
    data: { // create data for chart, below-datasets add array of data
        datasets: [
            {
            data: [], // empty array //numbers in chart
            backgroundColor: [] // empty array
            }
        ],
        labels: [] // empty labels array //labels are things in chart
    },
    options: {} // empty options array - fill things here later
})

// TODO (optional) replace with colors of your choice. The array can have as many or as few colors as you like
// below is array of colors for different sections of chart 
let chartColors = [ 'tomato', 'orange', 'dodgerblue', 'mediumseagreen', 'slateblue', 'violet' ]

// functions called from addExpenseButton event listener
// works with expense chart object
// name to labels
// amount to data
function addExpenseToChart(name, amount) {
    
    // TODO add expense to chart 
    expenseChart.data.labels.push(name)
    expenseChart.data.datasets[0].data.push(amount) // looking for data array 
    
    // add color to chart
    // above is the letChartColors which will allow colors to add to chart when data is added
    // it then cycles back to beginning color
    // create array to keep track of color count
    let colorCount = expenseChart.data.datasets[0].backgroundColor.length
    // create variable color, % is like division gives back only the remainder
    // color count gets scaled between 0 and the number of colorChart colors
    let color = chartColors[ colorCount % chartColors.length ]
    // push new color onto end of colors array
    expenseChart.data.datasets[0].backgroundColor.push(color)

    expenseChart.update()
}


addExpenseButton.addEventListener('click', function() {

    let errors = []

    let expenseName = expenseNameInput.value 
    let expenseAmount = expenseAmountInput.value 

    // Validate both fields are filled in, and the amount is a positive number
    // if any of these checks fail, pushes error message to error array
    // if any errors, one of the checks failed
    // does not proceed to add data to chart
    if (expenseName.length == 0) {
        errors.push('Enter a type of expense')
    }

    if (expenseAmount.length == 0 || expenseAmountInput < 0) {
        errors.push('Enter a positive amount for the expense')
    }

    // If any errors, alert and return - do not procede to add to chart 
    if (errors.length > 0) {
        alert( errors.join('\n') )
        return
    }

    // TODO call function to update chart
    // call the addExpenseToChart 
    addExpenseToChart(expenseName, expenseAmount)


    // Clear inputs, ready for next expense name and amount.
    // clear the expense fields, input ready for next input
    expenseNameInput.value = ''
    expenseAmountInput.value = ''

})


// TODO add event listener to click the Add Expense button when the enter key is pressed 
// let user press enter to update expenses

// press enter to add an expense
window.addEventListener('keyup', function() {
    if (event.keyCode === 13) {
        let inputElements = [expenseNameInput, expenseAmountInput, addExpenseButton]
        if ( inputElements.includes(document.activeElement) ) {
            addExpenseButton.click() // will add expense button
        }
    }
})