const express = require('express')
const app = express()

app.get('/', (_, res) => {
  res.send('hello world')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Node.js server listening on http://localhost:${PORT}`)
})
