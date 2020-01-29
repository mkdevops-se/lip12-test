#!/usr/bin/env node

const container = require('rhea');

container.once('sendable', function(context) {
    context.sender.send({body: 'Hallå Tori'});
    context.connection.close();
});

const connection = container.connect({
    'host': 'localhost',
    'port': 5672,
    'username': 'admin',
    'password': 'admin'
});

connection.open_sender('mkdevops.lip12-test.queue.rhea-demo');
