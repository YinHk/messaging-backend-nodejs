
const StreamChat = require('stream-chat').StreamChat;

// Default testing values.
const api_key = '4nt3qjuk3x3a'
const api_secret = 'fewup2ab5m7cbzzhqtvps6wrdeaptvy743ub5vvmg4zvaekfh77f4hu8dpej7fz8'
const user_id = 'john'

// Initialize a Server Client
const client = StreamChat.getInstance(api_key, api_secret);


function getToken(apiKey=api_key, apiSecret=api_secret, userId=user_id) {
    const timestamp = Number(moment().add('1h').format('X'));
    const token = client.createToken('john', timestamp);
    return token;
}

async function revokeToken(userId=user_id, before) {
    await client.revokeUserToken(userId, before);
}

module.exports = { 
    getToken, 
    revokeToken 
};
