const Cylon = require("cylon");
const { devices } = require("./config");

/**
 *
 * @param {Object} my
 * Receive a Cylon Robot object and turnOff all the LEDs
 */
const resetLeds = (my) => {
  handleLeds([0, 0, 0, 0, 0]);
};

/**
 *
 * @param {Array<Number>} leds
 * Create a robot with a set of LEDs and turnOn or Off depends the values received.
 */
const handleLeds = (leds = []) => {
  const robot = Cylon.robot({
    connections: { raspi: { adaptor: "raspi" } },
    devices,
    work: function (my) {
      leds.forEach((led, index) => {
        const deviceName = devices[index].name;

        led === 1
          ? my.devices[deviceName].turnOn()
          : my.devices[deviceName].turnOff();
      });
    },
  });

  robot.start();
};

module.exports = { handleLeds, resetLeds };
