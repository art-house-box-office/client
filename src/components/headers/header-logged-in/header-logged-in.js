import template from './header-logged-in.html';
import style from './header-logged-in.scss';

export default {
  template,
  controller($state) {
    this.style = style;
    this.$state = $state;
  }, 
};
