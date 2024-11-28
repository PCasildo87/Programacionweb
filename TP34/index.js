import express, { json } from "express"
import { validarformcontacto } from "./src/middlewares/validador"
const app =express()
const PORT = 4000

app.use(express.static("public"))
app.use(express.urlencoded({extended:false}))


app.post("/contacto",async(req, res) =>{
    console.log(req.body)
    //validar
    const validacion = await validarformcontacto(req.body)
    res.send(JSON.stringify(validacion))

})



app.listen(PORT, () =>{
    console.log(`servidor activo en http://localhost:${PORT}`)


})