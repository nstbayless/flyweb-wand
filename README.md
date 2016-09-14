## Minimal Express/FlyWeb Hello World example

Flyweb: https://flyweb.github.io/

The only files changed from a default express v4.13.1 generated project are:
- bin/www
- package.json

Adapted from https://github.com/flyweb/examples/tree/master/flyweb-quadcopter

### To get up and running

(on Ubuntu)

```
sudo apt-get install libavahi-compat-libdnssd-dev
npm install
npm start

```

No errors should be thrown during installation. See http://stackoverflow.com/a/28536113 if there are errors installing mdns.

You can connect to the server with FlyWeb. 
