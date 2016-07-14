import template from './query.html';
import style from './query.scss';

export default {
  template,
  bindings: {
    arrayOfQueries: '<',
  },
  controller: ['$state', 'ngDialog', 'queryService', controller],
};

function controller($state, ngDialog, queryService) {
  this.style = style;
  this.qobj = null;
  // if (!this.arrayOfQueries) this.arrayOfQueries = [];
  this.count = 0;

  this.addquery = function addquery() {
    const dialog = ngDialog.open({
      template: '<new-query newq="newq(qobj)"></new-query>',
      plain: true,
      controller: ['$scope', 'screeningService', ($scope, screeningService) => {
        $scope.newq = (qobj) => {
          dialog.close();
          screeningService.agg({ params: qobj })
          .then(data => {
            data.name = qobj.name;
            this.arrayOfQueries.push(data);
            queryService.set(JSON.stringify(this.arrayOfQueries));
            this.count = this.arrayOfQueries.length;
            // return this.info = data;
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
