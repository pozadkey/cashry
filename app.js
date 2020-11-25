const express = require('express'),
mongoose = require('mongoose'),
cashRoute = require('./routes/cashRoute')
port = 3000,
localhost = '127.0.0.1'
app = express();

//middleware
app.use(express.static('public'))
app.use(express.json())

//view engine
app.set('view engine', 'ejs')

//connect database
const db = require('./config')
mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true})
    .then(server=>{
        app.listen(3000)
        console.log(`server is running at 3000`);
    })
    .catch(error=>{
        console.log(`something went wrong with the server, ${error}`);
    })

app.get('/', (req, res)=>{res.render('home')})
app.use(cashRoute)
