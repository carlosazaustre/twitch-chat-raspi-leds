/**
 * @param {string} message
 * @return An array with two parameters: The command chat and the arguments.
 */
const getCommand = (message = "") => {
  const parsedMessage = message.slice(1).toLowerCase();
  try {
    return parsedMessage.split(" ");
  } catch (err) {
    console.error(err);
    return parsedMessage;
  }
};

/**
 * @param {Array<string>} args
 * @return An array of integers with '0' and '1' representing the LEDs
 */
const getLeds = (args = []) => {
  return args.split("").map((c) => parseInt(c));
};

module.exports = {
  getCommand,
  getLeds,
};
