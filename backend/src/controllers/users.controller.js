const usersCtrl = {}

const User = require('../models/User')

usersCtrl.getUsers = async (req, res) => {
	const users = await User.find()
	res.json(users)
}

usersCtrl.createUsers = async (req, res) => {
	const { usuario } = req.body
	const newUser = new User({
		usuario
	})

	newUser.save()
	res.json({ message: 'Usuario almacenado satisfactoriamente' })
}

usersCtrl.deleteUsers = async (req, res) => {
	await User.findByIdAndDelete(req.params.id)
	res.json({ message: 'Usuario eliminado correctamente' })
}

module.exports = usersCtrl