// import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

// const target_url_pemasukan = "https://asia-southeast2-xenon-hawk-402203.cloudfunctions.net/getAllPemasukan";

// const pemasukanCount = (count) => {
//     const resultCountElement = document.getElementById("pemasukanCount");
//     resultCountElement.innerHTML = `<td class="px-4 py-3 text-sm">${count}</td>`;  
//   };

//   const getPemasukan = (target_url) => {
//     const myHeaders = new Headers();
//     myHeaders.append("Authorization", getCookie("Authorization"));
//     myHeaders.append("Content-Type", "application/json");
//     const requestOptions = {
//       method: "GET",
//       headers: myHeaders,
//       redirect: "follow",
//     };

//     fetch(target_url, requestOptions)
//     .then((response) => response.text())
//     .then((result) => {
//       const jsonData = JSON.parse(result);
//       const lenghtPemasukanCount = jsonData["data"].length;
//       pemasukanCount(lenghtPemasukanCount);
//     })
//     .catch((error) => console.log("error", error));
// };
// getPemasukan(target_url_pemasukan);
  