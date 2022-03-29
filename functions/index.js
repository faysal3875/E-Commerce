const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const s =
  "sk_test_51Kcw36C1No3hi62OC8BYdlY2x80pbqTtXLgx3Ik3LlFNBbTVvniDYcTsUPDapDVS0ebt25qHIU8oSC4HmB9Uqup200drOTrJCx";
const stripe = require("stripe")(s);
//api
//-app config
const app = express();
//-middlewares
app.use(cors({ origin: true }));
app.use(express.json());
//-api routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request Received", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//-listen command
exports.api = functions.https.onRequest(app);
