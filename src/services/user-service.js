userService.$inject = ['tokenService', '$http', 'apiUrl', '$window'];

export default function userService(tokenSvc, $http, apiUrl, $window) {

  const current = tokenSvc.get();
  if (current) {
    $http.get(`${apiUrl}/verify`)
      .catch(() => tokenSvc.destroy());
  }

  return {

    isAuthenticated() {
      return !!tokenSvc.get();
    },

    logout() {
      tokenSvc.destroy();
    },

    login(credentials) {
      return $http.post(`${apiUrl}/signin`, credentials)
        .then(result => {
          $window.localStorage.setItem('user', result.data.username);
          $window.localStorage.setItem('userID', result.data.id);
          $window.localStorage.setItem('userEmail', result.data.email);
          if (result.data.company) $window.localStorage.setItem('companyID', result.data.company);
          tokenSvc.set(result.data.returnedToken);
        });
    },

    signup(credentials) {
      return $http.post(`${apiUrl}/signup`, credentials)
        .then(result => {
          $window.localStorage.setItem('userID', result.data.id);
          $window.localStorage.setItem('user', result.data.username);
          tokenSvc.set(result.data.returnedToken);
        });
    },

  };
}
