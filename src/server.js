const express= require('express')
const app = express()
const routes =require('./routes')
//Decodifica o json
app.use(express.json())
//Chama as rotas HTTP
app.use(routes)
//Tratamento de errro
app.use((error,res,req,next)=>{
    res.status(error.status||500)
    res.json({error:error.message})
})
//Port que o servidor esta rodando
app.listen(5555,()=>{console.log("Rodando na PORT 5555")});

