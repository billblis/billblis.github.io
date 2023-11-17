import { deleteCookie as deleteCookieUtil } from "./cookie.js";

// const logout = () => {
//     let konfirmasi = confirm('anda yakin akan logout?')
//     if (konfirmasi) {
//       deleteCookieUtil("token");
//       window.location.href = "../pages/login.html";
//       // document.cookie = "token" + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
//     }

//   }

// window.logout = logout;

const logout = () => {
    Swal.fire({
        title: 'Logout',
        text: 'Anda yakin ingin logout?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, logout!'
    }).then((result) => {
        if (result.isConfirmed) {
            // Jika klik "Ya, logout!"
            deleteCookieUtil("token"); // Menghapus cookie token
            window.location.href = '../pages/login.html';
        } else {
            // Jika klik "Cancel"
            window.location.href = 'dashboard.html'; 
        }
    });
}

// Panggil fungsi logout saat halaman dimuat
window.logout = logout;