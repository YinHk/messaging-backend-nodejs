const { getToken, revokeToken } = require('../stream/token');
require('dotenv').config();
console.log(process.env); // remove this after you've confirmed it working

module.exports = {
    authenticate: function(req, res) {
        const token = getToken(API_KEY, API_SECRET);
        res.json({token: token});
    },
    revoke: function(req, res) {
       revokeToken(userId, before);
       res.send('token revoked');
    },
    
};


