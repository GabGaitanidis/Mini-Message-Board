const pool = require("./pool");

async function getMessages() {
  const result = await pool.query(`
    SELECT id, username, msg, TO_CHAR(date, 'YYYY-MM-DD HH24:MI') AS date
    FROM msgs
    ORDER BY date DESC
  `);
  const messages = result.rows;
  return messages;
}
async function insertMessage(username, msg) {
  const query = "INSERT INTO msgs (username, msg) VALUES ($1, $2)";
  await pool.query(query, [username, msg]);
}

module.exports = {
  getMessages,
  insertMessage,
};
