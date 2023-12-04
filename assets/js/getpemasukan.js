import { postWithBearer } from "../js/utilities/api.js";
import {getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { addInner } from "https://jscroot.github.io/element/croot.js"
// import { showLoadingModal, hideLoadingModal } from "./utilities/loading.js"
// import { tabelTopic } from "./temp/table.js";

const Postdata = () => {
    const target_url = "https://asia-southeast2-xenon-hawk-402203.cloudfunctions.net/getAllPemasukan";

    let id = false;
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('id')) {
        if (urlParams.get('id') != '') {
            id = urlParams.get('id');
        }
    }
    const datainjson = {
        "_id": id
    };
    const token = getCookie("token")
    if (token) {
        postWithBearer(target_url, token, datainjson, responseData)
    } else {
        console.log("token tidak ada " + result.message);
        alert("sesi anda sudah habis, silahkan logout dan login ulang")
        window.location.href = "pemasukan.html";

    }
    // post(target_url, datainjson, responseData);
};

const responseData = (result) => {
    // console.log(result);
    if (result.status === true) {

        addInner("tanggal_masuk", result.data[0].tanggal_masuk)
        addInner("rupiah", result.data[0].rupiah)
        addInner("sumber", result.data[0].sumber)
        addInner("deskripsi", result.data[0].deskripsi)

        document.getElementById("tanggal_masuk_Input").value = result.data[0].tanggal_masuk;
        document.getElementById("rupiahInput").value = result.data[0].jumlah_masuk;
        document.getElementById("sumber_Input").value = result.data[0].jumlah_masuk;
        document.getElementById("deskripsi_Input").value = result.data[0].deskripsi;
        


        const defaultValue = result.data[0].source.source; // Change this value as needed
        document.querySelector(`input[type="radio"][value="${defaultValue}"]`).checked = true;

        //isi tabel
        if (result.data[0].status == "inputting") {

            document.getElementById("actionButton").innerHTML = "Tambah Pemasukan";
            document.getElementById("actionButton").setAttribute("onclick", "tambah()");
            document.getElementById("actionButton").setAttribute("class", "button is-primary");

            if (result.datapemasukan.length > 0) {
                let index = 0;
                let isiRow = (value) => {
                    console.log(value)
                    let content =
                        tabelTopic.replace("#NO#", index += 1)
                            .replace("#TANGGAL#", value.tanggal_masuk)
                            .replace("#JUMLAH#", value.jumlah_masuk)
                            .replace("#SUMBER#", value.sumber)
                            .replace("#DESKRIPSI#", value.deskripsi)
                    addInner("isiTabel", content);
                }

                result.datatopics.forEach(isiRow)

                document.getElementById("textNoData").style.display = "none";
            }
        } else if(result.data[0].status == "Tambah") {
            document.getElementById("actionButton").innerHTML = "Data Pemasukan";
            document.getElementById("yourElementId").removeAttribute("onclick");
            document.getElementById("actionButton").setAttribute("class", "button is-primary");
            document.getElementById("actionButton").setAttribute("disabled", true);
        }

        // window.location.href = "sentimen.html";
    } else {
        console.log(result.message);
        alert(`parameter bermasalah atau sesi anda sudah habis, silahkan ulangi atau logout dan login ulang`);
        window.location.href = "pemasukan.html";

    }
};

Postdata();