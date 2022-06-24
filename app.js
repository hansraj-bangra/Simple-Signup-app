const express = require('express');
const path = require('path'); 
const mongo = require('mongodb');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();
const new_db = "mongodb://localhost:27017/database_name";


app.get('/',(req,res)=>{
    res.set({
        'Access-control-Allow-Origin':'*'
    });
    
    return res.redirect('/public/index.html');
}).listen(8080);

app.use('/public',express.static(__dirname +'/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post('/sign_up',(req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const pass = req.body.password;
    const phone = req.body.phone;
    const data = {
        "name":name,
        "email":email,
        "password":pass,
        "phone":phone
    }
    console.log("DATA is "+ JSON.stringify(data));
    console.log(data);
    res.set({'Access-Control-Allow-Origin':'*'});
    return res.redirect('./public/success.html');
});