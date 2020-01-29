
`lip12-test`
============

Getting started in Bash, with Node 12 installed:

    git clone git@github.com:mkdevops-se/lip12-test.git
    cd lip12-test/
    npm install


Run the application:

    DEBUG=lip12-test:* npm start


Open Chrome on http://localhost:3000


ActiveMQ Examples
-----------------

Start ActiveMQ on localhost.  `# TODO(@vtepliuk): Hur!?`

Publish a message to the `mkdevops.lip12-test.queue.rhea-demo` queue:

    node ./example/publish-msg.js


Consume the message back from the same queue:

    node ./example/consume-msg.js

