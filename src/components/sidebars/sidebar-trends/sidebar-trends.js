import template from './sidebar-trends.html';
import style from '../sidebar.scss';

export default {
  template,
  controller: [
    '$mdSidenav',
    function controller($mdSidenav) {
      this.style = style;
      this.closeLeftSidenav = () => $mdSidenav('left').close();
    },
  ],
};
