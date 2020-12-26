const { client, handleMessage } = require('./src/client')

client.connect().catch(console.error)
client.on('message', handleMessage)
