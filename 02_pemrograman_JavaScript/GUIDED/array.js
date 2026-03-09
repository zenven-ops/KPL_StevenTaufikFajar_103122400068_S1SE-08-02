const kotaDikunjungi = ["Pekalongan", "Semarang", "Kendal"]
kotaDikunjungi.unshift("Cilacap");
kotaDikunjungi.push("solo");
kotaDikunjungi.pop(); //hapus array dari belakang
// kotaDikunjungi.reverse()
kotaDikunjungi.splice(0,1); //hapus array index target
kotaDikunjungi[1] = "Berbes"; //cara ganti element array 
console.log(kotaDikunjungi);