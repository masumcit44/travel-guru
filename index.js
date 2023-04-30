const express = require('express')
const app = express()
const port = process.env.PORT || 4000;
const destination = require('./data/data.json')
const hotels = require('./data/hotels.json')
const cors =  require('cors')


app.use(cors())

app.get('/',(req,res)=>{
    res.send('travel guru running')
})

app.get('/destination',(req,res)=>{
    res.send(destination)
})
app.get('/destination/:id',(req,res)=>{
    const id = req.params.id
    const singleDestination = destination.find(des=> des.id == id )
    res.send(singleDestination)
})

app.get('/hotels/:location',(req,res)=>{
    const location = req.params.location;
    const hotel = hotels.filter(ht=>ht.location == location )
    res.send(hotel)
})



app.listen(port,()=>{
    console.log(`travel guru running on port : ${port}`);
})