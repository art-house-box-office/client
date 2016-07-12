import template from './header.html';
import style from './header.scss';

export default {
  template,
  controller($state) {
    this.style = style;
    this.$state = $state;
  }, 
};
