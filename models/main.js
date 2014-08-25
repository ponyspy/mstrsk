var mongoose = require('mongoose'),
			Schema = mongoose.Schema;

var userSchema = new Schema({
		login: String,
		password: String,
		email: String,
		status: {type: String, default: 'User'},
		date: {type: Date, default: Date.now},
});

var eventSchema = new Schema({
	title: {
		ru: String,
		en: String
	},
	s_title: {
		ru: String,
		en: String
	},
	description: {
		ru: String,
		en: String
	},
	members: [{
		name: String,
		description: String,
		links: [{
			title: String,
			path: String
		}]
	}],
	price: Number,
	type: String,
	category: String,
	images: {
		poster: String,
		photos: [String],
	},
	date: {type: Date, default: Date.now}
});

var scheduleSchema = new Schema({
	events: [{
		event: { type: Schema.Types.ObjectId, ref: 'Event' },
		banner: Boolean,
		time: {
			hours: Number,
			minutes: Number
		}
	}],
	date: {type: Date, default: Date.now}
});


// ------------------------
// *** Exports Block ***
// ------------------------


module.exports.User = mongoose.model('User', userSchema);
module.exports.Event = mongoose.model('Event', eventSchema);
module.exports.Schedule = mongoose.model('Schedule', scheduleSchema);