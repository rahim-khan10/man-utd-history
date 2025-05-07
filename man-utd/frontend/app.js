fetch('http://localhost:5000/api/history')
    .then(response => response.json())
    .then(data => {
        const list = document.getElementById('history-list');
        data.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.year}: ${item.event}`;
            list.appendChild(li);
        });
    })
    .catch(error => console.error('Error fetching history:', error));
