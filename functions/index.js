const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51IoahTDUpxReBCoPbHxdCL5qVHGUn58f52geyqCTiL5w5vFh1JcuUSdsqRxIKILVkiHDitc5X7yd58RUFfjT9ZW400KAvqwbz6')

// - API version

// - App config
const app = express();


// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API Route
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved!!! for this amount', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "CAD",
    });

    // Ok everything went good - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen Command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/clone-e09ab/us-central1/api