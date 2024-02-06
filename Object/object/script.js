//1. object literal

// let mahasiswa1 = {
//     nama: 'affu',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`hai ${this.nama}, selamat makan!`);
//     }
// }

//kalo menggunakan object literal, harus mneggunakan 1 saja variable, jika variable sama maka akan dapat notice, already declared
// let mahasiswa2 = {
//     nama: 'affu',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`hai ${this.nama}, selamat makan!`);
//     }
// }


//2. Function declaration
function mahasiswa (nama, energi) {
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;


    mahasiswa.makan = function(portion){
        this.energi += portion;
        console.log(`Halo ${this.nama}, selamat makan`)
    }
    
    mahasiswa.main = function(hour){
        this.energi -= hour;
        console.log(`Halo ${this.nama}, selamat main`)
    }
    return mahasiswa;
}

let affu = mahasiswa('affu',20)
let babayaga = mahasiswa('babayaga',30)