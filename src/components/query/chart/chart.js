import template from './chart.html';
import styles from './chart.scss';

import Chart from 'chart.js';

export default {
  template,
  bindings: {
    info: '<',
    array: '<',
    count: '<',
  },
  controller: ['$scope', controllerFunc],
};

function controllerFunc($scope) {
  this.template = template;
  this.styles = styles;
  this.chartType = 'bar';

  $scope.$watch('$ctrl.count', () => {
    const params = (this.array[0] && this.array[0].sequence) ? this.array[0].sequence : null;
    if (params) this.createChart();
  });

  $scope.$watch('$ctrl.chartType', () => {
    if ($scope.myChart) this.createChart();
  });

  this.createChart = () => {
    if ($scope.myChart) $scope.myChart.destroy();
    const ctx = document.getElementById('myChart');
    const datasets = createDataSets(this.array);
    $scope.myChart = new Chart(ctx, {
      type: this.chartType,
      lineTension: 0.2,
      borderWidth: (this.chartType === 'bar') ? 1 : 4,
      data: {
        labels: ['Feb', 'March', 'April', 'May', 'June', 'July'],
        datasets,
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
  };

  function createDataSets(myarray) {
    const sets = [];
    myarray.forEach((e, index) => {
      sets.push(
        {
          label: `${e.name} `,
          data: [
            e.sequence[1].avgAdm,
            e.sequence[2].avgAdm,
            e.sequence[3].avgAdm,
            e.sequence[4].avgAdm,
            e.sequence[5].avgAdm,
            e.sequence[6].avgAdm,
          ],
          backgroundColor: [
            `rgba(${255 - index * 30}, 159, ${100 + index * 30}, 0.5)`,
            `rgba(${255 - index * 30}, 159, ${100 + index * 30}, 0.5)`,
            `rgba(${255 - index * 30}, 159, ${100 + index * 30}, 0.5)`,
            `rgba(${255 - index * 30}, 159, ${100 + index * 30}, 0.5)`,
            `rgba(${255 - index * 30}, 159, ${100 + index * 30}, 0.5)`,
            `rgba(${255 - index * 30}, 159, ${100 + index * 30}, 0.5)`,
            // 'hsla(50, 70%, 50%, 1)',
          ],
          borderColor: [
            `rgba(${255 - index * 2}, 159, ${100 + index * 2}, 0.8)`,
            `rgba(${255 - index * 2}, 159, ${100 + index * 2}, 0.8)`,
            `rgba(${255 - index * 2}, 159, ${100 + index * 2}, 0.8)`,
            `rgba(${255 - index * 2}, 159, ${100 + index * 2}, 0.8)`,
            `rgba(${255 - index * 2}, 159, ${100 + index * 2}, 0.8)`,
            `rgba(${255 - index * 2}, 159, ${100 + index * 2}, 0.8)`,
          ],
          fill: false,
        }
      );
    }, this);

    return sets;
  }

}
