// from data.js
var tableData = data;

console.log(tableData);

// get table element

var tableBody = d3.select("tbody");

tableData.forEach((sighting) => {
    var row = tableBody.append("tr");
    Object.entries(sighting).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
    }); 
});


// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = tableData.filter(date => 
    date.datetime == inputValue);
    

  console.log(filteredData);

});