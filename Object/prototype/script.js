// function mahasiswa (nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }
// mahasiswa.prototype.makan = function(porsi){
//     this.energi+= porsi;
//     return `halo ${this.nama}, selamat makan`;
// }
// mahasiswa.prototype.main = function(jam){
//     this.energi+= jam;
//     return `halo ${this.nama}, selamat main`;
// }
// mahasiswa.prototype.tidur = function(jam){
//     this.energi+= jam *2;
//     return `halo ${this.nama}, selamat tidur`;
// }
// let affu = new mahasiswa ('affu', 10);



class Mahasiswa{
    constructor(nama, energi){
        this.nama=nama;
        this.energi=energi;
    }
    makan(porsi){
        this.energi+= porsi;
        return `halo ${this.nama}, selamat makan`;
    }
    main (jam) {
        this.energi-= jam;
        return `halo ${this.nama}, selamat main`;
    }
    tidur (jam){
        this.energi+= jam *2;
        return `halo ${this.nama}, selamat tidur`;
    }
}

let affu = new Mahasiswa ('affu', 10);