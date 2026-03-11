const elementEditor = document.getElementById("editor-kecil");
const elemenHf =document.getElementById("hf");
const elementHb = document.getElementById("hb");

function hitungHuruf(event){
    // const textLength = elementEditor.value.length;
    const teks = event.target.value;

    //{'k', 'a', 't', 'a', ' ', 'K', ...}
    const teksBaru = teks.split(' ');

    let jumlahHuruf = 0;
    let jumlahHurufBesar = 0;
    
    teksBaru.forEach(karakter => {
        // w -> alfanumerik
        // \s -> spasi putih
        const spasi =/\s+/;
        if(spasi.test(karakter) === true){
            return;
        }
        if (kriteriaSpasi.text(karakter)){
            return;
        }
        const kriteriaHurufBesar = /[A-Z]+/;
        if(kriteriaHurufBesar.test(karakter)){
        jumlahHurufBesar = jumlahHurufBesar + 1;
        }
        jumlahHuruf = jumlahHuruf + 1;
    });

    elemenHf.textContent = jumlahHuruf;
    elementHb.textContent = jumlahHurufBesar;
}

elementEditor.addEventListener("input", hitungHuruf);


