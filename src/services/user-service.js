userService.$inject = ['tokenService', '$http', 'apiUrl'];

export default function userService(tokenSvc, $http, apiUrl) {

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
      console.log('apiURL:', apiUrl);
      return $http.post(`${apiUrl}/signin`, credentials)
        .then(result => {
          tokenSvc.set(result.data.returnedToken);
        });
    },

    signup(credentials) {
      return $http.post(`${apiUrl}/signup`, credentials)
        .then(result => {
          tokenSvc.set(result.data.returnedToken);
        });
    },

  };
}
