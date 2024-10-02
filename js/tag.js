document.addEventListener("DOMContentLoaded", function () {
    // Get the tag from the URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const tag = urlParams.get('tag'); // Get the tag from the URL
    
    // Set the <title> to "'{tag}' | theprimordialconnection"
    if (tag) {
        document.title = `'${tag}' | theprimordialconnection`;

        // Update the header to show the tag title
        document.getElementById('tagTitle').textContent = tag;
    }

    // Function to filter and display content based on the tag
    const filteredData = listData.filter(item => item.tags && item.tags.includes(tag));

    if (filteredData.length > 0) {
        const tableBody = document.getElementById('tableBody');
        tableBody.innerHTML = ""; // Clear the table

        // Populate table with filtered data
        filteredData.forEach(item => {
            const row = document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.textContent = item.title;

            const dateCell = document.createElement('td');
            dateCell.textContent = item.date;

            const categoryCell = document.createElement('td');
            categoryCell.textContent = item.category;

            const linkCell = document.createElement('td');
            const link = document.createElement('a');
            link.href = item.link;
            link.textContent = 'View & Download';
            linkCell.appendChild(link);

            // Append cells to the row
            row.appendChild(nameCell);
            row.appendChild(dateCell);
            row.appendChild(categoryCell);
            row.appendChild(linkCell);

            // Append the row to the table body
            tableBody.appendChild(row);
        });
    } else {
        // Display message if no content is found for the tag
        document.getElementById('tableBody').innerHTML = `<tr><td colspan="4">No content found for the tag '${tag}'.</td></tr>`;
    }
});
