const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000


// qzbAqjpRM4cK9rqm

async function main() {
    await mongoose.connect(process.env.DB_URL);
    // routes
    app.use('/', (req, res) => {
        res.send('this is my server')
    })
}

main().then( () => console.log("Mongodb connect successfully!")).catch(err => console.log(err))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})