const express   = require('express');
const path      = require('path');
const cors      = require('cors');
const app       = express();
const APP_PORT  = 8080;

const moviesRoute = require('./routes/moviesRoute');
// const renderedApp = require('./ssr/renderedApp');

// Server configuration
app.use(express.static(path.join(__dirname, 'client/dist')));
app.use(cors());

// const initialState = {
//     movies: [],
//     sortBy: ''
// };

// API routing
app.use('/api/movies', moviesRoute);
app.get('*', (req, res, next) => {
    // res.send(renderedApp(initialState));
    res.sendFile(path.join(__dirname, '/client/dist', 'index.html'));
});

// Server start
app.listen(APP_PORT, () => {
    console.log(`Server is started on ${APP_PORT} port`);
});