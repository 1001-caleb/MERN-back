import express from 'express'
import cors from 'cors'
import db from './database/db.js'
import blogRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/blogs', blogRoutes)


app.listen(process.env.PORT || 8000, () => {
    console.log('server up running on http://localhost:8000')
})