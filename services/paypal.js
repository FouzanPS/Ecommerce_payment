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
    console.log(response.data)
}

export default generateAccessToken()