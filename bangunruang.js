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

// end-point "/kubus" dengan method POST
app.post("/kubus", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let sisi = Number(req.body.sisi) 
    

    let luas_permukaan = 6 * sisi * sisi
    let volume = sisi * sisi * sisi

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        sisi : sisi,
        luas_permukaan: luas_permukaan,
        volume : volume
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/balok" dengan method POST
app.post("/balok", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let panjang = Number(req.body.panjang) 
    let lebar = Number(req.body.lebar) 
    let tinggi = Number(req.body.tinggi) 

    let luas_permukaan = panjang * lebar * tinggi
    let volume = 2 * ((panjang*lebar) + (panjang * tinggi) + (lebar * tinggi))

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        luas_permukaan: luas_permukaan,
        volume: volume
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/tabung" dengan method POST
app.post("/tabung", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let phi = 3.14
    let jarijari = Number(req.body.jarijari) 
    let tinggi = Number(req.body.tinggi) 

    let luas_permukaan = 2 * phi * jarijari * (jarijari + tinggi)
    let volume = phi * jarijari * jarijari * tinggi

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        phi: phi,
        jarijari: jarijari,
        tinggi: tinggi,
        luas_permukaan: luas_permukaan,
        volume: volume
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/bola" dengan method POST
app.post("/bola", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let phi = 3.14
    let jarijari = Number(req.body.jarijari) 
    
    let luas_permukaan = 2 * phi * jarijari * jarijari
    let volume = 4/3 * phi * jarijari * jarijari * jarijari

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        phi: phi,
        jarijari: jarijari,
        luas_permukaan: luas_permukaan,
        volume: volume
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})