const express = require('express');
const PORT = 3001;

const app = express();
//app.use();

app.listen(PORT, () => 
    console.log(`The server is running on: http://localhost:${PORT}`));
    


    