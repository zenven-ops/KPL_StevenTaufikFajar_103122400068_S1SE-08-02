/** @type {string} */
const url = process.env.BASE_API || '';
async function tampilkanKurs() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const dateStr = data.date; 
    const rateCNH = data.idr.cnh;
    const rateEUR = data.idr.eur;

    const formatterTanggal = new Intl.DateTimeFormat('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    const tanggalFormat = formatterTanggal.format(new Date(dateStr));

    /**
     * @param {number} nilai
     */
    const formatIDR = (nilai) => new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(nilai);

    /**
     * @param {number} nilai
     */
    const formatCNH = (nilai) => new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'CNH',
      currencyDisplay: 'code' 
    }).format(nilai);

    /**
     * @param {number} nilai
     */
    const formatEUR = (nilai) => new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'EUR'
    }).format(nilai);

    const nilaiUjian = [25000, 50000, 100000];

    nilaiUjian.forEach((idr) => {
      const hasilCNH = idr * rateCNH;
      const hasilEUR = idr * rateEUR;

      console.log(`Kurs ${formatIDR(idr)} pada ${tanggalFormat} adalah ${formatCNH(hasilCNH)} dan ${formatEUR(hasilEUR)}`);
    });

  } catch (error) {
    console.error("Gagal mengambil data dari API:", error);
  }
}

tampilkanKurs();