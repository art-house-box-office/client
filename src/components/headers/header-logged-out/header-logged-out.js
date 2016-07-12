import template from './header-logged-out.html';
import style from './header-logged-out.scss';

export default {
  template,
  controller($state) {
    this.style = style;
    this.$state = $state;
  }, 
};
