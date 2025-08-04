const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname,'public')));

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
const errorController = require('./controllers/404.js');

app.use(bodyParser.urlencoded({extended : false}));

app.use('/admin',adminRoutes);



app.use(shopRoutes);

app.use(errorController.pagenotfound);




app.listen(3000);

