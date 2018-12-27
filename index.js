const express = require('express')
const path = require('path')

//Used to make http requests
const request = require('request')

const PORT = process.env.PORT || 8080

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){

	request('https://api.iextrading.com/1.0/stock/crm/book', { json: true }, (err, resp, body) => {

		console.log('error:', err); // Print the error if one occurred
  		console.log('statusCode:', resp && resp.statusCode); // Print the response status code if a response was received

		console.log('Symbol: ' + body.quote.symbol);
		console.log('Company Name: ' + body.quote.companyName);
		console.log('Primary Exchange: ' + body.quote.primaryExchange);
		console.log('Sector: ' + body.quote.sector);
		console.log('Latest Price: ' + body.quote.latestPrice);

		res.render('pages/index',{
			"sector" : body.quote.sector,
		"latestPrice" : body.quote.latestPrice
		});
	});

}); 

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
