document.addEventListener("DOMContentLoaded", function () {
    // Get the tag from the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const selectedTag = urlParams.get('tag');
    document.getElementById('tagHeader').innerText = selectedTag;

    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ''; // Clear any existing content

    // Filter listData based on the tag
    const filteredData = listData.filter(item => item.tags.includes(selectedTag));

    // Populate the table with filtered data
    filteredData.forEach(item => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = item.title;

        const dateCell = document.createElement('td');
        dateCell.textContent = item.date;

        const categoryCell = document.createElement('td');
        categoryCell.textContent = item.category;

        const tagsCell = document.createElement('td');
        tagsCell.textContent = item.tags.join(', ');  // Display all tags

        const linkCell = document.createElement('td');
        const link = document.createElement('a');
        link.href = item.link;
        link.textContent = 'View & Download';
        linkCell.appendChild(link);

        // Append all cells to the row
        row.appendChild(nameCell);
        row.appendChild(dateCell);
        row.appendChild(categoryCell);
        row.appendChild(tagsCell);
        row.appendChild(linkCell);

        // Append the row to the table body
        tableBody.appendChild(row);
    });
});
