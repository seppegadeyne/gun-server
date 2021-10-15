const Gun = require('gun')
const express = require('express')
const app = express()
const port = 3018

app.use(Gun.serve)

const server = app.listen(port, () => {
    console.log(`GUN app listening at http://localhost:${port}`)
})

Gun({ web: server})