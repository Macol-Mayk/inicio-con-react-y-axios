//aceder a la libreria express
const express=require("express")
//crear objetos de la clase express
const app=express()
//asignar puerto
const puerto=3000
//datos en memoria
//arreglo
let cursos=[
    {codigo:1,nombre:"Maicol",apellido:"Rubio Pinedo",edad:17,ciclo_Seccion:"II ´C´ "},
    {codigo:2,nombre:"Isabella",apellido:"Casallas Obeso",edad:18,ciclo_Seccion:"II ´C´ "},
    {codigo:3,nombre:"Zahid",apellido:"Torres Francisco",edad:18,ciclo_Seccion:"II ´C´ "},
    {codigo:4,nombre:"Miguel",apellido:"Porras Alvis",edad:17,ciclo_Seccion:"II ´C´ "},
    {codigo:5,nombre:"Geraldo",apellido:"Cherres",edad:17,ciclo_Seccion:"II ´C´ "},
    {codigo:1,nombre:"Maicol",apellido:"Rubio Pinedo",edad:17,ciclo_Seccion:"II ´C´ "},
    {codigo:2,nombre:"Isabella",apellido:"Casallas Obeso",edad:18,ciclo_Seccion:"II ´C´ "},
    {codigo:3,nombre:"Zahid",apellido:"Torres Francisco",edad:18,ciclo_Seccion:"II ´C´ "},
    {codigo:4,nombre:"Miguel",apellido:"Porras Alvis",edad:17,ciclo_Seccion:"II ´C´ "},
    {codigo:5,nombre:"Geraldo",apellido:"Cherres",edad:17,ciclo_Seccion:"II ´C´ "},
    {codigo:1,nombre:"Maicol",apellido:"Rubio Pinedo",edad:17,ciclo_Seccion:"II ´C´ "},
    {codigo:2,nombre:"Isabella",apellido:"Casallas Obeso",edad:18,ciclo_Seccion:"II ´C´ "},
    {codigo:3,nombre:"Zahid",apellido:"Torres Francisco",edad:18,ciclo_Seccion:"II ´C´ "},
    {codigo:4,nombre:"Miguel",apellido:"Porras Alvis",edad:17,ciclo_Seccion:"II ´C´ "},
    {codigo:5,nombre:"Geraldo",apellido:"Cherres",edad:17,ciclo_Seccion:"II ´C´ "},
    {codigo:1,nombre:"Maicol",apellido:"Rubio Pinedo",edad:17,ciclo_Seccion:"II ´C´ "},
    {codigo:2,nombre:"Isabella",apellido:"Casallas Obeso",edad:18,ciclo_Seccion:"II ´C´ "},
    {codigo:3,nombre:"Zahid",apellido:"Torres Francisco",edad:18,ciclo_Seccion:"II ´C´ "},
    {codigo:4,nombre:"Miguel",apellido:"Porras Alvis",edad:17,ciclo_Seccion:"II ´C´ "},
    {codigo:5,nombre:"Geraldo",apellido:"Cherres",edad:17,ciclo_Seccion:"II ´C´ "},

]
//generar endpoint
app.get("/cursos/lista",(resquet,response)=>{
    response.json(cursos)
})

//habilitar servidor para que escuche peticiones de clientes
//en el puerto 3000
app.listen(puerto,()=>{
    console.log("Servidor Correcto......")
})

