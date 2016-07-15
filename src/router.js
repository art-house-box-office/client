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
      resolve: {
        topAdm: ['screeningService', screeningService => screeningService.topTenAdm()],
      },
      views: {
        header: { component: 'headerComponent' },
        sidebar: { component: 'sidebarTrends' },
        main: { component: 'trends' },
      },
    })
    // .state('trends.current', {
    //   url: '/current',
    //   data: { requiresAuth: false },
    //   views: {
    //     trend: { component: 'trendsCurrent' },
    //   },
    // })
    // .state('trends.archive', {
    //   url: '/archive',
    //   data: { requiresAuth: false },
    //   views: {
    //     trend: { component: 'trendsArchive' },
    //   },
    // })
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
        sidebar: { component: 'sidebarQuery' },
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
        // sidebar: { component: 'sidebarTrends' },
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
    })
    .state('my-movies.list-all', {
      url: '/listall',
      data: { requiresAuth: true },
      views: {
        movies: { component: 'listAll' },
      },
    })
    // .state('my-movies.list-upcoming', {
    //   url: '/listupcoming',
    //   data: { requiresAuth: true },
    //   views: {
    //     movies: { component: 'listUpcoming' },
    //   },
    // })
    // .state('my-movies.list-recent', {
    //   url: '/listrecent',
    //   data: { requiresAuth: true },
    //   views: {
    //     movies: { component: 'listRecent' },
    //   },
    // })
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
        sidebar: { component: 'sidebarAbout' },
      },
    })
    .state('about.info', {
      url: '/info',
      data: { requiresAuth: false },
      views: {
        about: { component: 'aboutInfo' },
      },
    })
    .state('about.team', {
      url: '/team',
      data: { requiresAuth: false },
      views: {
        about: { component: 'aboutTeam' },
      },
    });

  $urlRouterProvider.otherwise('/');

}
