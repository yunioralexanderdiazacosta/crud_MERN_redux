const notesCtrl = {}

const Note = require('../models/Note')

notesCtrl.getNotes = async (req, res) => {
	const notes = await Note.find()
	res.json(notes)
}

notesCtrl.getNote = async (req, res) => {
	const note = await Note.findById(req.params.id)
	res.json(note)
}	

notesCtrl.createNotes = (req, res) => {
	const { titulo, descripcion, autor, fecha } = req.body
	const newNote = new Note({
		titulo: titulo,
		descripcion: descripcion,
		autor: autor,
		fecha: fecha
	})
	newNote.save()
	.then(response => {
		res.json(response)
	})
	.catch(err => {
		console.log(err)
	})
}

notesCtrl.updateNotes = async (req, res) => {
	const { _id, titulo, descripcion, autor, fecha } = req.body
	const updateNote = {
		_id,
		titulo,
		descripcion,
		autor,
		fecha
	}
	Note.findOneAndUpdate(req.params.id, updateNote)
	.then(
		res.json(updateNote)
	)
	.catch(err => {
		console.log(err)
	})
}

notesCtrl.deleteNotes = async (req, res) => {
	await Note.findOneAndDelete(req.params.id)
	res.json({ message: 'Nota eliminada correctamente' })
}

module.exports = notesCtrl