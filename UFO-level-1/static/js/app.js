// from data.js
var tableData = data;
var myTable = d3.select("table");
//console.log(tableData);
//myTable.attr("class", "table table-striped");
//get reference to table body
var tbody = d3.select("tbody");

//loop thru data and create function to add data to the table
//values = datetime, city, state, country, shape, duration, comments
data.forEach(function(reporting){
    console.log(reporting);
    var t_row = tbody.append("tr");

    Object.entries(reporting).forEach(function([k,v]){
        console.log(k,v);
        var my_cell = t_row.append("td");
        my_cell.text(v);
    })
}
);

// Creating an Event Listener for the Button
//select the button
var button = d3.select("#filter-btn");

//create event handlers
button.on("click", function() { 

    //remove existing table and prevent page refresh
    d3.select("tbody").html("");
    d3.event.preventDefault();

//filter by date
 var dateTime = d3.select("#datetime").property("value");
 //console.log(dateTime);

var filterData = tableData.filter(record => record.datetime ===dateTime);

//display filtered data
filterData.forEach((report) => {
    var t_row = tbody.append('tr');

    Object.entries(report).forEach(([key,value]) => {
        var my_cell = t_row.append('td');
        my_cell.text(value); 
    });
});

});
