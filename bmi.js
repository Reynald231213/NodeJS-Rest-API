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

// end-point "/bmi" dengan method POST
app.post("/bmi", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let berat = Number(req.body.berat) 
    let tinggi = Number(req.body.tinggi) 

    let bmi = berat / Math.pow(tinggi,2);
    if (bmi >= 30.0) {
        status = "Berat Badan Anda OBESITAS. Lakukan Olahraga Untuk Berat Badan Ideal"
    } else if (bmi >= 25.0) {
        status = "Anda Kelebihan Berat Badan. Jaga Pola Makan Agar Tidak Obesitas"
    } else if (bmi >= 18.5) {
        status = "Berat Badan Anda IDEAL. Tetap Jaga Pola Makan & Olahraga"
    } else {
        status = "Anda Kekurangan Berat Badan. Lebih Banyak Makan yaa..."
    }
    

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        berat : berat,
        tinggi : tinggi,
        bmi : bmi,
        status : status
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})