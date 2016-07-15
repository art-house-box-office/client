configRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function configRoutes($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('landing', {
      url: '/',
      data: { requiresAuth: false },
      views: {
        header: { component: 'headerComponent' },
        main: { component: 'landing' },
      },
    })
    .state('trends', {
      url: '/trends',
      data: { requiresAuth: false },
      resolve: {
        topAdm: ['screeningService', screeningService => screeningService.topTenAdm()],
      },
      views: {
        header: { component: 'headerComponent' },
        main: { component: 'trends' },
      },
    })
    .state('query', {
      url: '/query?button',
      data: { requiresAuth: false },
      resolve: {
        arrayOfQueries: ['queryService', queryService => queryService.get()],
        companyID: ['companyService', companyService => companyService.get()],
        button: ['$stateParams', (params) => params.button],
      },
      views: {
        header: { component: 'headerComponent' },
        main: { component: 'query' },
      },
    })
    .state('query.all', {
      url: '/all',
      data: { requiresAuth: false },
      views: {
        query: { component: 'queryAll' },
      },
    })
    .state('query.my', {
      url: '/my',
      data: { requiresAuth: false },
      views: {
        query: { component: 'queryMy' },
      },
    })
    .state('query.other', {
      url: '/other',
      data: { requiresAuth: false },
      views: {
        query: { component: 'queryOther' },
      },
    })
    .state('account', {
      url: '/account',
      data: { requiresAuth: true },
      views: {
        header: { component: 'headerComponent' },
        main: { component: 'account' },
      },
    })
    .state('my-movies', {
      url: '/mymovies',
      data: { requiresAuth: true },
      views: {
        header: { component: 'headerComponent' },
        main: { component: 'myMovies' },
      },
    })
    .state('my-movies.list-all', {
      url: '/listall',
      data: { requiresAuth: true },
      views: {
        movies: { component: 'listAll' },
      },
    })
    .state('my-movies.add-new', {
      url: '/addnew',
      data: { requiresAuth: true },
      views: {
        movies: { component: 'addNew' },
      },
    })
    .state('about', {
      url: '/about',
      data: { requiresAuth: false },
      views: {
        header: { component: 'headerComponent' },
        main: { component: 'about' },
      },
    })
    .state('about.team', {
      url: '/team',
      data: { requiresAuth: false },
      views: {
        about: { component: 'aboutTeam' },
      },
    });

  $urlRouterProvider.otherwise('/trends');

}
