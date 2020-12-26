const { client, handleMessage } = require('./client')

client.connect().catch(console.error)
client.on('message', handleMessage)
