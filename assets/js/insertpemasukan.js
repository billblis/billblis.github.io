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

// Example usage
document.getElementById("submitIncomeButton").addEventListener("click", insertPemasukan);
// document.getElementById("submitIncomeButton").addEventListener("click",  function () {
//     const tanggal_masuk = eventDateInput.value; // Assuming eventDateInput is defined
//     const jumlah_masuk = parseInt(document.getElementById("jumlahMasuk").value); // Assuming jumlahMasuk is the ID for the input field
//     const sumber = document.getElementById("sumber").value; // Assuming sumber is the ID for the input field
//     const deskripsi = document.getElementById("deskripsi").value; // Assuming deskripsi is the ID for the input field

//     const insertedID =  insertPemasukan(tanggal_masuk, jumlah_masuk, sumber, deskripsi);

//     if (insertedID !== null) {
//         // Do something with the inserted ID if needed
//         console.log("Inserted ID:", insertedID);
//     }
// });