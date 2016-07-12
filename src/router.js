configRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function configRoutes($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('landing', {
      url: '/',
      data: { requiresAuth: false },
      views: {
        header: { component: 'headerLoggedIn' },
        sidebar: { component: 'sidebarTrends' },
        main: { component: 'landing' },
      },
    })
    .state('trends', {
      url: '/trends',
      data: { requiresAuth: true },
      views: {
        header: { component: 'headerLoggedIn' },
        sidebar: { component: 'sidebarTrends' },
        main: { template: '<h1>Neo said that he got in or something</h1>' },
      },
    })
    .state('account', {
      url: '/account',
      data: { requiresAuth: true },
      views: {
        header: { component: 'headerLoggedIn' },
        sidebar: { component: 'sidebarTrends' },
        main: { component: 'account' },
      },
    });

  $urlRouterProvider.otherwise('/');

}
