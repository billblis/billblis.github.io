import { postWithBearer } from "../utilities/api.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { getValue } from "https://jscroot.github.io/element/croot.js"

const insertPemasukan = () => {
    const target_url = "https://asia-southeast2-xenon-hawk-402203.cloudfunctions.net/insertPemasukan"
    const tokenkey = "Authorization";
    const tokenvalue = getCookie("Authorization");

    const data = {
        "tanggal_masuk": getValue("tanggal_masuk"),
        "jumlah_masuk": getValue("jumlah_masuk"),
        "sumber": getValue("sumber"),
        "deskripsi": getValue("deskripsi"),
    }

    postWithBearer(target_url, tokenkey, tokenvalue, data, responseData)
}

const responseData = (result) => {
    if (result.status === true) {
        Swal.fire({
            icon: "success",
            title: "Insert Successful",
            text: result.message,
        }).then(() => {
            window.location.href = "list_kegiatan.html";
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Insert Failed",
            text: result.message,
        });
    }
}

const btnInsert = document.getElementById("btnInsert");

btnInsert.addEventListener("click", insertPemasukan);


// const PostinsertPemasukan = () => {
//     const radioButtons = document.querySelectorAll('input[name="radioOption"]');
//     let selectedValue;

//     radioButtons.forEach(radioButton => {
//         if (radioButton.checked) {
//             selectedValue = radioButton.value;
//         }
//     });

//     //validasi form
//     if (getValue("tanggal_masuk_input") === ""|| getValue("tanggal_masuk_input") === null) {
//         alert("Tanggal tidak boleh kosong");
//         return;
//     }else if (getValue("rupiahInput") === ""|| getValue("rupiahInput") === null) {
//         alert("Jumlah masuk tidak boleh kosong");
//         return;
//     }else if (getValue("sumber_input") === ""|| getValue("sumber_input") === null) {
//         alert("Sumber tidak boleh kosong");
//         return;
//     }else if (getValue("deskripsi_input") === ""|| getValue("deskripsi_input") === null) {
//         alert("Deskripsi tidak boleh kosong");
//         return;
//     } else if (selectedValue === "" || selectedValue === null) {
//         alert("Deskripsi tidak boleh kosong");
//         return;
//     }

//     const target_url = "https://asia-southeast2-xenon-hawk-402203.cloudfunctions.net/insertPemasukan";
//     const datainjson = {
//         tanggal_masuk: getValue("tanggal_masuk_input"),
//         source: {
//             source: selectedValue,
//             value: getValue("tanggal_masuk_input")
//         }
//     };
//     const token = getCookie("token")
//     if (token) {
//         postWithBearer(target_url, token, datainjson, responseData)
//         alert("Berhasil menambahkan topik")
//     } else {
//         console.log("token tidak ada " + result.message);
//         alert("sesi anda sudah habis, silahkan logout dan login ulang")
//     }
// };

// const responseData = (result) => {
//     // console.log(result);
//     if (result.status === true) {
//         window.location.href = "pemasukan.html";
//     } else {
//         console.log(result.message);
//         alert(`sesi anda sudah habis, silahkan logout dan login ulang`);
//     }
// };


// export default PostinsertPemasukan;