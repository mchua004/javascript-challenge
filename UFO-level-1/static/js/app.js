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