const express = require('express')
const app = express()

let saves = 0
const currencies = ['USD', 'EUR', 'GBP']

app.use(express.json())

// USD endpoint
app.get('/api/USD', (req, res) => {
    const { amount, currency } = req.query

    if (!currencies.includes(currency)) {
        return res.json({ message: 'Invalid currency' })
    }

    let dollar = 0;
    if (currency === currencies[2]) {
        dollar = amount * 1.2
    } else if (currency === currencies[1]) {
        dollar = amount * 1.3
    }
    res.json({ dollar })
});

// GBP endpoint
app.get('/api/GBP', (req, res) => {
    const { amount, currency } = req.query

    if (!currencies.includes(currency)) {
        return res.json({ message: 'Invalid currency' })
    }

    let pound = 0;
    if (currency === currencies[0]) {
        pound = amount * 0.77
    } else if (currency === currencies[2]) {
        pound = amount * 1.1
    }
    res.json({ pound })
});

// EUR endpoint
app.get('/api/EUR', (req, res) => {
    const { amount, currency } = req.query;

    if (!currencies.includes(currency)) {
        return res.json({ message: 'Invalid currency' })
    }

    let eur = 0;
    if (currency === currencies[0]) {
        eur = amount * 0.83
    } else if (currency === currencies[1]) {
        eur = amount * 0.91
    }
    res.json({ eur })
});

// Saves POST endpoint
app.post('/api/saves', (req, res) => {
    const { amount, currency } = req.body;

    if (!currencies.includes(currency)) {
        return res.json({ message: 'Invalid currency' })
    }

    if (currency === currencies[0]) {
        saves += amount * 0.77
    } else if (currency === currencies[1]) {
        saves += amount * 1.3
    } else {
        saves += amount;
    }

    res.json({ message: `Amount saved successfully`, saves })
});

// Saves GET endpoint
app.get('/api/saves', (req, res) => {
    const { currency } = req.query;
    let resSaves = saves

    if (!currencies.includes(currency)) {
        return res.json({ message: 'Invalid currency' })
    }

    if (currency === currencies[0]) {
        resSaves *= 0.77
    } else if (currency === currencies[1]) {
        resSaves *= 1.3
    }

    res.json({ resSaves })
});

// Export as serverless function
module.exports = createServer(app)