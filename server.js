const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const travelRouter = require('./app_server/routes/travel');

app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

app.use('/travel', travelRouter);

// serve EVERYTHING from public 
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});