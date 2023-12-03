import { post } from "../js/utilities/api.js";
import { getValue } from "https://jscroot.github.io/element/croot.js";
import { setCookieWithExpireHour } from "https://jscroot.github.io/cookie/croot.js";

export default function PostSignIn() {
    let target_url = "https://asia-southeast2-xenon-hawk-402203.cloudfunctions.net/login";
    // let token = "token";
    // let tokenvalue = "5f2dcd0e6f39ad4515c8397819a04a22bd6ff03d63b0eaa5913c9e93a217c33b";
    let datainjson = {
        username: getValue("username"),
        password: getValue("password")
    }

    // postWithToken(target_url,tokenkey,tokenvalue,datainjson,responseData);
    post(target_url, datainjson, responseData);
}

function responseData(result) {
    if (result.token) {
        setCookieWithExpireHour("Authorization", result.token, 2);

        // Use SweetAlert for success message
        Swal.fire({
            icon: 'success',
            title: 'Berhasil Masuk',
            text: "Selamat Datang",
        }).then(() => {
            // Redirect to the dashboard page
            window.location.href = "dashboard.html";
        });
    } else {
        // Use SweetAlert for error message
        Swal.fire({
            icon: 'error',
            title: 'Gagal Masuk',
            text: result.message,
        });
    }
}

document.getElementById("button").addEventListener("click", PostSignIn);
// window.PostSignIn = PostSignIn;