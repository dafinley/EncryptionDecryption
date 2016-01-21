#!/usr/bin/env node
console.log("Let's Make a Hash");
console.log("");
var crypto = require('crypto');
var program = require('commander');

program
.arguments('<file>')
.option('-p, --plaintext <plaintext>', 'The text that you want to hide')
.option('-s, --secret <secret>', 'The secret needed to lock the text')
.action(function(file) {

//  Uncomment the two lines below if you want to see what is passed before it gets hashed
//  console.log('Plaintext: %s Secret: %s file: %s',
//     program.plaintext, program.secret, file);

  var hash = crypto.createHmac('sha1', program.secret).update(program.plaintext).digest('hex');
console.log(hash);

})
.parse(process.argv);
