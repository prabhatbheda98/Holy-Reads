require('dotenv').config();

const express = require('express');
const app = express();

const connectDB = require('./config/db')
connectDB();

const handelError = require('./lib/handleError')

const cors = require('cors')
const routes = require('./routes/index')
const port=5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/',routes);
app.use(handelError);

app.listen(port,()=>{
    console.log(`http://localhost:${port}
    Run SucessFull`)
})