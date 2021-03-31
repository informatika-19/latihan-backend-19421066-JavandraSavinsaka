const { Console } = require('console')
const express = require('express')
const app = express()
const bodyParser= require('body-parser')

app.use(bodyParser.json({
    extend: true,
    limit: '20mb'
}))

app.use(bodyParser.urlencoded({
    extend: true,
    limit: '20mb'
}))

app.get('/', (req, res)=>{
    res.send('<h1>hello world 1</h1>')

})

app.get('/profile/:username/:id', (req, res)=>{
    console.log(req.params)
    res.send('username = '+ req.params.username)
})

app.get('/daerah/:daerah', (req, res)=>{
    console.log(req.params)
    res.send('daerah anda = '+ req.params.daerah)
})

app.post('/register', (reg, res)=> {
    console.log(req.body)
    res.json(req.body)
})
app.listen(3000, () => {
    console.log('server started')
})