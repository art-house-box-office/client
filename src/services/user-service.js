userService.$inject = ['tokenService', '$http', 'apiUrl'];

export default function userService(tokenSvc, $http, apiUrl) {

  const current = tokenSvc.get();
  if (current) {
    $http.get(`${apiUrl}/api/verify`)
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
      return $http.post(`${apiUrl}/api/signin`, credentials)
        .then(result => {
          tokenSvc.set(result.data.returnedToken);
        });
    },

    signup(credentials) {
      return $http.post(`${apiUrl}/api/signup`, credentials)
        .then(result => {
          tokenSvc.set(result.data.returnedToken);
        });
    },

  };
}
