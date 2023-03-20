const { default: axios } = require('axios')
const cors = require('cors')
const express = require('express')
const app = express()
const port = 3001
if (process.env.NODE_ENV != 'production'){
    require('dotenv').config()
}

app.use(cors())

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/berita', async (req, res) => {
    const beritaApi = process.env.BERITA_API
    const berita = await axios({
        method: 'get',
        url: `https://newsapi.org/v2/top-headlines?country=id&apiKey=${beritaApi}`
    })
    res.status(200).json(berita.data.articles)
})

app.listen(port, () => {
    console.log("App on port " + port)
})

module.exports = app