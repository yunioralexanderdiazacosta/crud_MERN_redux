const { Schema, model } = require('mongoose')

const userSchema = new Schema({
		usuario: {
			type: String,
			required: true,
			trim: true,
			unique: true
		},
	},
	{
		timestamps: true
	})

module.exports = model('User', userSchema)