import { postWithBearer } from "../js/utilities/api.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { getValue } from "https://jscroot.github.io/element/croot.js"

const PostinsertPemasukan = () => {
    const radioButtons = document.querySelectorAll('input[name="radioOption"]');
    let selectedValue;

    radioButtons.forEach(radioButton => {
        if (radioButton.checked) {
            selectedValue = radioButton.value;
        }
    });

    //validasi form
    if (getValue("tanggalmasukInput") === ""|| getValue("tanggalmasukInput") === null) {
        alert("Tanggal tidak boleh kosong");
        return;
    }else if (getValue("rupiahInput") === ""|| getValue("rupiahInput") === null) {
        alert("Jumlah masuk tidak boleh kosong");
        return;
    }else if (getValue("sumberInput") === ""|| getValue("sumberInput") === null) {
        alert("Sumber tidak boleh kosong");
        return;
    }else if (getValue("deskripsiInput") === ""|| getValue("deskripsiInput") === null) {
        alert("Deskripsi tidak boleh kosong");
        return;
    } else if (selectedValue === "" || selectedValue === null) {
        alert("Deskripsi tidak boleh kosong");
        return;
    }

    const target_url = "https://asia-southeast2-xenon-hawk-402203.cloudfunctions.net/insertPemasukan";
    const datainjson = {
        tanggal_masuk: getValue("tanggalmasukinput"),
        jumlah_masuk: getValue("rupiahInput"),
        sumber: getValue("sumberInput"),
        deskripsi: getValue("deskripsiInput"),
        source: {
            source: selectedValue,
            value: getValue("pemasukan")
        }
    };
    const token = getCookie("token")
    if (token) {
        postWithBearer(target_url, token, datainjson, responseData)
        alert("Berhasil menambahkan topik")
    } else {
        console.log("token tidak ada " + result.message);
        alert("sesi anda sudah habis, silahkan logout dan login ulang")
    }

    const addButton = document.createElement("button");
    addButton.id = "button";
    addButton.type = "button";
    addButton.className = "mr-4 px-5 py-3 font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-purple";
    addButton.onclick = tambahData;
    addButton.innerText = "Tambah";

    const cancelButton = document.createElement("button");
    cancelButton.id = "button";
    cancelButton.type = "button";
    cancelButton.className = "px-5 py-3 font-medium leading-5 text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-lg active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-red";
    cancelButton.onclick = batalTambahData;
    cancelButton.innerText = "Batal";

    document.body.appendChild(addButton);
    document.body.appendChild(cancelButton);
};



const responseData = (result) => {
    // console.log(result);
    if (result.status === true) {
        window.location.href = "pemasukan.html";
    } else {
        console.log(result.message);
        alert(`sesi anda sudah habis, silahkan logout dan login ulang`);
    }
};

const tambahData = () => {
    // Logika untuk menangani tombol "Tambah"
    console.log("Menambahkan data");
};

const batalTambahData = () => {
    // Logika untuk menangani tombol "Batal"
    console.log("Membatalkan penambahan data");
};



export default PostinsertPemasukan;