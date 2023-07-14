import Stripe from 'stripe';
import dotenv from 'dotenv';
import cartModel from '../models/Cart.mjs';

dotenv.config();

const stripe = new Stripe('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const url = `http://localhost:3000`;

const checkout = async (req, res, next) => {
  const items = await cartModel.getCart(req.body);

  const session = await stripe.checkout.sessions.create({
    line_items: items.map(item => ({
      price_data: {
        product_data: {
          name: item.name,
        },
        unit_amount: item.price,
        currency: 'usd',
      },
      quantity: item.quantity,
    })),
    mode: 'payment',
    payment_method_types: ['card'],
    success_url: url,
    cancel_url: url,
  });

  res.locals.redirect = session.url;

  return next();
};

// const checkout = async (req, res, _next) => {
//   const items = cartModel.getCart(res.body);

//   const session = await stripe.checkout.sessions.create({
//     line_items: items.map(item => ({
//       price_data: {
//         product_data: {
//           name: item.name,
//         },
//       },
//       price: item.price,
//       quantity: item.quantity,
//     })),
//     mode: 'cards',
//     success_url: url,
//     cancel_url: url,
//   });

//   res.redirect(303, session.url);
// };

export default {
  checkout,
};
