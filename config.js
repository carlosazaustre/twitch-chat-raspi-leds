module.exports = {
  options: {
    channels: ["carlosazaustre"],
  },
  devices: [
    { name: "led0", driver: "led", pin: 12 },
    { name: "led1", driver: "led", pin: 16 },
    { name: "led2", driver: "led", pin: 18 },
    { name: "led3", driver: "led", pin: 11 },
    { name: "led4", driver: "led", pin: 15 },
  ],
};
