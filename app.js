const cookieParser = require('cookie-parser');
const express = require('express')
const owenersRouter = require('./routes/owenersRouter')
const productsRouter = require('./routes/productRouter')
const userssRouter = require('./routes/usersRouter')
const index = require('./routes/index')


const db = require('./config/mongoose-connection')
const app = express()
const path = require('path')


app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname , 'public')));
app.set('view engine' ,  'ejs');

app.use('/' , index)
app.use('/oweners' , owenersRouter )
app.use('/product' , productsRouter)
app.use('/users' , userssRouter)


app.listen(3000);