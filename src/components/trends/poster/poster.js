import template from './poster.html';
import styles from './poster.scss';

export default {
  template,
  bindings: {
    toplink: '<',
    toptitle: '<',
    topdata: '<',
  },
  controller: ['$scope', controller],
};

function controller() {
  this.styles = styles;

}
