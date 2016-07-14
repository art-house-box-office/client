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
      resolve: { arrayOfQueries: ['queryService', queryService => queryService.get()] },
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
    })
    .state('my-movies.list-all', {
      url: '/listall',
      data: { requiresAuth: true },
      views: {
        movies: { component: 'listAll' },
      },
    })
    .state('my-movies.list-upcoming', {
      url: '/listupcoming',
      data: { requiresAuth: true },
      views: {
        movies: { component: 'listUpcoming' },
      },
    })
    .state('my-movies.list-recent', {
      url: '/listrecent',
      data: { requiresAuth: true },
      views: {
        movies: { component: 'listRecent' },
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
