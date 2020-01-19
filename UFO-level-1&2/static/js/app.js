// from data.js
var tableData = data;

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
var button = d3.selectAll(".form-control");

button.on("change", function() {

  // Select the input element and get the raw HTML node
  var dateinputValue = d3.select('#datetime').node().value.trim().toLowerCase();
  var cityinputValue = d3.select('#city').node().value.trim().toLowerCase();
  var stateinputValue = d3.select('#state').node().value.trim().toLowerCase();
  var countryinputValue = d3.select('#country').node().value.trim().toLowerCase();
  var shapeinputValue = d3.select('#shape').node().value.trim().toLowerCase();
  

var  filteredData = tableData;

if (dateinputValue != "") {
  filteredData = filteredData.filter(function (date) {
  return date.datetime === dateinputValue;
});
}

  if (cityinputValue != "") {
    filteredData = filteredData.filter(function (city) {
    return city.city === cityinputValue;
});
}

if (stateinputValue != "") {
    filteredData = filteredData.filter(function (state) {
        return state.state === stateinputValue;
    });
}

if (countryinputValue != "") {
    filteredData = filteredData.filter(function (country) {
        return country.country === countryinputValue;
    });
}

if (shapeinputValue != "") {
    filteredData = filteredData.filter(function (shape) {
        return shape.shape=== shapeinputValue;
    });
}
    
  console.log(filteredData);

  tableBody.selectAll("tr").remove();
  tableBody.selectAll("td").remove();
  
// output filtered data

  filteredData.forEach((data) => {
    var row = tableBody.append("tr");
    Object.entries(data).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
    }); 
});

});


var button2 = d3.select("#filter-btn");

button2.on("click",function(){
  tableData.forEach((sighting) => {
    var row = tableBody.append("tr");
    Object.entries(sighting).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
    }); 
});

var dateinputValue = d3.select('#datetime').property("value","");
var cityinputValue = d3.select('#city').property("value","");
var stateinputValue = d3.select('#state').property("value","");
var countryinputValue = d3.select('#country').property("value","");
var shapeinputValue = d3.select('#shape').property("value","");

})