const express = require('express');
const path = require('path');

const app = express();
const appPort = 8080;

app.use(express.static(path.join(__dirname, 'client/dist')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '/client/dist', 'index.html'));
})

app.listen(appPort, () => {
    console.log(`Server is started on ${appPort} port`);
});