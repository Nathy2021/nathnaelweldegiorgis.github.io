
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

const port = 3000;

app.use(cookieParser());
app.use(express.urlencoded());
app.use((req, res, next) => {
    if (!req.cookies.container) {
        req.cookies.container = [];
    }
    next();
});

app.get('/', (req, res) => {
    if (req.cookies.key) {
        res.render('forgetCookie');
    } else {
        res.render('cookiePage', { cookies: req.cookies.container });
    }
});
app.post('/addCookie', (req, res) => {
    if (req.cookies.container) {
        req.cookies.container = [];
    } else {
        req.cookies.container.push({
            key: req.body.key,
            value: req.body.value,
        });
    }
    res.cookie(key, value, { maxAge: 1000 * 60 * 60 * 24 });//24 hours   
    res.redirect('/'); //
})
app.listen(port, (err) => {
    if (err) {
        console.log("Error: " + err);
    } else {
        console.log(`Server is running on port ${port}`);
    }
})