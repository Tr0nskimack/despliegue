const express = require('express')
const app = require("./app")

app.listen(app.get("port"), () => {
  console.log("Server on port http://localhost:", app.get("port"))
})



//si el proyecto se va a subir a produccion hay que cambiar en el package.json el scripts de ejecucion dev
//por el de start y ejecutara node index.js