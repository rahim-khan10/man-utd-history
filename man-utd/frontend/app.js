document.addEventListener('DOMContentLoaded', () => {
    // Fetch history data from backend API
    fetch('http://localhost:5000/api/history')
        .then(response => response.json())
        .then(data => {
            const historyList = document.getElementById('history-list');
            
            // Loop through the data and create a list item for each history event
            data.forEach(item => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <span><strong>${item.year}</strong> - ${item.event}</span>
                `;
                historyList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching history data:', error));
});
