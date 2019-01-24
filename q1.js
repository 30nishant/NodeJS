let fs = require('fs');
let parse = require('xml-parser');
let inspect = require('util').inspect;
let events=require('events');
let out=new events();

let xml=fs.readFileSync('./XMLCode.xml', 'utf8',function(err,data){
    if(err) return console.error(err);
});

out.on('end',function(){
    let obj = parse(xml);
    console.log(inspect(obj, { colors: true, depth: Infinity }));
});
out.emit('end');
