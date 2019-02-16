require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const port = process.env.PORT || 8000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
	res.send('Chao Xin!!')
})

app.listen(port, () =>
	console.log(`app is running on port ${port}`)
)