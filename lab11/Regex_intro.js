var strings = [
	'1dssd wjdfkdjkd', //ok
	'dssd wjdfkdjkd', //not ok
	'1dssdwjdfkdjkd', // not ok

	'8dssdw jdfkdjkd', // ok

	'a	c',
	'a c',

];


// 2 words, separated by any space, first starting with digit
// var re = /[0-9][a-z][0-9]/i;
var re = /\w\s\w/;

strings.forEach((str)=>
	re.test(str) ?
	console.log(str+' -> match!') :
	console.log(str+'  -> NO match!')
)