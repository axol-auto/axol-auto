import query from './query.mjs';

// create an order and return the order ID

// create an order with all items in the cart
// return the order ID
// clear the cart

const createOrder = async ({ userId }) => {
  let sql = `insert into orders (user_id, price, tracking)
  select user_id, sum(c.quantity * i.price), '' 
  from carts c, inventory i
  where c.user_id = $1 and c.item_id = i.id
  group by c.user_id
  returning id, price`;

  let result = await query(sql, [userId]);

  sql = `
  insert into order_details (order_id, item_id, quantity, price)
  select $1, c.item_id, c.quantity, i.price
  from carts c, inventory i
  where c.user_id = $2 and c.item_id = i.id
  returning order_id
  `;

  console.log(result);

  result = await query(sql, [result.rows?.[0].id, userId]);

  return result.rows?.[0]?.order_id;
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
