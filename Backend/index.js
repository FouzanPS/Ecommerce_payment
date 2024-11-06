import express from "express";
import { generateAccessToken, createOrder, capturePayment } from "./services/paypal.js";

const app = express();
const PORT = 3000

app.get('/', (req, res) => {
    res.send("Home Page")
})

app.post('/pay', async (req, res) => {
    try {
        const url = await createOrder(); // Await the async function
        res.send(`<a href="${url}">Click here to complete the payment</a>`); // Send a clickable link
    } catch (err) {
        res.send('Error: ' + err);
    }
});


app.get('/complete-order', async (req,res) => {
    try{
        capturePayment(req.query.token)
        res.send("Order Placed!")
    }
    catch(err){
        res.send('Error: ' + err)
    }
})

app.get('/cancel-order', (req,res) => {
    res.send("Order Cancelled!")
})

app.listen(PORT,() => {
    console.log("Server running");
})