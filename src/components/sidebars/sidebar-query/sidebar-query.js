import template from './sidebar-query.html';
import style from '../sidebar.scss';

export default {
  template,
  bindings: {
    companyID: '=',
  },
  controller: [
    '$mdSidenav',
    function controller($mdSidenav) {
      this.style = style;
      this.closeLeftSidenav = () => $mdSidenav('left').close();
    },
  ],
};
