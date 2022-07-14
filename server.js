const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))

app.use('/geometry', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "geometry-calculator.html"));
})

app.use('/unit-converter', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'unit-converter.html'))
})

app.listen(port ,() => console.log(`Server started on port ${port}`))