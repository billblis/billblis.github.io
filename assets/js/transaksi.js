// Data transaksi (gantilah dengan data yang sesuai dari sumber Anda)
const transaksiData = [];

// Fungsi untuk membangun baris tabel
function buildTableRow(transaksi) {
  return `
    <tr class="text-gray-700 dark:text-gray-400">
      <td class="px-4 py-3 text-sm">
        ${transaksi.tanggal}
      </td>
      <td class="px-4 py-3 text-xs">
        <span class="px-2 py-1 font-semibold leading-tight ${
          transaksi.kategori === "Pemasukan"
            ? "text-green-700 bg-green-100"
            : "text-red-700 bg-red-100"
        } rounded-full dark:${
    transaksi.kategori === "Pemasukan"
      ? "bg-green-700 text-green-100"
      : "bg-red-700 text-red-100"
  }">
          Rp. ${transaksi.jumlah}
        </span>
      </td>
      <td class="px-4 py-3 text-sm">
        ${transaksi.sumber}
      </td>
      <td class="px-4 py-3 text-sm">
        ${transaksi.deskripsi}
      </td>
      <td class="px-4 py-3">
        <div class="flex items-center space-x-4 text-sm">
          <a type="button" href="edit_pengeluaran.html?_id=${transaksi.id}">
            <button
              class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
              aria-label="Edit"
            >
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                ></path>
              </svg>
            </button>
          </a>
          <button type="button" onclick="deletePengeluaran('${transaksi.id}')"
            class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
            aria-label="Delete"
          >
            <svg
              class="w-5 h-5" 
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fill-rule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </td>
    </tr>
  `;
}

// Fungsi untuk membangun tabel
function buildTable() {
  const tableBody = document.querySelector("#transaksiTable tbody");

  // Hapus semua baris yang ada (jika ada)
  tableBody.innerHTML = "";

  // Iterasi melalui data transaksi dan tambahkan ke tabel
  transaksiData.forEach((transaksi) => {
    const row = buildTableRow(transaksi);
    tableBody.innerHTML += row;
  });
}

// Fungsi untuk menambahkan transaksi baru
function addTransaction(transaksi) {
  // Tambahkan transaksi ke data transaksi
  transaksiData.push(transaksi);

  // Perbarui tabel
  buildTable();
}

// Fungsi untuk menghapus transaksi
function deletePengeluaran(id) {
  // Temukan indeks transaksi dengan id yang sesuai
  const index = transaksiData.findIndex((transaksi) => transaksi.id === id);

  // Hapus transaksi dari data transaksi
  if (index !== -1) {
    transaksiData.splice(index, 1);

    // Perbarui tabel
    buildTable();
  }
}

// Fungsi untuk memproses formulir
function processForm() {
  const kategori = document.getElementById("kategori").value;
  const tanggal = document.getElementById("tanggal").value;
  const jumlah = document.getElementById("jumlah").value;
  const sumber = document.getElementById("sumber").value;
  const deskripsi = document.getElementById("deskripsi").value;

  // Membuat objek transaksi baru
  const newTransaction = {
    id: Date.now().toString(), // Generate unique id (timestamp)
    kategori,
    tanggal,
    jumlah,
    sumber,
    deskripsi,
  };

  // Menambahkan transaksi baru ke tabel
  addTransaction(newTransaction);
}

// Panggil fungsi untuk membangun tabel saat halaman dimuat
window.onload = function () {
  buildTable();
};
