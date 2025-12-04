import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51SO37WDrkQfNrpnlFOqIv9fmP2JeEBJ3qx4fE7rWvNtgqtCqMQi0zoLkZuayDMKbZJnVaGJcqtm1qXHwGcGJse1100Bzkky46M',
);

export default stripePromise;
