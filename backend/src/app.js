import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello Legal Clause Simplifier!')
})

export default app
