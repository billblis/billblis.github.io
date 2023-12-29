import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

export const target_url_pemasukan = "https://asia-southeast2-xenon-hawk-402203.cloudfunctions.net/getAllPemasukan";

const pemasukanCount = (count) => {
    const resultCountElement = document.getElementById("pemasukanCount");
    resultCountElement.innerHTML = ` <p>${count}</p>`;  
  };

  const getPemasukan = (target_url) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", getCookie("Authorization"));
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(target_url, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      const jsonData = JSON.parse(result);

      const pemasukancount = jsonData.length;

      pemasukanCount(pemasukancount);
    })
    .catch((error) => console.log("error", error));
};
getPemasukan(target_url_pemasukan);
  