const express = require('express'); 
const shortId = require('shortid'); 

const server = express(); 

server.use(express.json())

const PORT = 5000; 

let channels = [];
let lessons = [];

server.get('/', (req, res) => {
    res.status(200).json(channels)
    
}); 


server.post('/api/channels', (req, res) => {
    const channelInfo = req.body; 
    channelInfo.id = shortId.generate(); 
    channels.push(channelInfo)
    res.status(201).json(channelInfo)
}); 


server.post('/api/lessons', (req, res) => {
    const lessonInfo = req.body; 
    lessonInfo.id = shortId.generate(); 
    lessons.push(lessonInfo)
    res.status(201).json(lessonInfo)
})

server.get('/api/lesson-info', (req, res) => {
    res.status(200).json(lessons)
})

server.delete('/api/channels/:id', (req, res) => {
    const { id } = req.params; 
    const deleted = channels.find(channel => channel.id === id)

    if (deleted) {
        channels = channels.filter(channel => channel.id !== id)
        res.status(200).json({message: `channel has been deleted`})
    } else {
        res.status(404).json({message: "Channel you are looking for doesn't exist..."})
    }
}) 

server.listen(5000, () => {
    console.log(`this is the port you're working on ${PORT}`)
});