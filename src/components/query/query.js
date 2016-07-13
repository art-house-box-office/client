import template from './query.html';
import style from './query.scss';

export default {
  template,
  bindings: {
    data: '<',
  },
  controller() {
    this.style = style;
  },
};
