const { Schema, model }  = require('mongoose')

const noteSchema = new Schema({
		titulo: {
			type: String,
			required: true
		},
		descripcion: {
			type: String,
			required: true
		},
		autor: {
			type: String,
			required: true
		},
		fecha: {
			type: Date,
			default: Date.now,
			required: true
		}
	},
	{
		timestamps: true
	})

module.exports = model('Note', noteSchema)