import template from './query-row.html';
import styles from './query-row.scss';

export default {
  template,
  bindings: {
    queryitem: '<',
    remove: '&',
    colorbg: '<',
  },
  controller,
};

function controller() {
  this.styles = styles;
  this.querytext = '';

  console.log(this.queryitem);

  Object.keys(this.queryitem.queries).forEach((e, index, arr) => {
    if (e !== 'name') {
      this.querytext += ` ${e}=`;
      this.querytext += `${this.queryitem.queries[e]} | `;
      if (index === arr.length - 1) {
        this.querytext = this.querytext.slice(0, this.querytext.length - 2);
      }
    }
  }, this);

  this.removeme = function removeme() {
    this.remove(this.queryitem.name);
  };
}
