let mqtt = require('mqtt');
let client = mqtt.connect('mqtt://hfu-dm:1234@hfu-dm.cloud.shiftr.io', { clientId: "bastian_hfu" });

client.on('connect', () => {
    console.log("Connected!");
    client.subscribe('hfu/dm/test', { qos: 0 });

    console.log("Publishing message...");
    client.publish('hfu/dm/test', "Hallo MQTT!", { qos: 0, retain: false });

});

//Handle subscriptions
client.on('message', (topic, message, packet) => {
    console.log(`Received message "${message.toString()}" on subscribed topic "${topic}".`); //.toString weil Buffer
});