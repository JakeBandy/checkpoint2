const express = require("express")
//const = require('')
const app = express()

app.use(express.json())

//app.use('/', )

app.get("/", (req, res) => {
    console.log("working")
    res.send("hello")
})

app.listen(process.env.PORT || 3001)