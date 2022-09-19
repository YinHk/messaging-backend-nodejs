/*  Routes for
    - Tokens & Authentication
    - Initialization & Users
    - Managing Users
    - Authless Users
    - Logging Out
    - Querying Users
*/ 
const express = require('express');
const authentication = require('./controller/authentication');
const router = express.Router();

router.get('/authentication', authentication.authenticate);
router.get('/authentication/revoke_token', authentication.revoke);