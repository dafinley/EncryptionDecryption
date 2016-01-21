#!/usr/bin/env node
console.log("Let's Encrypt Something");
console.log("");
var crypto = require('crypto');
var program = require('commander');
var iv = 123132135434;

program
.option('-p, --plaintext <plaintext>', 'The text that you want to hide')
.option('-k, --key <key>', 'The secret to lock the text')
.parse(process.argv);

//  Uncomment the two lines below if you want to see what is passed before it gets hashed
//  console.log('Plaintext: %s Secret: %s file: %s',
//     program.plaintext, program.secret, file);

var key = crypto.createHash("sha256").update(program.key, "hex").digest();
var cipher = crypto.createCipher("aes-256-cbc", key, iv);

var encrypted = cipher.update(program.plaintext.toString('utf8'), "utf8", "hex") + cipher.final("hex");

console.log('Copy the Encrypted text between the dashes');
console.log("Encrypted: -%s-", encrypted);
