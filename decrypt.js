#!/usr/bin/env node
console.log("Let's Decrypt Something");
console.log("");
var crypto = require('crypto');
var program = require('commander');
var iv = 123132135434;

program
.option('-e, --encryptedtext <encryptedtext>', 'The text that you want to decrypt')
.option('-k, --key <key>', 'The secret to unlock the text')
.parse(process.argv);

//  Uncomment the two lines below if you want to see what is passed before it gets decrypted
//console.log(program.encryptedtext);
//console.log(program.key);
var key = crypto.createHash("sha256").update(program.key, "hex").digest();
var decipher = crypto.createDecipher("aes-256-cbc", key, iv);

var msg = [];

msg.push(decipher.update(program.encryptedtext, "hex"));
msg.push(decipher.final("utf8"));
console.log(msg.join(""));

