const express = require('express');
const route = express.Router();
const axios = require('axios');

const API_URL = 'http://reactjs-cdp.herokuapp.com/movies';

// GET Movies List
route.get('/', (req, res) => {
    axios
        .get(API_URL)
        .then(externalAPIRes => {
            res.send(externalAPIRes.data);
        });
});

// GET Movie
route.get('/:id', (req, res) => {
    axios
        .get(`${API_URL}/${req.params.id}`)
        .then(externalAPIRes => {
            res.send(externalAPIRes.data);
        });
});

module.exports = route;