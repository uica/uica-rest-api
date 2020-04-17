const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const makePayment = async (req, res) => {
  const { token, total, description, billingInfo } = req.body;
  const { paid, status, receipt_url } = await stripe.customers
    .create({
      email: billingInfo.email,
      source: token.id,
    })
    .then(
      async (customer) =>
        await stripe.charges
          .create({
            amount: total * 100,
            description,
            currency: "usd",
            customer: customer.id,
          })
          .catch((error) => {
            return res.json({ success: false, error }).status(400);
          })
    )
    .catch((error) => {
      return res.json({ success: false, error }).status(400);
    });

  if (paid && status === "succeeded") {
    return res.json({ success: true, receipt_url }).status(200);
  }
};

module.exports = makePayment;
