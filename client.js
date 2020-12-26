const tmi = require("tmi.js");

const config = require("./config");
const { getCommand, getLeds } = require("./helpers");

const debug = process.env.NODE_ENV;
const commands = {
  LED: "led",
};

const client = new tmi.Client({
  options: { debug },
  connection: {
    secure: true,
    reconnect: true,
  },
  ...config,
});

const handleMessage = (channel, tags, message, self) => {
  if (self || !message.startsWith("!")) return;

  const [command, args] = getCommand(message);
  if (command === commands.LED && args !== undefined) {
    const leds = getLeds(args);
    leds.forEach((led) => console.log(led));
  }
  return;
};

module.exports = { client, handleMessage };
