const { getCommand, getLeds } = require('.')

describe('>> helpers', () => {
  describe('getCommand', () => {
    test('should return and array with the command name and the arguments', () => {
      const message = '!led 1010'
      const expected = ['led', '1010']

      const [command, args] = getCommand(message)

      expect(command).toEqual(expected[0])
      expect(args).toEqual(expected[1])
    })

    test('should continue the execution if the command if empty', () => {
      const message = '!led'
      const expected = ['led']

      expect(getCommand(message)).toEqual(expected)
    })
  })

  describe('getLeds', () => {
    test("should return an array of '1' and '0' values representing the LEDs", () => {
      const args = '1010'
      const expected = [1, 0, 1, 0]

      expect(getLeds(args)).toEqual(expected)
    })
  })
})
