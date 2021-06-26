const express = require('express');
const message = require('../components/users/network');

const routes = (server) => {
    server.use('/users', message);
}

module.exports = routes;