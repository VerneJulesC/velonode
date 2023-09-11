'use strict';

const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

const {getUsers} = userController;

router.get('/users', getUsers);

module.exports = {
    routes: router
}