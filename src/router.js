configRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function configRoutes($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('landing', {
      url: '/',
      data: { requiresAuth: false },
      views: {
        header: { component: 'headerComponent' },
        sidebar: { component: 'sidebar' },
        main: { component: 'landing' },
      },
    });

  $urlRouterProvider.otherwise('/');

}
