import template from './sidebar-about.html';
import style from '../sidebar.scss';

export default {
  template,
  controller() {
    this.style = style;
  },
};
