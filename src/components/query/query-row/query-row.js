import template from './query-row.html';
import styles from './query-row.scss';

export default {
  template,
  bindings: {
    queryitem: '<',
    remove: '&',
  },
  controller,
};

function controller() {
  this.styles = styles;

  this.removeme = function removeme() {
    this.remove(this.queryitem.name);
  };

}
