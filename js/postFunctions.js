import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { setInner, getValue } from "https://jscroot.github.io/element/croot.js";
import { setCookieWithExpireHour } from "https://jscroot.github.io/cookie/croot.js";

export default function PostSignUp() {
    let target_url = "https://asia-southeast2-trens-project.cloudfunctions.net/trensentimen-post";
    // let target_url = "https://asia-southeast2-trens-project.cloudfunctions.net/trensentimen-post2";
    let tokenkey = "token";
    let tokenvalue = "f48bd58cb3b3972d05bb9303b15ce9b83f4fcb9c871d1b05906f2fec20620ea0";
    let datainjson = {
        "username": getValue("username"),
        "password": getValue("password")
    }

    postWithToken(target_url,tokenkey,tokenvalue,datainjson,responseData);
}





function responseData(result) {
    
    setInner("pesan", result.message);
    
    setCookieWithExpireHour("token", result.token, 2);
    alert("Berhasil Masuk")
    window.location.href = "dashboard.html";
}