const express = require('express')
const app = express()

let saves = 0
const currencies = ['dollar', 'pound', 'eur']

app.use(express.json())

app.get('/dollar',(req, res) => {
    const { amount, currency } = req.query

    if(!currencies.includes(currency)){
        return res.json({message: 'Invalid currency'})
    }

    let dollar = 0
    if(currency === currencies[2]){
        dollar = amount * 1.2
    }else if(currency === currencies[1]){
        dollar = amount * 1.3
    }
    res.json({dollar})
})

app.get('/pound', (req, res) => {
    const { amount, currency } = req.query

    if(!currencies.includes(currency)){
        return res.json({message: 'Invalid currency'})
    }

    let pound = 0
    if(currency === currencies[0]){
        pound = amount * 0.77
    }else if(currency === currencies[2]){
        pound = amount * 1.1
    }
    res.json({pound})
})

app.get('/eur', (req, res) => {
    const { amount, currency } = req.query

    if(!currencies.includes(currency)){
        return res.json({message: 'Invalid currency'})
    }

    let eur = 0
    if(currency === currencies[0]){
        eur = amount * 0.83
    }else if(currency === currencies[1]){
        eur = amount * 0.91
    }
    res.json({eur})
})

app.post('/saves', (req, res) => {
    const { amount, currency } = req.body

    if(!currencies.includes(currency)){
        return res.json({message: 'Invalid currency'})
    }

    if(currency === currencies[0]){
        saves += amount * 0.77
    }else if(currency === currencies[1]){
        saves += amount * 1.3
    }else{
        saves += amount
    }

    res.json("Amount save with success")
})

app.get('/saves', (req, res) => {
    const { currency } = req.query
    let resSaves = saves
    console.log({currency})
    console.log({saves})
    if(!currencies.includes(currency)){
        return res.json({message: 'Invalid currency'})
    }

    if(currency === currencies[0]){
        resSaves *= 0.77
    }else if(currency === currencies[1]){
        resSaves *= 1.3
    }
    console.log({resSaves})
    res.json({resSaves})
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})