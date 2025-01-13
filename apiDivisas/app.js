const express = require('express')
const app = express()

let saves = 0

app.use(express.json())

app.get('/', (req, res) => {
    res.json({message: 'Success'})
})

app.get('/dollar',(req, res) => {
    const { amount, currency } = req.query
    console.log({amount, currency})
    let dollar = 0
    if(currency === 'eur'){
        dollar = amount * 1.2
    }else if(currency === 'pound'){
        dollar = amount * 1.3
    }
    res.json({dollar})
})

app.get('/pound', (req, res) => {
    const { amount, currency } = req.query
    let pound = 0
    if(currency === 'dollar'){
        pound = amount * 0.77
    }else if(currency === 'eur'){
        pound = amount * 1.1
    }
    res.json({pound})
})

app.get('/eur', (req, res) => {
    const { amount, currency } = req.query
    let eur = 0
    if(currency === 'dollar'){
        eur = amount * 0.83
    }else if(currency === 'pound'){
        eur = amount * 0.91
    }
    res.json({eur})
})

app.post('/saves', (req, res) => {
    const {amount} = req.body
    saves += amount
    console.log("Amount save with success")
})

app.get('/saves', (req, res) => {
    res.json({saves})
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})