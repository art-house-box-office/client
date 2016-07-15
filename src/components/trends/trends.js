import template from './trends.html';
import style from './trends.scss';

export default {
  template,
  bindings: {
    topAdm: '<',
  },
  controller: ['$scope', 'screeningService', controller],
};

function controller($scope, screeningService) {
  this.style = style;
  this.arrayOfQueries = [];
  this.count = 0;

  const qobj = { type: 'all', name: 'Trends' };
  screeningService.agg({ params: qobj })
  .then(data => {
    if (data.totals && data.totals.count < 1) {
      $scope.empty = true;
    } else {
      data.name = qobj.name;
      data.queries = qobj;
      if (!this.arrayOfQueries) this.arrayOfQueries = [];
      this.arrayOfQueries.push(data);
      this.count = this.arrayOfQueries.length;
    }
  });
}
