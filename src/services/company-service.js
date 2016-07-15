companyService.$inject = ['$window'];

export default function companyService($window) {
  return {
    get() {
      return $window.localStorage.getItem('companyID');
    },
    destroy() {
      $window.localStorage.removeItem('companyID');
    },
    set(companyID) {
      $window.localStorage.setItem('companyID', companyID);
    },
  };
}
