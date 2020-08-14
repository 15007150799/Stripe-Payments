const functions = require("firebase-functions");
const stripe = require("stripe")(
  "sk_test_51HFvoCHbtH7bHxO6BzVLXLrE1t1zXHkEMKglYnliBwgA3pFzMiRPgzHxp9L4h7KHYM9YYYpkFyOPjwHPUxoqfRBk00cvBwGNS3"
);
const cors = require("cors")({ origin: true });

exports.checkoutSession = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    stripe.checkout.sessions.create(
      {
        success_url: "https://example.com/success",
        cancel_url: "https://example.com/cancel",
        payment_method_types: ["card"],
        line_items: [
          {
            name: "Shirt",
            description: "Please work",
            amount: 1500,
            currency: "inr",
            quantity: 2,
          },
        ],
      },
      function(err, session) {
        console.log(err);
        response.send(session);
      }
    );
  });
});
