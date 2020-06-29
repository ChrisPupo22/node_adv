const express = require('express'); 
const shortId = require('shortid'); 

const server = express(); 

server.use(express.json())

const PORT = 5000; 

const channels = [];
const lessons = [];

server.get('/', (req, res) => {
    res.json({ hello: "world" })
}); 


server.post('/api/channels', (req,res) => {
    const channelInfo = req.body; 
    channelInfo.id = shortId.generate(); 
    channels.push(channelInfo)
    res.status(201).json(channelInfo)
}); 

server.listen(5000, () => {
    console.log(`this is the port you're working on ${PORT}`)
});