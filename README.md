# twitch-chat-leds

Control Raspberry Pi LEDs connected to GPIO via Twitch Chat.

Tested on Raspberry Pi v2 Model B (2012, ARMv6)

## Installation

Clone this repository and change the following values in `config/index.js`:

```js
module.exports = {
  options: {
    channels: ['YOUR_TWITCH_CHANNEL'],
  },
}
```

Also, you can change the LEDs positions in your Raspberry Pi GPIO pines:

```js
{
  devices: [
    { name: 'led0', driver: 'led', pin: 12 }, //GPIO pin #18
    { name: 'led1', driver: 'led', pin: 16 }, //GPIO pin #23
    { name: 'led2', driver: 'led', pin: 18 }, //GPIO pin #24
    { name: 'led3', driver: 'led', pin: 11 }, //GPIO pin #17
    { name: 'led4', driver: 'led', pin: 15 }, //GPIO pin #22
  ]
}
```

## Usage

In your twitch chat, write down the following command:

```
> !led 11111
```

It will turn on the 5 LEDs connected in your Raspberry PI

```
> !led 0
> !led 00000
```

It will turn off the all LEDs.

```
> !led 10001
```

It will turn on the first and last LED.
Play with them!

## License

MIT &copy; Carlos Azaustre
