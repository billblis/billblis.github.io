import { postWithToken} from "https://jscroot.github.io/api/croot.js";
import { getValue } from "https://jscroot.github.io/element/croot.js";

const PostSignUp = () => {
    const target_url = "https://asia-southeast2-xenon-hawk-402203.cloudfunctions.net/signup";
    const datainjson = {
        email: getValue("email"),
        username: getValue("username"),
        password: getValue("password"),
    };
    console.log(datainjson);
    postWithToken(target_url, datainjson, responseData);
};

const responseData = (result) => {
    console.log(result);
    if (result.status === true) {
        alert(`Berhasil Masuk ${result.message}`);
        window.location.href = "login.html";
    } else {
        alert(`Gagal Signup, ` + result.message );
    }
};

window.PostSignUp = PostSignUp;