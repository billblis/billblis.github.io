import { deleteCookie as deleteCookieUtil} from "../js/utilities/cookie.js";

function logout() {
    var result = confirm("Anda yakin ingin logout?");
    if (result) {
        deleteCookie("token");
        // Mengarahkan ke halaman login
        window.location.href = "login.html";
    }
}

window.logout = logout;
// document.getElementById("button").addEventListener("click", logout);