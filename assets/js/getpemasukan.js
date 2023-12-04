// Function to get all income data
function getAllPemasukan() {
    try {
        const response =  fetch('https://asia-southeast2-xenon-hawk-402203.cloudfunctions.net/getAllPemasukan');

        if (!response.ok) {
            throw new Error('Failed to fetch income data');
        }

        const pemasukanData =  response.json();
        console.log('All Pemasukan:', pemasukanData);
        return pemasukanData;
    } catch (error) {
        console.error('Error fetching income data:', error);
        return null;
    }
}

// Example usage
// document.getElementById("getAllPemasukanButton").addEventListener("click", getAllPemasukan);
document.getElementById("button").addEventListener("click",  function () {
    const allPemasukan = getAllPemasukan();

    if (allPemasukan !== null) {
        // Do something with the retrieved income data if needed
        console.log("All Pemasukan:", allPemasukan);
    }
});