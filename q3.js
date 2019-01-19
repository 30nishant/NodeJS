let request = require('request');
let fs = require('fs');
let r = require('events').EventEmitter;
let events=require('events');
let e=new events();

e.on('end',function(){
    console.log("I am done!");
    request('http://www.google.com/').pipe(fs.createWriteStream('google.html'));

});
e.emit('end');