/**
 * For usage, visit Chart.js docs https://www.chartjs.org/docs/latest/
 */
const barConfig = {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
    datasets: [
      {
        label: 'Pemasukan',
        backgroundColor: '#0694a2',
        // borderColor: window.chartColors.red,
        borderWidth: 1,
        data: [3, 14, 52, 74, 33, 90, 70, 50, 65, 45, 100, 80],
      },
      {
        label: 'Pengeluaran',
        backgroundColor: '#7e3af2',
        // borderColor: window.chartColors.blue,
        borderWidth: 1,
        data: [10, 20, 30, 30, 40, 50, 60, 70, 75, 80, 45, 90],
      },
    ],
  },
  options: {
    responsive: true,
    legend: {
      display: false,
    },
  },
}

const barsCtx = document.getElementById('bars')
window.myBar = new Chart(barsCtx, barConfig)
