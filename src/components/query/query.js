import template from './query.html';
import style from './query.scss';

export default {
  template,
  bindings: {
    info: '<',
  },
  controller: ['$state', 'ngDialog', controller],
};

function controller($state, ngDialog) {
  this.style = style;
  this.qobj = null;
  this.arrayOfQueries = [];

  this.addquery = function addquery() {
    const dialog = ngDialog.open({
      template: '<new-query newq="newq(qobj)"></new-query>',
      plain: true,
      controller: ['$scope', 'screeningService', ($scope, screeningService) => {
        $scope.newq = (qobj) => {
          dialog.close();
          screeningService.agg({ params: qobj })
          .then(data => {
            console.log(qobj.name);
            data.name = qobj.name;
            this.arrayOfQueries.push(data);
            return this.info = data;
          });
        };
      }],
    });

    dialog.closePromise
      .catch(err => console.log(err));
  };

  this.removequery = function removequery(query) {
    const index = this.arrayOfQueries.findIndex(e => e.name === query.name);
    if (index !== -1) this.arrayOfQueries.splice(index, 1);
  };

}
