// Function to insert income data
function insertPemasukan(tanggal_masuk, jumlah_masuk, sumber, deskripsi) {
    try {
        const response = fetch('https://asia-southeast2-xenon-hawk-402203.cloudfunctions.net/insertPemasukan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                tanggal_masuk: tanggal_masuk,
                jumlah_masuk: jumlah_masuk,
                sumber: sumber,
                deskripsi: deskripsi,
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to insert income data');
        }

        const result = response.json();
        console.log('Inserted ID:', result.insertedID);
        return result.insertedID;
    } catch (error) {
        console.error('Error inserting income data:', error);
        return null;
    }
}

  function tambahData() {
  // Mendapatkan nilai dari input elemen (tanggal, jumlah, sumber, deskripsi)
  const tanggalInput = document.getElementById("tanggalInput");
  const rupiahInput = document.getElementById("rupiahInput");
  const selectSumber = document.getElementById("selectSumber"); // Ganti "sumber" dengan ID yang benar
  const deskripsiInput = document.getElementById("deskripsiInput"); // Ganti "textarea" dengan ID yang benar

   // Periksa apakah elemen ditemukan sebelum mencoba membaca properti 'value'
   if (!tanggalInput || !rupiahInput || !selectSumber || !deskripsiInput) {
   console.error("Salah satu elemen tidak ditemukan.");
   return;
  }

  const tanggal = tanggalInput.value;
  const jumlah = rupiahInput.value;
  const sumber = selectSumber.value;
  const deskripsi = deskripsiInput.value;

  // Lakukan validasi (tambahkan validasi sesuai kebutuhan)

  // Lakukan sesuatu dengan data yang telah diperoleh
  console.log("Tambah Data Pemasukan:");
  console.log("Tanggal:", tanggal);
  console.log("Jumlah:", jumlah);
  console.log("Sumber:", sumber);
  console.log("Deskripsi:", deskripsi);

  // Reset nilai input setelah data ditambahkan (sesuaikan dengan kebutuhan)
   tanggalInput.value = "";
   rupiahInput.value = "";
   selectSumber.value = "Pilih Sumber";
   deskripsiInput.value = "";
  }

  function batalTambahData() {
  // Reset nilai input jika batal (sesuaikan dengan kebutuhan)
  document.getElementById("tanggalInput").value = "";
  document.getElementById("rupiahInput").value = "";
  document.getElementById("selectSumber").value = "Pilih Sumber";
  document.getElementById("deskripsiInput").value = "";
  }  

// Example usage
// document.getElementById("submitIncomeButton").addEventListener("click", insertPemasukan);
document.getElementById("submitEventButton").addEventListener("click",  function () {
    const tanggal_masuk = eventDateInput.value; // Assuming eventDateInput is defined
    const jumlah_masuk = parseInt(document.getElementById("jumlahMasuk").value); // Assuming jumlahMasuk is the ID for the input field
    const sumber = document.getElementById("sumber").value; // Assuming sumber is the ID for the input field
    const deskripsi = document.getElementById("deskripsi").value; // Assuming deskripsi is the ID for the input field

    const insertedID =  insertPemasukan(tanggal_masuk, jumlah_masuk, sumber, deskripsi);

    if (insertedID !== null) {
        // Do something with the inserted ID if needed
        console.log("Inserted ID:", insertedID);
    }
});