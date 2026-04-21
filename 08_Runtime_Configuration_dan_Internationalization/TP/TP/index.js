const tanggalSekarang = new Date();

const formatter = new Intl.DateTimeFormat('id-ID', {
  weekday: 'long', 
  day: 'numeric',  
  month: 'long',   
  year: 'numeric'  
});

const hasilFormat = formatter.format(tanggalSekarang);

console.log(hasilFormat);