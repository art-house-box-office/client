import template from './chart.html';

export default {
  template,
  controller: controllerFunc,
};

controllerFunc.inject = ['$scope'];
function controllerFunc($scope) {
  this.template = template;
}
