var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://test.mosquitto.org')

client.on('connect', () => {
    client.subscribe('hfu/dm/test', { qos: 2 });
    client.publish('hfu/dm/test', 'Hallo mqtt', { qos: 1, retain: true });
})

//Handle subscriptions
client.on('message', (topic, message, packet) => {
    console.log("Topic:", topic);
    console.log("Message:", message.toString()); //.toString weil Buffer
    console.log("Packet:", packet);
    client.end()
})