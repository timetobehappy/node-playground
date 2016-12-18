const querystring = require('querystring');
const path = require('path');

process.on(`uncaughtException`, console.error);

//const weirdoString = `name:Sophie;shape:fox;condition:new`;
const weirdoString = `prdNo=3&blockNo=3&blockType=G3`;
//const result = querystring.parse(weirdoString, `;`, `:`);
const result = querystring.parse(weirdoString);

console.log(typeof result);
console.log(result);
console.dir(result,{colors:true});
console.log(module.filename);
console.log(path.parse(module.filename).base);
console.log(path.parse(module.filename).name);
console.log(path.parse(module.filename).ext);
