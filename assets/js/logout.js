import { deleteCookie } from "../js/utilities/api.js";

function logout() {
    var result = confirm("Anda yakin ingin logout?");
    if (result) {
        deleteCookie("token");
        // Mengarahkan ke halaman login
        window.location.href = "login.html";
    }
}

document.getElementById("button").addEventListener("click", logout);