configHttp.$inject = ['$httpProvider'];

export default function configHttp($httpProvider) {
  $httpProvider.interceptors.push(interceptor);
}

interceptor.$inject = ['tokenService', '$state'];

function interceptor(tokenSvc, $state) {

  return {
    request(config) {
      config.headers = config.headers || {};
      const token = tokenSvc.get();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }	   
      return config;
    },

    responseError(response) {
      if (response.status >= 400 && response.status < 500) {
        tokenSvc.destroy();
        $state.go('landing');
      }
      return Promise.reject(response);
    },
  };
}
