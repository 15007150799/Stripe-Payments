<template>
  <div class="checkout">
    <div @click="pay" class="btn">Checkout</div>
  </div>
</template>

<script src="https://js.stripe.com/v3/"></script>


<script>
import axios from 'axios';

var stripe = Stripe(
  "pk_test_51HFvoCHbtH7bHxO6lwaNijl1HqHuepBSgiJBz9A59oersTedqno7NNMcLMsGyOsE5sfhOmuJRCLIGrjwqf2QZc9D006x7D4NGF"
);

export default {
  name: "Checkout",
  data() {
    return {
        session: ''
    };
  },
  methods: {
    pay() {      
      stripe
        .redirectToCheckout({
          // Make the id field from the Checkout Session creation API response
          // available to this file, so you can provide it as argument here
          // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
          sessionId: this.session.id
        })
        .then(function(result) {
            console.log(result);
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `result.error.message`.
        });
    }
  },
  created() {
      axios.post('https://us-central1-stripe-learning.cloudfunctions.net/checkoutSession').then(response => {
          this.session = response.data;
      }).catch(error => {
          console.log(error);
      });
  }
};
</script>

<style lang="scss" scoped>
.checkout {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  .btn {
    background: #1c8d76;
    color: white;
    padding: 1rem 3rem;
    border-radius: 0.8rem;
    cursor: pointer;
    transition: all 0.3s ease-in;
  }
  .btn:hover {
    background: darken(#1c8d76, 5%);
  }
  .btn:active {
    transform: scale(0.9);
  }
}
</style>

