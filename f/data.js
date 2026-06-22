const nama = "hutan"
let hutan = "rimbun"
const usia = 400


function generateBiodata() { 
    if (usia < 200 && usia > 100){
        console.log('hutan ini sudah lama')
    }else{
        console.log('hutan ini belum cukup lama')
    }
}

generateBiodata()