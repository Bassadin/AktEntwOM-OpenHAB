const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let mqtt = require('mqtt')
let client = mqtt.connect(
    'mqtt://hfu-dm.cloud.shiftr.io/',
    { clientId: "bastian_hfu" }
);

client.on('connect', () => {
    client.subscribe('hfu/dm/test', { qos: 2 });
    client.publish('hfu/dm/test', 'Hallo mqtt', { qos: 1, retain: true });
});

//Handle subscriptions
client.on('message', (topic, message, packet) => {
    // console.log("Topic:", topic);
    // console.log("Message:", message.toString()); //.toString weil Buffer
    // console.log("Packet:", packet);
    // client.end()
});

function askForChatMessage() {
    setTimeout(() => {
        handleChatStringEnter();
    }, 500);
}

function handleChatStringEnter() {
    readline.question('Send Message: ', (answer) => {
        handleChatMessageSend(answer);
    });
}

function handleChatMessageSend(messageString) {
    client.publish('hfu/dm/test', messageString, { qos: 1, retain: true });
    readline.close();
    askForChatMessage();
}

askForChatMessage();