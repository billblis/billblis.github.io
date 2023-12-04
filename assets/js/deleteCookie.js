// import {deleteCookie as deleteCookieUtil} from "./utilities/cookie.js";

// const logout = () => {
//     Swal.fire({
//         title: 'Logout',
//         text: 'Anda yakin ingin logout?',
//         icon: 'question',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Ya, logout!'
//     }).then((result) => {
//         if (result.isConfirmed) {
//             // Jika klik "Ya, logout!"
//             deleteCookieUtil("token"); // Menghapus cookie token
//             window.location.href = 'login.html';
//         } else {
//             // Jika klik "Cancel"
//             window.location.href = 'dashboard.html'; 
//         }
//     });
// }

// // Panggil fungsi logout saat halaman dimuat
// // window.logout = logout;
// document.getElementById("button").addEventListener("click", logout);