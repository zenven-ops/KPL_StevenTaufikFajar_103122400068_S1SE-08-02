export function ptlsv_dua(x, op, a) {
    // Mengambil angka dari string (contoh: "-2x" menjadi -2)
    const coeff = parseInt(x);

    // Objek untuk membalikkan tanda jika dibagi angka negatif
    const balikkan_op = {
        ">=": "<=",
        "<=": ">=",
        ">": "<",
        "<": ">"
    };

    // Jika koefisien kurang dari 0 (negatif), balikkan tanda. Jika tidak, tetap.
    const op_baru = coeff < 0 ? balikkan_op[op] : op;

    // Menghitung hasil (a dibagi koefisien)
    // Kita gunakan fungsi bagi() yang sudah ada di atas
    const hasilHitung = bagi(a, coeff);

    // Mengembalikan hasil dalam bentuk Object 
    return {
        x: x,
        dengan: op_baru,
        hasil: hasilHitung
    };
}
export function tambah(x, y){
    return x + y;
}

export function kurang(x, y){
    return x - y;
}

export function kali(x, y){
    return x * y;
}

export function bagi(x, y){
    return x / y;
}

export function pangkat(x, y){
    return x ** y;
}

export function persamaan(str){
    const sisiKanan = /=(.*)/; 
    const sisiKiri = /(.*)=/; 
    
    const kiri = sisiKiri.exec(str) ? sisiKiri.exec(str)[1].trim() : "";
    const kanan = sisiKanan.exec(str) ? sisiKanan.exec(str)[1].trim() : "";

    console.log("Sisi Kiri:", kiri);
    console.log("Sisi Kanan:", kanan);
}

/**
 * 
 * @param {string} x
 * @param {number} a
 * @param {number} b
 */
export function plsv_tiga(x, a, b) {
    const k = b - a;

    // Jika hanya "x" saja
    if (x.length === 1) {
        return k;
    } else if (x.length === 2) {
        // Mengubah string seperti "3x" menjadi angka 3
        const v = parseInt(x); 
        // Memanggil fungsi bagi() dari modul ini
        return bagi(k, v);
    }

    return 0;
}