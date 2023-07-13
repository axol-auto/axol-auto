import cartModel from '../models/Cart.mjs';

const syncCart = async (req, res, next) => {
  const result = await cartModel.syncCart(req.body);

  console.log(result);

  if (result.length === undefined) {
    return next({ message: { err: 'Cart not updated' } });
  }

  console.log('Cart updated');
  res.locals.cart = result;
  return next();
};

export default {
  syncCart,
};
