const express   = require('express');
const path      = require('path');
const cors      = require('cors');
const app       = express();
const APP_PORT  = 8080;

const renderPage = require('./views/src/ssr/app.js');
const moviesRoute = require('./routes/moviesRoute');
const Loadable = require('react-loadable');

// Server configuration
app.use('/dist', express.static(path.resolve(__dirname, 'dist')));
app.use(cors());

// API routing
app.use('/api/movies', moviesRoute);
app.get('*', (req, res) => {
    renderPage(req).then(renderedPage => res.send(renderedPage));
});

// Server start
Loadable.preloadAll().then(() => {
    app.listen(APP_PORT, () => {
        console.log(`Server is started on ${APP_PORT} port`);
    });
});
