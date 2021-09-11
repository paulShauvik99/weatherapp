const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 8000;

//Paths
const statPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');
app.use(express.static(statPath));

app.set('view engine','hbs');
app.set('views',templatePath );

hbs.registerPartials(partialPath);


//Routing
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/weather', (req, res) => {
    res.render('weather');
})

app.get('*', (req, res) => {
    res.render('404err',{
        errMsg : 'Oops! Page not found.'
    });
})

app.listen(port, ()=>{
    console.log(`Listening to Port ${port}`);
})