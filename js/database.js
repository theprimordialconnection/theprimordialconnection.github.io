var currentSortDirName = "asc";  // Track current sorting direction for Name
var currentSortDirDate = "asc";  // Track current sorting direction for Date
var rowsPerPage = 10; // Set the number of rows per page
var currentPage = 1;
var searchTerm = "";  // Track the current search term

// Toggle Menu for Mobile (if necessary)
function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

// Sort Table Function
function sortTable(n, type) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("dataTable");
    switching = true;
    dir = (n === 0) ? currentSortDirName : currentSortDirDate; // Use the correct direction tracker

    // Update arrow immediately on click
    if (n === 0) {
        var nameArrow = document.getElementById("nameArrow");
        if (dir === "asc") {
            nameArrow.innerHTML = "▼"; // Change to down arrow for descending sort
        } else {
            nameArrow.innerHTML = "▲"; // Change to up arrow for ascending sort
        }
    } else if (n === 1) {
        var dateArrow = document.getElementById("dateArrow");
        if (dir === "asc") {
            dateArrow.innerHTML = "▼"; // Change to down arrow for descending sort
        } else {
            dateArrow.innerHTML = "▲"; // Change to up arrow for ascending sort
        }
    }

    // Start sorting the table rows
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];

            if (type === 'date') {
                var dateX = new Date(x.innerHTML);
                var dateY = new Date(y.innerHTML);
                if (dir == "asc") {
                    if (dateX > dateY) {
                        shouldSwitch = true;
                        break;
                    }
                } else if (dir == "desc") {
                    if (dateX < dateY) {
                        shouldSwitch = true;
                        break;
                    }
                }
            } else if (type === 'text') {
                if (dir == "asc") {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                } else if (dir == "desc") {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
    // Toggle the sorting direction for the next click
    if (n === 0) {
        currentSortDirName = (dir === "asc") ? "desc" : "asc";
    } else if (n === 1) {
        currentSortDirDate = (dir === "asc") ? "desc" : "asc";
    }
}

// Filter Table by Category
// Filter Table by Category
function filterTable() {
    var dropdown, filter, table, rows, i, category;
    dropdown = document.getElementById("categoryFilter");
    filter = dropdown.value;
    table = document.getElementById("dataTable");
    rows = table.getElementsByClassName("table-row");

    // Loop through all table rows and hide those that don't match the filter
    for (i = 0; i < rows.length; i++) {
        category = rows[i].getAttribute("data-category");
        if (filter === "all" || category === filter) {
            rows[i].style.display = ""; // Show row
        } else {
            rows[i].style.display = "none"; // Hide row
        }
    }
}

// Search by 'Name' column
function searchByName() {
    var input = document.getElementById("searchInput");
    searchTerm = input.value.toLowerCase();  // Update global search term
    paginateTable();  // Call pagination after updating search
}

// Pagination Logic
function paginateTable() {
    var table, rows, i, startRow, endRow;
    table = document.getElementById("dataTable");
    rows = table.getElementsByTagName("tr");
    startRow = (currentPage - 1) * rowsPerPage + 1;
    endRow = currentPage * rowsPerPage;

    // Hide all rows first
    for (i = 1; i < rows.length; i++) {
        rows[i].style.display = "none";
    }

    // Show only the rows for the current page, based on search term
    var visibleRows = 0;
    for (i = 1; i < rows.length; i++) {
        var td = rows[i].getElementsByTagName("td")[0];  // Get 'Name' column
        if (td) {
            var txtValue = td.textContent || td.innerText;
            if (txtValue.toLowerCase().indexOf(searchTerm) > -1) {
                visibleRows++;
                if (visibleRows > startRow - 1 && visibleRows <= endRow) {
                    rows[i].style.display = "";  // Show row if within the page range
                }
            }
        }
    }

    renderPaginationControls(visibleRows);  // Update pagination controls with filtered rows
}

// Render Pagination Controls (Previous, Next, Page Numbers)
function renderPaginationControls(totalVisibleRows) {
    var totalPages = Math.ceil(totalVisibleRows / rowsPerPage);
    var paginationControls = document.getElementById("paginationControls");
    paginationControls.innerHTML = "";

    if (currentPage > 1) {
        paginationControls.innerHTML += `<button onclick="changePage(currentPage - 1)">Previous</button>`;
    }

    for (var i = 1; i <= totalPages; i++) {
        paginationControls.innerHTML += `<button onclick="changePage(${i})">${i}</button>`;
    }

    if (currentPage < totalPages) {
        paginationControls.innerHTML += `<button onclick="changePage(currentPage + 1)">Next</button>`;
    }
}

// Change the Page
function changePage(pageNumber) {
    currentPage = pageNumber;
    paginateTable();  // Re-run pagination to show the new page with search term applied
}

// Initial load
window.onload = function () {
    paginateTable();
}
