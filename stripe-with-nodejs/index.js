require("dotenv").config();

const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/checkout", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Node.js and Express book",
          },
          unit_amount: 50 * 100,
        },
        quantity: 1,
      },
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Javascript book",
          },
          unit_amount: 70 * 100,
        },
        quantity: 10,
      },
    ],
    mode: "payment",
    success_url: `${process.env.BASE_URL}/complete?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.BASE_URL}/cancel`,
  });
  res.redirect(session.url);
});

app.get("/complete", async (req, res) => {
  const result = Promise.all([
    stripe.checkout.sessions.retrieve(req.query.session_id, {
      expand: ["payment_intent.payment_method"],
    }),
    stripe.checkout.sessions.listLineItems(req.query.session_id),
  ]);
  // const lineItems = await stripe.checkout.sessions.listLineItems(
  //   req.query.session_id
  // );
  // console.log(lineItems);

  // console.log(lineItem);

  console.log(JSON.stringify(result));
  res.send("Your payment has been successfully processed");
});

app.get("/cancel", (req, res) => {
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
