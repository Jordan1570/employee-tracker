const express = require("express");
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3001
const app = express()

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// server creation
app.listen(PORT, function () {
    console.log('server running')
});