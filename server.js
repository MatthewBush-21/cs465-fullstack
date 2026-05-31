const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

// views location
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

// static files
app.use(express.static(path.join(__dirname, 'public')));

// routes
const routes = require('./app_server/routes/index');
app.use('/', routes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});