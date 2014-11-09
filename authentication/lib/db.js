// database module

var mongoose = require('mongoose'),
	Scheme = mongoose.Schema;

module.exports.mongoose = mongoose;
module.exports.Scheme = Schema;

// Connect to cloud database
var username = 'admin',
	password = 'admin',
	address = 'ds051960.mongolab.com:51960/nockmarket';

connect();

// Connect to mongoose
function connect() {
	var url = 'mongodb://' + username + ':' + password + address;
	mongoose.connect(url);
}

function disconnect() {
	mongoose.disconnect();
}