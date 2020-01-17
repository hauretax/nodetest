var http =require('http');
var url = require('url');
var em = require('events').EventEmitter;
var test = require("./modul");
var markdown = require('markdown').markdown;

var markdown = require('markdown').markdown;

console.log(markdown.toHTML('Un paragraphe en **markdown** !'));

var jeu = new em();

jeu.on('gameover', function(){
	test.direBonjour();
});
var serv = http.createServer(function(req, res){
	var u = url.parse(req.url).pathname;
	res.writeHead(200,{"content-Type": "text/html"});
	res.write(u);
	res.end();
	console.log(u);	
})
							serv.on('close', function(){
								test.direByeBye();
							})
serv.listen(8080);
jeu.emit('gameover', 'vous avez perdu !',50);
serv.close();