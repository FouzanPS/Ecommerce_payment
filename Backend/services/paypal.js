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

async function createOrder(){
    const accessToken = await generateAccessToken();

    const response = await axios({
        url: process.env.PAYPAL_URL + '/v2/checkout/orders',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        },
        data: JSON.stringify({
            "intent": "CAPTURE",
            purchase_units: [{
                items: [{
                    name: "Product Name",
                    description: "Product Desc",
                    quantity: 1,
                    unit_amount: {
                        currency_code: 'USD',
                        value: '100.0'
                    }
                }],
                amount: {
                    currency_code: 'USD',
                    value: '100.0',
                    breakdown:{
                        item_total: {
                            currency_code: 'USD',
                            value: '100.0'
                        }
                    }
                }
            }],
            application_context: {
                return_url:  process.env.BASE_URL + '/complete-order',
                cancel_url:  process.env.BASE_URL + '/cancel-order',
                user_action: 'PAY_NOW'
            }
        })
    })
    const approveLink = response.data.links.find(link => link.rel == 'approve').href
    console.log(approveLink)
    return approveLink
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

createOrder().catch(error => {
    console.error('Error creating order:', error);})

export {generateAccessToken, createOrder, capturePayment}