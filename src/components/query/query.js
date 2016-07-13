import template from './query.html';
import style from './query.scss';

export default {
  template,
  bindings: {
    info: '<',
  },
  controller() {
    this.style = style;
  },
};
