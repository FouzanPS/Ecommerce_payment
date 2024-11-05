import express from "express";
import paypal from './services/paypal.js'

const app = express();
const PORT = 3000

app.get('/', (req, res) => {
    res.send("Welcome to my server!")
})

app.listen(PORT,() => {
    console.log("Server running");
})