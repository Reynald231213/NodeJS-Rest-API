const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())
// endpoint "/test" dengan method GET
app.get("/test", (req,res) => {
    // req merupakan variabel yang berisi data request
    // res merupakan variabel yang berisi data response dari end-point

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        message: "Ini end-point pertama ku",
        method: req.method,
        code: res.statusCode
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})
// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})

// end-point "//celcius" dengan method get
app.get("/convert/celcius/:celcius", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let celcius = Number(req.params.celcius)
    let result;
    

    let reamur = 4/5 * celcius
    let fahrenhait = (9/5 * celcius )+ 32
    let kelvin = celcius + 273
    
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        celcius : celcius,
        result : result = { 
        reamur : reamur,
        fahrenhait : fahrenhait,
        kelvin : kelvin }
    }
    

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "//celcius" dengan method get
app.get("/convert/reamur/:reamur", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let reamur = Number(req.params.reamur)
    let result;
    

    let celcius = 5/4 * reamur
    let fahrenhait = (9/4 * reamur )+ 32
    let kelvin = (5/4 * reamur) + 273
    
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        reamur : reamur,
        result : result = { 
        celcius : celcius,
        fahrenhait : fahrenhait,
        kelvin : kelvin }
    }
    

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "//fahrenhait" dengan method get
app.get("/convert/fahrenhait/:fahrenhait", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let fahrenhait = Number(req.params.fahrenhait)
    let result;
    

    let celcius = 5/9 * (fahrenhait - 32)
    let reamur = 4/9 * (fahrenhait - 32)
    let kelvin = 5/9 * (fahrenhait - 32) + 273
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        fahrenhait : fahrenhait,
        result : result = { 
        celcius : celcius,
        reamur : reamur,
        kelvin : kelvin }
    }
    

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "//kelvin" dengan method get
app.get("/convert/kelvin/:kelvin", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let kelvin = Number(req.params.kelvin)
    let result;
    

    let celcius = kelvin - 273
    let reamur = 4/5 * (kelvin - 273)
    let fahrenhait = 9/5 * (kelvin - 273) +32
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        kelvin : kelvin,
        result : result = { 
        celcius : celcius,
        reamur : reamur,
        fahrenhait : fahrenhait }
    }
    

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

