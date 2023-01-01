const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
const authJwt = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handler');

const app = express();
app.use(cors());
app.options('*', cors());
const api = process.env.API_URL;


//Meddleware
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(authJwt());
app.use('/public/uploads', express.static(__dirname + '/public/uploads'));
app.use(errorHandler);


//Router
const categoriesRouter = require('./routers/categories');
const ordersRouter = require('./routers/orders');
const usersRouter = require('./routers/users');
const productsRouter = require('./routers/products');


//EndPoint
app.use(`${api}/products`, productsRouter);
app.use(`${api}/categories`, categoriesRouter);
app.use(`${api}/users`, usersRouter);
app.use(`${api}/orders`, ordersRouter);



//MongoDataBase Connection
mongoose.connect(process.env.CONNECTION_STRING,  { useNewUrlParser: true,
                                                    useUnifiedTopology: true,
                                                    dbName: 'Warehousedb' })
.then(()=>{
    console.log('DATABASE CONNECTION IS READY...');
})
.catch((err)=>{
    console.log(err);
})

//Index Route
app.get(`/`, (req, res) => {
    res.send('Invalid Endpoint');
});
//App Running and port
app.listen(5000, () =>{
    console.log('server is running http://localhost:5000/');
})