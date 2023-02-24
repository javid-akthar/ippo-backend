const express = require('express');
// const env = require('./config/environment');
const app = express();
const port = process.env.PORT || 3005;
var cors = require('cors');
// const logger = require('morgan');
const db = require('./config/mongoose');

app.use(express.urlencoded({ extended : true }));
app.use(express.json());
app.use(cors({origin: true, credentials: true}));

// console.log('env', env);
// app.use(logger(env.morgan.mode, env.morgan.options));
app.use('/', require('./routes/index'));

app.listen(port,function(err){
    if(err){
        console.log(`******Error in running server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});