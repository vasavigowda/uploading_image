var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
	// name: String,
    // desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    },
 
	Name: {
		type: String,
		required: true
	},
	Description:{
		type: String,
		required:true
	},
	longitude:{
		type: String,
		required: true
	},
	latitude:{
		type: String,
		required: true
	},
	ordernum:{
		type: String,
		required: true
	},
	backgroundmedia:{
		type: String,
		required: true,
	// img:
	// {
	// 	data: Buffer,
	// 	contentType: String
	// },
	},
	webmmedia:{
		type: String,
		required: true
	}
});

module.exports = new mongoose.model('Image', imageSchema);

