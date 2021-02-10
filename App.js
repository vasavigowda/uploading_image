var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var mongoose = require('mongoose')

var fs = require('fs');
var path = require('path');
require('dotenv/config');

mongoose.connect(process.env.MONGO_URL,
	{ useNewUrlParser: true, useUnifiedTopology: true }, err => {
		console.log('connected')
	});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var multer = require('multer');

var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads')
	},
	filename: (req, file, cb) => {
		cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
	}
});

var upload = multer({ storage: storage });


var imgModel = require('./Model/model');


app.get('/', (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.post('/add', upload.single('image'), (req, res, next) => {

	var obj = {
		Name:req.body.Name,
		Description:req.body.Description,
		longitude:req.body.longitude,
		latitude:req.body.latitude,
		ordernum:req.body.ordernum,
		backgroundmedia:req.body.backgroundmedia,
		webmmedia:req.body.webmmedia,
		img: {
			data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
			contentType: '/image/png|jpeg|jpg|png|gif/'
		}
	}
	imgModel.create(obj, (err, item) => {
		if (err) {
			console.log(err);
		}
		else {

			res.send("Name saved to database");
		}
	});
});

var routes = require('./routers/locationrouter');
routes(app);

var port = process.env.PORT || '3000'
app.listen(port, err => {
	if (err)
		throw err
	console.log('Server listening on port', port)
})
