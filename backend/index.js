const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config()

const cors = require('cors')
const app = express()


//middleware
app.use(express.json())

app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}))

//routes
const bookRoute = require("./src/books/book.route")
const orderRoute = require('./src/orders/order.route')
const userRoute = require('./src/users/user.route') 

app.use("/api/books", bookRoute)
app.use("/api/orders", orderRoute)
app.use("/api/auth", userRoute)

const port = process.env.PORT || 3000

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