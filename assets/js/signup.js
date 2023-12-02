import { postWithToken} from "https://jscroot.github.io/api/croot.js";
import { getValue } from "https://jscroot.github.io/element/croot.js";

function PostSignUp  () {
    let target_url = "https://asia-southeast2-xenon-hawk-402203.cloudfunctions.net/signup";
    let token = "token";
    let datainjson = {
        email: getValue("email"),
        username: getValue("username"),
        password: getValue("password"),
    };
    console.log(datainjson);
    postWithToken(target_url, token, datainjson, responseData);
};

function responseData (result) {
    console.log(result);
    if (result.status === true) {
        alert(`Berhasil Masuk ${result.message}`);
        window.location.href = "login.html";
    } else {
        alert(`Gagal Signup, ` + result.message );
    }
};

document.getElementById("button1").addEventListener("click", PostSignUp);
// window.PostSignUp = PostSignUp;