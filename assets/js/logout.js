import { deleteCookie} from "https://jscroot.github.io/cookie/croot.js";

function logout() {
    var result = confirm("Anda yakin ingin logout?");
    if (result) {
        deleteCookie("token");
        // Mengarahkan ke halaman login
        window.location.href = "login.html";
    }
}

document.getElementById("button").addEventListener("click", logout);