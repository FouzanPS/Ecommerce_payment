import express from "express";
import { generateAccessToken, createOrder, capturePayment } from "./services/paypal.js";
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(express.json()); // To parse JSON request bodies

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.post('/pay', async (req, res) => {
    try {
        console.log("price")
        const { product, price } = req.body;
        console.log('Product:', product);
        console.log('Price:', price);

        if (!product || !price) {
            return res.status(400).send('Product and price are required');
        }

        // Only call createOrder here when product and price are provided
        const approvalLink = await createOrder(product, price); // Call the modified createOrder function
        return res.json({ approvalLink });
    } catch (err) {
        console.error('Error in /pay:', err);
        res.status(500).send('Error processing payment: ' + err.message);
    }
});

app.get('/complete-order', async (req, res) => {
    try {
        await capturePayment(req.query.token);
        res.send("Order Placed!");
    } catch (err) {
        res.status(500).send('Error completing order: ' + err.message);
    }
});

app.get('/cancel-order', (req, res) => {
    res.send("Order Cancelled!");
});

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
