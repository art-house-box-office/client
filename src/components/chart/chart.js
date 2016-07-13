import template from './chart.html';
import styles from './chart.scss';

import Chart from 'chart.js';

export default {
  template,
  bindings: {
    info: '<',
  },
  controller: controllerFunc,
};

function controllerFunc() {
  this.template = template;
  this.styles = styles;
  const sequence = this.info.sequence;
  const ctx = document.getElementById('myChart');

  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Feb', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Average Box Office Gross per Screen',
        data: [
          sequence[1].avgAdm,
          sequence[2].avgAdm,
          sequence[3].avgAdm,
          sequence[4].avgAdm,
          sequence[5].avgAdm,
          sequence[6].avgAdm,
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      }],
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
          },
        }],
      },
    },
  });
}
