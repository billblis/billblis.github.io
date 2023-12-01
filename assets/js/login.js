import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { setInner, getValue } from "https://jscroot.github.io/element/croot.js";
import { setCookieWithExpireHour } from "https://jscroot.github.io/cookie/croot.js";

export default function PostSignIn() {
    let target_url = "https://asia-southeast2-xenon-hawk-402203.cloudfunctions.net/Billblis";
    // let tokenkey = "token";
    // let tokenvalue = "5f2dcd0e6f39ad4515c8397819a04a22bd6ff03d63b0eaa5913c9e93a217c33b";
    let datainjson = {
        "username": getValue("username"),
        "password": getValue("password")
    }

    // postWithToken(target_url,tokenkey,tokenvalue,datainjson,responseData);
    postWithToken(target_url,datainjson,responseData);
}

function responseData(result) {
    if (result.message == "Selamat Datang") {
        setCookieWithExpireHour("token", result.token, 2);

        // Use SweetAlert for success message
        Swal.fire({
            icon: 'success',
            title: 'Berhasil Masuk',
            text: result.message,
        }).then(() => {
            // Redirect to the dashboard page
            window.location.href = "../dashboard.html";
        });
    } else {
        // Use SweetAlert for error message
        Swal.fire({
            icon: 'error',
            title: 'Gagal Masuk',
            text: 'Password atau username salah',
        }).then(() => {
            console.log(result.message);
        });
    }
}

window.PostSignIn = PostSignIn;