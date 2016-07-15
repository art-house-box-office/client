import template from './query.html';
import style from './query.scss';

export default {
  template,
  bindings: {
    arrayOfQueries: '=',
    companyID: '=',
    button: '<',
  },
  controller: ['$state', 'ngDialog', 'queryService', '$scope', controller],
};

function controller($state, ngDialog, queryService, $altscope) {
  this.style = style;
  this.qobj = null;
  this.displayType = 'chart';
  this.count = 0;
  this.counter = 0;

  $altscope.$watch('$ctrl.button', (newEvent) => {
    // $state.go('query', { button: 'none' });
    if (newEvent === 'all') this.addquery();
    if (newEvent === 'my') this.addMyQuery();
    if (newEvent === 'other') this.addOtherQuery();

  });

  if (!this.arrayOfQueries) this.arrayOfQueries = [];

  this.addquery = function addquery(typeOfQuery) {
    this.counter++;
    const dialog = ngDialog.open({
      template: '<new-query c="counter" newq="newq(qobj)" empty-return="empty"></new-query>',
      plain: true,
      controller: ['$scope', 'screeningService', ($scope, screeningService) => {
        $scope.empty = false;
        $scope.counter = (this.counter > this.arrayOfQueries.length) ? this.counter
        : this.arrayOfQueries.length + 1;
        $scope.newq = (qobj) => {
          qobj.type = typeOfQuery || 'all';
          if (this.companyID) qobj.company = this.companyID;
          screeningService.agg({ params: qobj })
          .then(data => {
            if (data.totals && data.totals.count < 1) {
              $scope.empty = true;
            } else {
              data.name = qobj.name;
              data.uuid = Math.floor((1 + Math.random()) * 0x10000);
              data.queries = qobj;
              // console.log(qobj);
              if (!this.arrayOfQueries) this.arrayOfQueries = [];
              this.arrayOfQueries.push(data);
              queryService.set(JSON.stringify(this.arrayOfQueries));
              this.count = this.arrayOfQueries.length;
              dialog.close();
            }
          });
        };
      }],
    });

    dialog.closePromise
      .catch(err => console.log(err));
  };

  this.addMyQuery = () => {
    this.addquery('my');
  };

  this.addOtherQuery = () => {
    this.addquery('other');
  };

  this.removequery = function removequery(query) {
    const index = this.arrayOfQueries.findIndex(e => e.uuid === query.uuid);
    if (index !== -1) {
      this.arrayOfQueries.splice(index, 1);
      queryService.set(JSON.stringify(this.arrayOfQueries));
      this.count = this.arrayOfQueries.length;
    }
  };

}
