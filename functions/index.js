const functions = require("firebase-functions");
const stripe = require("stripe")(
  "sk_test_51HFvoCHbtH7bHxO6BzVLXLrE1t1zXHkEMKglYnliBwgA3pFzMiRPgzHxp9L4h7KHYM9YYYpkFyOPjwHPUxoqfRBk00cvBwGNS3"
);
const cors = require("cors")({ origin: true });

exports.checkoutSession = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    let myProducts = request.query.products;
    myProducts = Object.entries(JSON.parse(myProducts));
    let finalData = [
      {
        name: myProducts[0][1],
        description: "2nd World Conference On Advances in COVID-19",
        amount: parseFloat(myProducts[1][1] * 100),
        currency: myProducts[2][1],
        quantity: 1,
      },
    ];
    stripe.checkout.sessions.create(
      {
        success_url: "https://example.com/success",
        cancel_url: "https://example.com/cancel",
        payment_method_types: ["card"],
        line_items: finalData,
      },
      function(err, session) {
        console.log(err);
        response.send(session);
      }
    );
  });
});
