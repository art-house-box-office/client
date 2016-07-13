configRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function configRoutes($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('landing', {
      url: '/',
      data: { requiresAuth: false },
      views: {
        header: { component: 'headerComponent' },
        sidebar: { component: 'sidebarTrends' },
        main: { component: 'landing' },
      },
    })
    .state('trends', {
      url: '/trends',
      data: { requiresAuth: false },
      views: {
        header: { component: 'headerComponent' },
        sidebar: { component: 'sidebarTrends' },
        main: { component: 'trends' },
      },
    })
    .state('query', {
      url: '/query',
      data: { requiresAuth: false },
      resolve: { info: ['screeningService', screeningService => screeningService.agg()] },
      views: {
        header: { component: 'headerComponent' },
        sidebar: { component: 'sidebarQuery' },
        main: { component: 'query' },
      },
    })
    .state('account', {
      url: '/account',
      data: { requiresAuth: true },
      views: {
        header: { component: 'headerComponent' },
        sidebar: { component: 'sidebarTrends' },
        main: { component: 'account' },
      },
    })
    .state('my-movies', {
      url: '/mymovies',
      data: { requiresAuth: true },
      views: {
        header: { component: 'headerComponent' },
        sidebar: { component: 'sidebarMovies' },
        main: { component: 'myMovies' },
      },
    });

  $urlRouterProvider.otherwise('/');

}
