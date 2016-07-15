import template from './header.html';
import style from './header.scss';

export default {
  template,
  controller: [
    '$state',
    '$mdSidenav',
    'userService',
    function controller($state, $mdSidenav, userService) {
      this.style = style;
      this.$state = $state;

      this.isLoggedIn = () => userService.isAuthenticated();

      this.logout = () => userService.logout();

      this.openLeftSidenav = () => {
        $mdSidenav('left').toggle();
      };

      if (this.isLoggedIn()) {
        this.navItems = [
          {
            sref: 'trends',
            name: 'Trends',
          },
          {
            sref: 'query',
            name: 'Query',
          },
          {
            sref: 'my-movies.list-all',
            name: 'My Movies',
          },
          {
            sref: 'account',
            name: 'Account',
          },
          {
            sref: 'landing',
            name: 'Log Out',
            click: () => this.logout(),
          },
        ];
      } else {
        this.navItems = [
          {
            sref: 'trends',
            name: 'Trends',
          },
          {
            sref: 'query',
            name: 'Query',
          },
          {
            sref: 'account', // or trends?
            name: 'Log In',
          },
        ];
      }
    },
  ],
};
