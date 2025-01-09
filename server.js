const express = require('express');
const app = express();
const PORT = 9000;

app.use(express.json());

let users = []; 


app.get('/api/get', (req, res) => {
    res.status(200).send({ message: 'Node.js AWS Deployment' });
});


app.get('/aaj', (req, res) => {
    res.status(200).send({ message: 'Dev',email: 'tiwariakshat2023it@gmail.com' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});