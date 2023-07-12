import query, { transaction } from './query.mjs';

// create an order and return the order ID
const createOrderHeader = ({ userId, totalPrice, tracking }) => {
  const sql =
    'insert into orders (user_id, price, tracking) values ($1, $2, $3) returning id';
  const params = [userId, totalPrice, tracking];
  return { sql, params };
};

const createOrderDetails = ({ itemId, quantity, price }) => {
  const sql =
    'insert into order_details (item_id, quantity, price, order_id) values ($1, $2, $3, $4)';
  const params = [itemId, quantity, price];
  return { sql, params };
};

const createOrder = async params => {
  const result = await transaction([
    createOrderHeader(params),
    createOrderDetails(params),
  ]);
  return result;
};

const cancelOrder = async orderId => {
  const sql = 'update orders set status = $2 where id = $1';
  const result = await query(sql, [orderId, 'Cancelled']);
  return result.rowCount;
};

export default {
  createOrder,
  cancelOrder,
};
