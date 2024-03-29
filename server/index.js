const path = require('path');
const express = require('express');

const PORT =  process.env.PORT || 3001;
const appBuildPath = '../client/build';

const app = express();

const path2 = path.resolve(__dirname, appBuildPath);

app.use(express.static(path.resolve(__dirname, appBuildPath)));

app.get("/sudoko", (req, res) => {
    console.log(`Server listening on ${path2}`);
    res.json({message: "Greetngs from Sudko App"});
});

app.get('*', (req, res) => {
    console.log(`Server listening on ${req}`);
    
    res.sendFile(path.resolve(__dirname, appBuildPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});



function initApp() {
    console.log(path2);
}



initApp();