tokenService.$inject = ['$window', 'tokenName'];

export default function tokenService($window, tokenName) {
  return {
    get() {
      return $window.localStorage.getItem(tokenName);
    },
    destroy() {
      $window.localStorage.removeItem(tokenName);
    },
    set(token) {
      $window.localStorage.setItem(tokenName, token);
    },
  };
}
