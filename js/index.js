
const express = require('express');
var cook = require('cookie-parser')
 
const app = express();
app.use(cook()) 

function parseCookies (request) {
    var list = {},
        rc = request.headers.cookie;

    rc && rc.split(';').forEach(function( cookie ) {
        var parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });

    return list;
}

app.get('/cook/:add', (req, res) =>{
	res.cookie(req.params.add, "liste").send('cookie set');
});
app.get('/del/:del', (req, res) =>{
	//console.log(req.session);
	res.clearCookie(req.params.del).send('cookie kill');
});

app.get('/:coucou', (req, res) => {
	var noms = ['un', 'deux','trois']
	res.render('vue.ejs', {test: req.params.coucou, noms: noms});
});
app.get('/', (req, res) =>{
	var cookies = parseCookies(request);
	res.send(cookies);
});

 
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});