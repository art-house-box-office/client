export default [
  '$rootScope',
  '$state',
  '$mdDialog',
  'userService',
  function auth($rootScope, $state, $mdDialog, userSvc) {
    $rootScope.$on('$stateChangeStart', (event, toState, toParams) => {
      if (toState.data && toState.data.requiresAuth && !userSvc.isAuthenticated()) {
        event.preventDefault();

        $mdDialog.show({
          autoWrap: false,
          template: '<user-auth success="success()"></user-auth>',
          controller: [
            '$scope',
            function controller($scope) {
              $scope.success = () => $mdDialog.hide()
                .then(() => $state.go('trends', toParams));
            },
          ],
          clickOutsideToClose: true,
        });
      }
    });
  },
];
