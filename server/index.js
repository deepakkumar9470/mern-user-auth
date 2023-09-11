require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./db/db');
const PORT = process.env.PORT || 8000
const cookieParser = require('cookie-parser')
const cors = require('cors');
const authRoute = require('./routes/auth');

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended : false}))
app.use(cors());

app.use('/api/user', authRoute);


connectDB()


app.get('/', (req,res)=>{
    res.send('hello mern auth..')
})

app.listen(PORT, ()=>{
    console.log(`Server started at port http://localhost:${PORT}`)
});


