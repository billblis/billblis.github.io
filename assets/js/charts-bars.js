/**
 * For usage, visit Chart.js docs https://www.chartjs.org/docs/latest/
 */
// const barConfig = {
//   type: 'bar',
//   data: {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
//     datasets: [
//       {
//         label: 'Pemasukan',
//         backgroundColor: '#0694a2',
//         // borderColor: window.chartColors.red,
//         borderWidth: 1,
//         data: [3, 14, 52, 74, 33, 90, 70, 50, 65, 45, 100, 80],
//       },
//       {
//         label: 'Pengeluaran',
//         backgroundColor: '#7e3af2',
//         // borderColor: window.chartColors.blue,
//         borderWidth: 1,
//         data: [10, 20, 30, 30, 40, 50, 60, 70, 75, 80, 45, 90],
//       },
//     ],
//   },
//   options: {
//     responsive: true,
//     legend: {
//       display: false,
//     },
//   },
// }

// const barsCtx = document.getElementById('bars')
// window.myBar = new Chart(barsCtx, barConfig)

window.addEventListener("load", () => {
  (function () {
    buildChart(
      "#hs-multiple-bar-charts",
      (mode) => ({
        chart: {
          type: "bar",
          height: 200,
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        series: [
          {
            name: "Pemasukan",
            data: [
              23000, 44000, 55000, 57000, 56000, 61000, 58000, 63000, 60000,
              66000, 34000, 78000,
            ],
          },
          {
            name: "Pengeluaran",
            data: [
              17000, 76000, 85000, 101000, 98000, 87000, 105000, 91000, 114000,
              94000, 67000, 66000,
            ],
          },
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "16px",
            borderRadius: 0,
          },
        },
        legend: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 8,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          crosshairs: {
            show: false,
          },
          labels: {
            style: {
              colors: "#9ca3af",
              fontSize: "13px",
              fontFamily: "Inter, ui-sans-serif",
              fontWeight: 400,
            },
            offsetX: -2,
            formatter: (title) => title.slice(0, 3),
          },
        },
        yaxis: {
          labels: {
            align: "left",
            minWidth: 0,
            maxWidth: 140,
            style: {
              colors: "#9ca3af",
              fontSize: "13px",
              fontFamily: "Inter, ui-sans-serif",
              fontWeight: 400,
            },
            formatter: (value) => (value >= 1000 ? `${value / 1000}k` : value),
          },
        },
        states: {
          hover: {
            filter: {
              type: "darken",
              value: 0.9,
            },
          },
        },
        tooltip: {
          y: {
            formatter: (value) =>
              `$${value >= 1000 ? `${value / 1000}k` : value}`,
          },
          custom: function (props) {
            const { categories } = props.ctx.opts.xaxis;
            const { dataPointIndex } = props;
            const title = categories[dataPointIndex];
            const newTitle = `${title}`;

            return buildTooltip(props, {
              title: newTitle,
              mode,
              hasTextLabel: true,
              wrapperExtClasses: "min-w-[120px]",
              labelDivider: ":",
              labelExtClasses: "ms-2",
            });
          },
        },
        responsive: [
          {
            breakpoint: 568,
            options: {
              chart: {
                height: 300,
              },
              plotOptions: {
                bar: {
                  columnWidth: "14px",
                },
              },
              stroke: {
                width: 8,
              },
              labels: {
                style: {
                  colors: "#9ca3af",
                  fontSize: "11px",
                  fontFamily: "Inter, ui-sans-serif",
                  fontWeight: 400,
                },
                offsetX: -2,
                formatter: (title) => title.slice(0, 3),
              },
              yaxis: {
                labels: {
                  align: "left",
                  minWidth: 0,
                  maxWidth: 140,
                  style: {
                    colors: "#9ca3af",
                    fontSize: "11px",
                    fontFamily: "Inter, ui-sans-serif",
                    fontWeight: 400,
                  },
                  formatter: (value) =>
                    value >= 1000 ? `${value / 1000}k` : value,
                },
              },
            },
          },
        ],
      }),
      {
        colors: ["#2563eb", "#d1d5db"],
        grid: {
          borderColor: "#e5e7eb",
        },
      },
      {
        colors: ["#6b7280", "#2563eb"],
        grid: {
          borderColor: "#374151",
        },
      }
    );
  })();
});
