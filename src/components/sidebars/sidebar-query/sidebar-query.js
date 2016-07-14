import template from './sidebar-query.html';
import style from '../sidebar.scss';

export default {
  template,
  bindings: {
    companyID: '=',
  },
  controller() {
    this.style = style;
  },
};
