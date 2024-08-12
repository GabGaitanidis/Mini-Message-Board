const { PrismaClient, Prisma } = require("@prisma/client");

const prisma = new PrismaClient();

async function getMessages() {
  const messages = await prisma.msgs.findMany();
  return messages;
}
async function insertMessage(username, msg) {
  const message = await prisma.msgs.create({
    data: {
      username: username,
      msg: msg,
    },
  });
  return message;
}
module.exports = {
  getMessages,
  insertMessage,
};
