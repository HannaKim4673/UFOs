// imports the data from data.js
const tableData = data;

// References the HTML table using d3
var tbody = d3.select("tbody");

// Function that builds dynamic table
function buildTable(data) {
    // Clears existing data in table
    tbody.html("");

    // forEach function that inserts data.js data into table
    data.forEach((dataRow) => {
        // Creates variable that appends data.js row to table body
        let row = tbody.append("tr");

        // Function that loops through each field in dataRow arguments
        Object.values(dataRow).forEach((val) => {
            // Appends each value of object to table cell
            let cell = row.append("td");
            cell.text(val);
        });
    });
};

// Function that handles table filtering
function handleClick() {
    // Grabs datetime value from filter
    let date = d3.select("#datetime").property("value");
    // Default filter
    let filteredData = tableData;

    // Has set date used as filter, unless no date is set
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuilds table using filtered data
    buildTable(filteredData);
};

// Calls handleClick function when button click is heard
d3.selectAll("#filter-btn").on("click", handleClick);

// Creates table using original imported data
buildTable(tableData);