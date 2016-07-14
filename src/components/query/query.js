import template from './query.html';
import style from './query.scss';

export default {
  template,
  bindings: {
    arrayOfQueries: '=',
  },
  controller: ['$state', 'ngDialog', 'queryService', controller],
};

function controller($state, ngDialog, queryService) {
  this.style = style;
  this.qobj = null;
  this.displayType = 'chart';
  this.count = 0;

  if (!this.arrayOfQueries) this.arrayOfQueries = [];

  this.addquery = function addquery() {
    const dialog = ngDialog.open({
      template: '<new-query newq="newq(qobj)" empty-return="empty"></new-query>',
      plain: true,
      controller: ['$scope', 'screeningService', ($scope, screeningService) => {
        $scope.empty = false;
        $scope.newq = (qobj) => {
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

  this.removequery = function removequery(query) {
    const index = this.arrayOfQueries.findIndex(e => e.name === query.name);
    if (index !== -1) {
      this.arrayOfQueries.splice(index, 1);
      queryService.set(JSON.stringify(this.arrayOfQueries));
      this.count = this.arrayOfQueries.length;
    }
  };

}
