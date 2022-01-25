const express = require('express');
const path = require ('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require ('express-myconnection');


const app = express();

// importing routes
const coustomerRoutes = require ('./routes/customer');
const clienteRoutes = require ('./routes/cliente');
const { urlencoded } = require ('express');

//settings 
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views',path.join (__dirname,'views/customers' ));
app.set('views',path.join (__dirname,'views/cliente' ));


//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql,
    {
        host: 'localhost',
        user: 'root',
        password: '',
        port: 3306,
        database: 'deber'


    }, 'single'));

    app.use(express.urlencoded({extended: false}));



//routes
app.use('/customers', coustomerRoutes);
app.use('/cliente', clienteRoutes);




//static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('Server on port 3000');
});