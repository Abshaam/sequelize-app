const express = require("express");
require("dotenv").config()
const { connect } = require('./connection')
const hubCustomer = require('./models/hubCustomer')
// const hubKeeper = require('./models/hubKeeper')
const hubCustomerRoute = require('./routes/hubCustomer')

const PORT = process.env.PORT || 7000;

const app = express()

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(hubCustomerRoute);

const testing =  async() => {
    try {
        await connect.authenticate();
        console.log('connecting to db sucessful');
    } catch (error) {
        console.log('something is wrong', error);
    }
  
}

// hello, I am doing well. Okay yes please. I am still interested and will be available for the Developers In Vogue internhip position at chipper cash. Thank you.

testing()

const synchronize = async() => {
    try {
        await hubCustomer.sync({alter: true}) 
        console.log('models synchronization done successfully');
    } catch (error) {
        console.log('something wrong with models synchronization', error);
    }
   
}

synchronize();


app.listen(PORT, () =>  console.log(`app is running on ${PORT}`));