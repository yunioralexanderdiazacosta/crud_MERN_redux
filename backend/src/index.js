require('dotenv').config()
const app = require('./app')
const port = process.env.port || 4000
require('./database')

async function main(){
	await app.listen(port)
	console.log('Servidor conectado en el puerto: '+ port)

} 

main()
