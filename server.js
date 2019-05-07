const express   = require('express');
const path      = require('path');
const cors      = require('cors');
const app       = express();
const APP_PORT  = 8080;

const renderPage = require('./client-ssr/ssr/app.js');
const moviesRoute = require('./routes/moviesRoute');

// Server configuration
app.use('/client', express.static(path.resolve(__dirname, 'client')));
app.use(cors());

// API routing
app.use('/api/movies', moviesRoute);
app.get('*', (req, res) => {
    res.send(renderPage(req));
});

// Server start
app.listen(APP_PORT, () => {
    console.log(`Server is started on ${APP_PORT} port`);
});