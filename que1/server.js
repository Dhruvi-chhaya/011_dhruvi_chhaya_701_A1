const express = require('express')
const app = express()
const port = 7000

app.use(express.static('public'))
app.get('/gethello', (req, res) => res.send('Hello NodeJS!'))
app.listen(port, () => console.log(`Server Running on poer ${port}!`))