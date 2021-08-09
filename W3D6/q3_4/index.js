
const express = require('express');
const path = require('path');
const app = express();

const routeHandler = require('./routeHandlers');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
app.set('port', process.env.PORT || 9090);
const port = app.get('port');

app.use('/css', express.static(path.join(__dirname, "css")));
app.use(express.urlencoded({ extended: false }));

app.get('/', routeHandler.homePage);
app.post('/addToCart', routeHandler.productDetails);
app.get('/product_list', routeHandler.productList);
app.get('/shoppingCart', routeHandler.productsInShoppingCart);
app.get('/itemsInShoppingCart', routeHandler.shoppingCartItems);
app.listen(port, routeHandler.serverMessage);