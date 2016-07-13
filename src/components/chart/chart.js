import template from './chart.html';
import styles from './chart.scss';

import Chart from 'chart.js';

export default {
  template,
  bindings: {
    info: '<',
  },
  controller: ['$scope', controllerFunc],
};

function controllerFunc($scope) {
  this.template = template;
  this.styles = styles;
  this.myChart = null;

  $scope.$watch('$ctrl.info', () => {
    const params = (this.info && this.info.sequence) ? this.info.sequence : null;
    if (params) {
      const ctx = document.getElementById('myChart');
      createChart(params, ctx);
    }
  });

  function createChart(series, ctx) {
    this.myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Feb', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Average Box Office Gross per Screen',
          data: [
            series[1].avgAdm,
            series[2].avgAdm,
            series[3].avgAdm,
            series[4].avgAdm,
            series[5].avgAdm,
            series[6].avgAdm,
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
        },
        {
          label: 'Average Box Office Gross per Screen',
          data: [
            series[4].avgAdm,
            series[5].avgAdm,
            series[6].avgAdm,
            series[1].avgAdm,
            series[2].avgAdm,
            series[3].avgAdm,
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
        responsive: true,
        maintainAspectRatio: true,
      },
    });
  }

}
