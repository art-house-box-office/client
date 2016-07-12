auth.$inject = ['$rootScope', 'userService', 'ngDialog', '$state'];

export default function auth($rootScope, userSvc, ngDialog, $state) {

  $rootScope.$on('$stateChangeStart', (event, toState, toParams) => {

    if (toState.data && toState.data.requiresAuth && !userSvc.isAuthenticated()) {

      event.preventDefault();

      const dialog = ngDialog.open({
        template: '<user-auth success="success()"></user-auth>',
        plain: true,
        controller($scope) {
          $scope.success = () => {
            dialog.close();
            return $state.go(toState.name, toParams);
          };
        },
      });

      dialog.closePromise
        .catch(err => console.log(`failure!\n\n ${err}`));
    }

  });
}
