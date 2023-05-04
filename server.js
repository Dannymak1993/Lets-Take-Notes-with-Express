const express = require('express');
const app = express();
const apiRoutes = require ('./routes/apiroutes.js');
const htmlRoutes = require ('./routes/htmlroutes.js');
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes)
app.use('/', htmlRoutes)

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});