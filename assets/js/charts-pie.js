import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const target_url_pemasukan =
  "https://asia-southeast2-xenon-hawk-402203.cloudfunctions.net/getAllPemasukan";

const target_url_pengeluaran =
  "https://asia-southeast2-xenon-hawk-402203.cloudfunctions.net/getAllPengeluaran";

const get = (target_url, responseFunction) => {
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
      console.log("Result:", result); // Log the result to check its content

      try {
        const parsedResult = JSON.parse(result);

        if (Array.isArray(parsedResult)) {
          const pemasukanCount = parsedResult.filter(
            (pemasukan) => pemasukan.jumlah_masuk === "pemasukan"
          ).length;

          const pengeluaranCount = parsedResult.filter(
            (pengeluaran) => pengeluaran.jumlah_keluar === "pengeluaran"
          ).length;

          // Call the response function with the filtered data
          responseFunction(pemasukanCount, pengeluaranCount);
        } else {
          console.error("Invalid response format. Expected an array.");
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    })
    .catch((error) => console.error("Fetch error:", error));
};

window.addEventListener("load", () => {
  get(
    target_url_pengeluaran, target_url_pemasukan,
    ( pemasukanCount, pengeluaranCount) => {
      buildChart(
        "#hs-donut-chart",
        () => ({
          chart: {
            height: 170,
            width: 170,
            type: "donut",
            zoom: {
              enabled: false,
            },
          },
          plotOptions: {
            pie: {
              donut: {
                size: "76%",
              },
            },
          },
          series: [pemasukanCount, pengeluaranCount],
          labels: ["Pemasukan, Pengeluaran"],
          legend: {
            show: false,
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            width: 5,
          },
          grid: {
            padding: {
              top: -12,
              bottom: -11,
              left: -12,
              right: -12,
            },
          },
          states: {
            hover: {
              filter: {
                type: "none",
              },
            },
          },
        }),
        {
          // Tentukan empat warna biru yang berbeda dari sangat tua ke sangat muda
          colors: ["#001f3f", "#0050a1", "#3b82f6", "#a5c3f7"],

          // Warna stroke untuk kontras yang lebih baik
          stroke: {
            colors: ["rgb(255, 255, 255)"],
          },
        }
      );
    }
  );
});




// /**
//  * For usage, visit Chart.js docs https://www.chartjs.org/docs/latest/
//  */
// const pieConfig = {
//   type: 'doughnut',
//   data: {
//     datasets: [
//       {
//         data: [ 33, 33],
//         /**
//          * These colors come from Tailwind CSS palette
//          * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
//          */
//         backgroundColor: [ '#1c64f2', ' #dc3545'],
//         label: 'Dataset 1',
//       },
//     ],
//     labels: [ 'Pemasukan', 'Pengeluaran'],
//   },
//   options: {
//     responsive: true,
//     cutoutPercentage: 80,
//     /**
//      * Default legends are ugly and impossible to style.
//      * See examples in charts.html to add your own legends
//      *  */
//     legend: {
//       display: false,
//     },
//   },
// }

// // change this to the id of your chart element in HMTL
// const pieCtx = document.getElementById('pie')
// window.myPie = new Chart(pieCtx, pieConfig)
