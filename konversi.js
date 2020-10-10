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

app.post("/desimal", (req,res) => {
let desimal = Number(req.body.desimal)

    let biner = desimal.toString(2)
    let octal = desimal.toString(8)
    let heksa = desimal.toString(16)

    let response = {
        desimal : desimal,
        biner : biner,
        octal : octal,
        heksa : heksa
    }
// memberikan response dengan format JSON yang berisi objek di atas
res.json(response)
})

app.post("/biner", (req,res) => {
    let biner = Number(req.body.biner)
    
        let desimal = biner.toString(2)
        let octal = biner.toString(8)
        let heksa = biner.toString(16)
    
        let response = {
            biner : biner,
            desimal : desimal,
            octal : octal,
            heksa : heksa
        }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
    })

    app.post("/biner", (req,res) => {
    let biner = Number(req.body.biner)
    
        let desimal = biner.toString(10)
        let octal = biner.toString(8)
        let heksa = biner.toString(16)
    
        let response = {
            biner : biner,
            desimal : desimal,
            octal : octal,
            heksa : heksa
        }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
    })

    app.post("/octal", (req,res) => {
        let octal = Number(req.body.octal)
        
            let desimal = octal.toString(10)
            let biner = octal.toString(2)
            let heksa = octal.toString(16)
        
            let response = {
                octal : octal,
                biner : biner,
                desimal : desimal,
                heksa : heksa
            }
        // memberikan response dengan format JSON yang berisi objek di atas
        res.json(response)
        })

        app.post("/heksa", (req,res) => {
            let heksa = Number(req.body.heksa)
            
                let desimal = heksa.toString(10)
                let biner = heksa.toString(2)
                let octal = heksa.toString(8)
            
                let response = {
                    heksa : heksa,
                    octal : octal,
                    biner : biner,
                    desimal : desimal
                    
                }
            // memberikan response dengan format JSON yang berisi objek di atas
            res.json(response)
            })