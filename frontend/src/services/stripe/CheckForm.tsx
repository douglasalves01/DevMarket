import { useState, useEffect } from 'react';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const CHAVE_STRIPE: string = import.meta.env.VITE_CHAVE_STRIPE ?? '';

export const CheckoutForm = () => {
  const [clientSecret, setClientSecret] = useState('');
  const stripePromise = loadStripe(CHAVE_STRIPE);
  useEffect(() => {
    // Create a Checkout Session as soon as the page loads
    fetch('http://localhost:3000/create-checkout-session', {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  return (
    <div id="checkout" style={{ maxWidth: '400px', margin: '0 auto' }}>
      {clientSecret && (
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{ clientSecret }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      )}
    </div>
  );
};
