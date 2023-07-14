import query from './query.mjs';

// items = [{itemId: int, quantity: int}]
const syncCart = async ({ userId, items }) => {
  await query('delete from carts where user_id = $1', [userId]);

  for (const item of items) {
    await query('insert into carts values ($1, $2, $3)', [
      userId,
      item.itemId,
      item.quantity,
    ]);
  }

  const sql =
    'select i.id, i.name, c.quantity, i.price * c.quantity as price, i.imageurl from carts c join inventory i on c.item_id = i.id where c.user_id = $1';

  const results = await query(sql, [userId]);

  return results.rows;
};

const getCart = async ({ userId }) => {
  const result = await query('select * from carts where user_id = $1', [
    userId,
  ]);

  return result.rows;
};

export default {
  syncCart,
  getCart,
};
