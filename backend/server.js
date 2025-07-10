
require('dotenv').config();
const express =require('express');
const cors =require('cors');
const rentalRoutes = require('./routes/rentalRoutes');
const scrapeRoutes = require('./routes/scrapeRoutes');
const predictionRoutes = require('./routes/predictionRoutes');
const mongoose =require('mongoose');

const app=express();
const PORT =process.env || 5000;

mongoose.connect(process.env.MONGODB_URI,{
     useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>console.log("connected to MongoDB")).catch(err=>console.error("MongoDb connection error", err));


app.use('/api/rentals', rentalRoutes);
app.use('/api/scrape', scrapeRoutes);
app.use('/api/predict', predictionRoutes);

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})

