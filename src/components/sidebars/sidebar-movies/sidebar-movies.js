import template from './sidebar-movies.html';
import style from '../sidebar.scss';

export default {
  template,
  controller() {
    this.style = style;
  },
};
