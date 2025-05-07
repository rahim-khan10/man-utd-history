const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 5000;

app.use(cors());

const history = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));

app.get('/api/history', (req, res) => {
    res.json(history);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
