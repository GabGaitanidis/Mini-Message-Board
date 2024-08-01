const client = require("./pool");

async function getMessages() {
  const result = await client.query(`
    SELECT id, username, msg, TO_CHAR(date, 'YYYY-MM-DD HH24:MI') AS date
    FROM msgs
    ORDER BY date 
  `);
  const messages = result.rows;
  return messages;
}
async function insertMessage(username, msg) {
  const query = "INSERT INTO msgs (username, msg) VALUES ($1, $2)";
  await client.query(query, [username, msg]);
}

module.exports = {
  getMessages,
  insertMessage,
};
