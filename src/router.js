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
    })
    .state('dashboard', {
      url: '/dash',
      data: { requiresAuth: true },
      views: {
        header: { component: 'headerComponent' },
        sidebar: { component: 'sidebar' },
        main: { template: '<h1>Neo said that he got in or something</h1>' },
      },
    });

  $urlRouterProvider.otherwise('/');

}
