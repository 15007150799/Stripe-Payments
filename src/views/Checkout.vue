<template>
  <div class="checkout">
    <div @click="pay" class="btn">Checkout</div>
  </div>
</template>

<script src="https://js.stripe.com/v3/"></script>


<script>
import axios from "axios";

var stripe = Stripe(
  "pk_test_51HFvoCHbtH7bHxO6lwaNijl1HqHuepBSgiJBz9A59oersTedqno7NNMcLMsGyOsE5sfhOmuJRCLIGrjwqf2QZc9D006x7D4NGF"
);

export default {
  name: "Checkout",
  data() {
    return {
      session: ""
    };
  },
  methods: {
    pay() {
      let data = { type: "Conference", amount: 500, currency: "inr" };
      axios
        .get(
          "http://localhost:5000/stripe-learning/us-central1/checkoutSession",
          {
            params: {
              products: data
            }
          }
        )
        .then(response => {
          this.session = response.data;
          console.log(this.session);
          stripe
            .redirectToCheckout({
              sessionId: this.session.id
            })
            .then(function(result) {
              console.log(result);
            });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss">
@import "../scss/style";
</style>
