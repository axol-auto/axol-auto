import orderModel from '../models/Order.mjs';

const createOrder = async (req, res, next) => {
  // console.log(req.body);
  const result = await orderModel.createOrder(req.body);

  // if (result.filter(e => e.rowCount > 0).length < 2)
  //   return next({ message: { err: 'Failed to create order' } });

  // res.locals.orderId = result[0].rows[0].id;

  if (result) {
    res.locals.orderId = result;
    return next();
  }

  return next({ message: { err: 'Error creating order' } });
};

const cancelOrder = async (req, res, next) => {
  const result = await orderModel.cancelOrder(req.body.orderId);

  if (result === undefined) {
    return next({ message: { err: 'Failed to cancel order' } });
  }

  if (result === 0) {
    return next({ message: { err: "Couldn't find order" } });
  }

  return next();
};

export default {
  createOrder,
  cancelOrder,
};
