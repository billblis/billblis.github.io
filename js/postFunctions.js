import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { setInner, getValue } from "https://jscroot.github.io/element/croot.js";
import { setCookieWithExpireHour } from "https://jscroot.github.io/cookie/croot.js";

export default function PostSignUp() {
    let target_url = "https://asia-southeast2-xenon-hawk-402203.cloudfunctions.net/Billblis";
    let tokenkey = "token";
    let tokenvalue = "5f2dcd0e6f39ad4515c8397819a04a22bd6ff03d63b0eaa5913c9e93a217c33b";
    let datainjson = {
        "username": getValue("username"),
        "password": getValue("password")
    }

    postWithToken(target_url,tokenkey,tokenvalue,datainjson,responseData);
}


function responseData(result) {
    
    setInner("pesan", result.message);
    
    setCookieWithExpireHour("token", result.token, 2);
    alert("Selamat Datang")
    window.location.href = "dashboard.html";
}