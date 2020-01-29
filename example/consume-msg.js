#!/usr/bin/env node

const container = require('rhea');

container.on('message', function(context) {
    console.log(context.message.body);
    context.connection.close();
});

const connection = container.connect({
    'host': 'localhost',
    'port': 5672,
    'username': 'admin',
    'password': 'admin'
});

connection.open_receiver('mkdevops.lip12-test.queue.rhea-demo');
