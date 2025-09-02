import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.status(202).json({
    msg: 'Probando que esto de verdad viene del código'
})
  console.log("dentro del get")
})

app.listen(3000)