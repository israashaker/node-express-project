const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => res.send('Home Page'))
app.get('/profile', (req, res) => res.send('Profile Page'))
app.get('/img',(req,res)=>{
    res.sendFile(path.join(__dirname,'./assets/1.jpg'));
})
app.get('/img/:name',(req,res)=>{
    res.sendFile(path.join(__dirname,'./assets/',req.params.name+'.jpg'));
})
app.listen(3500, () => console.log(`Server started on port 3500!`))