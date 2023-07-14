import stripe from 'stripe';
import dotenv from 'dotenv';
import cartModel from '../models/Cart.mjs';

dotenv.config();

const url = `http://localhost:3000`;

const checkout = async (req, res, _next) => {
  const items = cartModel.getCart(res.body);

  const session = await stripe.checkout.sessions.create({
    line_items: items.map(item => ({
      price_data: {
        product_data: {
          name: item.name,
        },
      },
      price: item.price,
      quantity: item.quantity,
    })),
    mode: 'cards',
    success_url: url,
    cancel_url: url,
  });

  res.redirect(303, session.url);
};

export default {
  checkout,
};
