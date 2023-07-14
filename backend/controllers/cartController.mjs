import cartModel from '../models/Cart.mjs';

const syncCart = async (req, res, next) => {
  const result = await cartModel.syncCart(req.body);

  console.log(result);

  if (result === undefined) {
    return next({ message: { err: 'Cart not updated' } });
  }

  console.log('Cart updated');
  res.locals.cart = result;
  return next();
};

const getCart = async (req, res, next) => {
  const result = await cartModel.getCart(req.body);

  console.log(result);

  if (result === undefined) {
    return next({ message: { err: 'Error querying the database for cart' } });
  }

  res.locals.cart = result;
  return next();
};

export default {
  syncCart,
  getCart,
};
