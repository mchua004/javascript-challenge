// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

data.forEach(function(ufoSighting) {
    // console.log each object in UFO dataset
    console.log(ufoSighting);

    // append one table row 'tr' for each UFO object
    var row = tbody.append("tr");

    Object.entries(ufoSighting).forEach(function([key, value]) {
        // console.log each value for each array object
        console.log(value);

        // append a cell in table row for each value in each object
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select the filter form
var form = d3.select("#form");

// Select the button
var button = d3.select("#filter-btn");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit", runEnter);

// Create the function to run for both events
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    tbody.html("");

    // Loop through array of objects then each object
    filteredData.forEach((object) => {
        var row = tbody.append("tr");

        // Get the entries for each object in the array
        Object.entries(object).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
  
};