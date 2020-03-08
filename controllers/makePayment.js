const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const makePayment = async (req, res) => {
  const { token, total, description, billingInfo } = req.body;
  const { paid, status, receipt_url } = await stripe.customers
    .create({
      email: billingInfo.email,
      source: token.id
    })
    .then(customer =>
      stripe.charges.create({
        amount: total * 100,
        description,
        currency: "usd",
        customer: customer.id
      })
    );

  if (paid && status === "succeeded") {
    res.send({ success: true, receipt_url }).status(200);
  } else {
    res.send({ success: false }).status(400);
  }
};

module.exports = makePayment;
