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

  $altscope.$watch('$ctrl.button', (newEvent) => {
    // $state.go('query', { button: 'none' });
    if (newEvent === 'all') this.addquery();
    if (newEvent === 'my') this.addMyQuery();
    if (newEvent === 'other') this.addOtherQuery();

  });

  if (!this.arrayOfQueries) this.arrayOfQueries = [];

  this.addquery = function addquery(typeOfQuery) {
    const dialog = ngDialog.open({
      template: '<new-query newq="newq(qobj)" empty-return="empty"></new-query>',
      plain: true,
      controller: ['$scope', 'screeningService', ($scope, screeningService) => {
        $scope.empty = false;
        $scope.newq = (qobj) => {
          qobj.type = typeOfQuery || 'all';
          if (this.companyID) qobj.company = this.companyID;
          screeningService.agg({ params: qobj })
          .then(data => {
            if (data.totals && data.totals.count < 1) {
              $scope.empty = true;
            } else {
              data.name = qobj.name;
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
    const index = this.arrayOfQueries.findIndex(e => e.name === query.name);
    if (index !== -1) {
      this.arrayOfQueries.splice(index, 1);
      queryService.set(JSON.stringify(this.arrayOfQueries));
      this.count = this.arrayOfQueries.length;
    }
  };

}
