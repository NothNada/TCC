import express from 'express'
import cors from "cors"

import userRoutes from './routes/userRoutes.js'


const app = express()


app.use(cors({
  origin: 'http://localhost:5173'

}))
app.use(express.json())


const port = 3000

/*
  Aqui ele irá criar as rotas base, e o resto será controlado pelos arquivos da pasta routes/
  Aqui só terá as bases, como /api /admin /login e tals pode ter /api/login, depois vemos isso
*/
app.use('/api', userRoutes)

app.listen(port, () => {
  console.log("EX em express")

})
