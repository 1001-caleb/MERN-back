import mongoose from 'mongoose'

const url = 'mongodb+srv://parra:mrcaleb7@cluster0.ea9gb1s.mongodb.net/mern'
mongoose.connect(url)

const db = mongoose.connection
db.on('open', () => { console.log("conectado a mongo") })
db.on('error', () => { console.log("no conectado a mongo") })

export default db