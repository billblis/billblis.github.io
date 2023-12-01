// import deleteCookie from "./cookie.js";

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
//             deleteCookie("token"); // Menghapus cookie token
//             window.location.href = '../pages/login.html';
//         } else {
//             // Jika klik "Cancel"
//             window.location.href = 'dashboard.html'; 
//         }
//     });
// }

// // Panggil fungsi logout saat halaman dimuat
// window.logout = logout;