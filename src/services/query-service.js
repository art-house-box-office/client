queryService.$inject = ['$window'];

export default function queryService($window) {
  return {
    get() {
      return JSON.parse($window.localStorage.getItem('query'));
    },
    destroy() {
      $window.localStorage.removeItem('query');
    },
    set(query) {
      $window.localStorage.setItem('query', query);
    },
  };
}
