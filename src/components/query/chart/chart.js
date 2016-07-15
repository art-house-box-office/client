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
        tooltips: {
          enabled: true,
          mode: 'single',
          callbacks: {
            label: function(tooltipItems, data) { // eslint-disable-line
              return '$' + Math.floor(tooltipItems.yLabel); // eslint-disable-line
            },
          },
        },
        responsive: true,
        maintainAspectRatio: true,
      },
    });
  };

  function createDataSets(myarray) {
    const sets = [];
    myarray.forEach((e, index) => {
      const colorArrayBG = [
        `rgba(${235 - index * 40}, ${50 + 150 * ((index + 2) % 2)}, ${10 + index * 40}, 0.5)`,
        `rgba(${235 - index * 40}, ${50 + 150 * ((index + 2) % 2)}, ${10 + index * 40}, 0.5)`,
        `rgba(${235 - index * 40}, ${50 + 150 * ((index + 2) % 2)}, ${10 + index * 40}, 0.5)`,
        `rgba(${235 - index * 40}, ${50 + 150 * ((index + 2) % 2)}, ${10 + index * 40}, 0.5)`,
        `rgba(${235 - index * 40}, ${50 + 150 * ((index + 2) % 2)}, ${10 + index * 40}, 0.5)`,
        `rgba(${235 - index * 40}, ${50 + 150 * ((index + 2) % 2)}, ${10 + index * 40}, 0.5)`,
      ];
      const colorArrayBorder = [
        `rgba(${235 - index * 40}, ${50 + 150 * ((index + 2) % 2)}, ${10 + index * 40}, 0.8)`,
        `rgba(${235 - index * 40}, ${50 + 150 * ((index + 2) % 2)}, ${10 + index * 40}, 0.8)`,
        `rgba(${235 - index * 40}, ${50 + 150 * ((index + 2) % 2)}, ${10 + index * 40}, 0.8)`,
        `rgba(${235 - index * 40}, ${50 + 150 * ((index + 2) % 2)}, ${10 + index * 40}, 0.8)`,
        `rgba(${235 - index * 40}, ${50 + 150 * ((index + 2) % 2)}, ${10 + index * 40}, 0.8)`,
        `rgba(${235 - index * 40}, ${50 + 150 * ((index + 2) % 2)}, ${10 + index * 40}, 0.8)`,
      ];

      sets.push(
        {
          label: `${e.name} `,
          data: [
            e.sequence[1].avgAdm || 0,
            e.sequence[2].avgAdm || 0,
            e.sequence[3].avgAdm || 0,
            e.sequence[4].avgAdm || 0,
            e.sequence[5].avgAdm || 0,
            e.sequence[6].avgAdm || 0,
          ],
          backgroundColor: colorArrayBG,
          borderColor: colorArrayBorder,
          pointBackgroundColor: colorArrayBG,
          pointBorderColor: colorArrayBorder,
          fill: false,
        }
      );
    }, this);

    return sets;
  }

}
