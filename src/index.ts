//The next line gets a express from node_modules/express
import app from './server.js';

//The next line gets the port from the environment variable or uses 4000 as default
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});