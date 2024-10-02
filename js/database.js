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

// Function to dynamically populate the table
function populateTable() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = "";  // Clear the table before populating

    listData.forEach(item => {
        const row = document.createElement('tr');
        row.classList.add('table-row'); // Add class for filtering
        row.setAttribute('data-category', item.category.toLowerCase()); // Set the data-category attribute

        // Create table cells for each column
        const nameCell = document.createElement('td');
        nameCell.textContent = item.title;

        const dateCell = document.createElement('td');
        dateCell.textContent = item.date;

        const categoryCell = document.createElement('td');
        categoryCell.textContent = item.category;

        // Create the tags cell and make tags clickable
        const tagsCell = document.createElement('td');
        const tagsContainer = document.createElement('div'); // Container for tags
        tagsContainer.classList.add('tag-container'); // Style tags container

        if (item.tags && item.tags.length) {
            item.tags.forEach(tag => {
                const tagLink = document.createElement('a');
                tagLink.href = `tag.htm?tag=${encodeURIComponent(tag)}`;  // Link to tag.htm with the selected tag
                tagLink.textContent = tag;
                tagLink.classList.add('tag-link'); // Apply the class for styling the tags
                tagsContainer.appendChild(tagLink);
            });
        } else {
            tagsCell.textContent = "No tags"; // Display "No tags" if there are no tags
        }
        tagsCell.appendChild(tagsContainer);

        const linkCell = document.createElement('td');
        const link = document.createElement('a');
        link.href = item.link;
        link.textContent = 'view & download';
        linkCell.appendChild(link);

        // Append all cells to the row
        row.appendChild(nameCell);
        row.appendChild(dateCell);
        row.appendChild(categoryCell);
        row.appendChild(tagsCell);  // Append tagsCell
        row.appendChild(linkCell);

        // Append the row to the table body
        tableBody.appendChild(row);
    });
}

// Function to filter table by category
function filterTable() {
    const dropdown = document.getElementById("categoryFilter");
    const filter = dropdown.value.toLowerCase();
    const rows = document.querySelectorAll('.table-row');

    // Loop through all table rows and hide those that don't match the filter
    rows.forEach(row => {
        const category = row.getAttribute("data-category");
        row.style.display = (filter === "all" || category === filter) ? "" : "none";
    });
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
        nameArrow.innerHTML = dir === "asc" ? "▼" : "▲";  // Update arrow
    } else if (n === 1) {
        var dateArrow = document.getElementById("dateArrow");
        dateArrow.innerHTML = dir === "asc" ? "▼" : "▲";  // Update arrow
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
                if (dir == "asc" ? dateX > dateY : dateX < dateY) {
                    shouldSwitch = true;
                    break;
                }
            } else if (type === 'text') {
                if (dir == "asc" ? x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase() : x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
        }
    }

    // Toggle the sorting direction for the next click
    if (n === 0) {
        currentSortDirName = dir === "asc" ? "desc" : "asc";
    } else if (n === 1) {
        currentSortDirDate = dir === "asc" ? "desc" : "asc";
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
    populateTable();  // Call the populateTable function on page load
    paginateTable();
};
