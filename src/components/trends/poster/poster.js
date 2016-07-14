import template from './poster.html';
import styles from './poster.scss';

export default {
  template,
  bindings: {

  },
  controller: ['$scope', controller],
};

function controller() {
  this.styles = styles;
  
}
