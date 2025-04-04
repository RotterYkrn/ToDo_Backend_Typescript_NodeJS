import express from 'express'
import { createConnection } from './database'

const app = express()

const PORT = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
    req
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    createConnection()
})
