import axios from "axios";
import dotenv from "dotenv";

dotenv.config();



async function generateAccessToken(){
    const response = await axios({
        url: process.env.PAYPAL_URL + '/v1/oauth2/token',
        method: 'POST',
        data: 'grant_type=client_credentials',
        auth: {
            username: process.env.PAYPAL_CLIENT,
            password: process.env.PAYPAL_SECRET
        }
    })
    return response.data.access_token
}

async function createOrder(product, price) {

    if (!product || !price) {
        throw new Error("Product name and price must be provided.");
    }
    const orderData = {
        intent: "CAPTURE",
        purchase_units: [{
            reference_id: '12345',  // You can set a custom reference ID here
            description: product,  // Product name
            amount: {
                currency_code: "USD",  // Make sure currency is set properly
                value: price.toString(),  // Ensure price is a string
                breakdown: {
                    item_total: {
                        currency_code: "USD",
                        value: price.toString(),  // Ensure item_total value is correct
                    }
                }
            },
            items: [{
                name: product,  // Product name
                unit_amount: {
                    currency_code: "USD",  // Currency type
                    value: price.toString(),  // Product price
                },
                quantity: "1",  // Quantity of the product being purchased
            }]
        }],
        application_context: {
            return_url: 'http://localhost:3000/complete-order',  // Correct return URL
            cancel_url: 'http://localhost:3000/cancel-order',  // Correct cancel URL
            user_action: 'PAY_NOW',  // You can modify this if needed
        }
    };
        

    const accessToken = await generateAccessToken();
    console.log(accessToken);

    try {
        const response = await axios.post(`${process.env.PAYPAL_URL}/v2/checkout/orders`, orderData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            }
        });
    
        console.log("PayPal Response: ", response.data);  // Log the PayPal response
    
        // Assuming the response contains links to approve the payment
        const approvalLink = response.data.links.find(link => link.rel === 'approve').href;
        return approvalLink;
    
    } catch (error) {
        if (error.response) {
            console.error("Error Response from PayPal: ", error.response.data);  // Log the full error response
            console.error("Error Status: ", error.response.status);  // Log the error status
        } else {
            console.error("Request Error: ", error.message);  // Log the request error
        }
        res.status(500).send('Error processing payment: ' + error.message);
    }
    

    console.log(order)
    // Extract the approval link for the frontend to redirect the user
    // const approvalLink = response.data.links.find(link => link.rel === 'approve').href;
    // return approvalLink;

    }

async function capturePayment(orderId){
    const accessToken = await generateAccessToken()
    const response = await axios({
        url: process.env.PAYPAL_URL + `/v2/checkout/orders/${orderId}/capture`,
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        },

    })
    return response.data
}


export {generateAccessToken, createOrder, capturePayment}