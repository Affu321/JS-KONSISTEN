const methodMahasiswa = {  
    makan: function(portion) {
        this.energi += portion;
        console.log(`Halo ${this.nama}, selamat makan`);
    },      
    main: function(hour) {
        this.energi -= hour;
        console.log(`Halo ${this.nama}, selamat main`);
    },
    tidur: function (jam){
        this.energi += jam *2;
        console.log(`halo ${this.nama}, selamat tidur`)
    }
};

function mahasiswa (nama, energi) {
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    return mahasiswa;
}
let affu = mahasiswa('affu',20)
let babayaga = mahasiswa('babayaga',30)