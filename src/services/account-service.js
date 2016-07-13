accountService.$inject = ['$http', 'apiUrl', '$window'];

export default function accountService($http, apiUrl, $window) {

  return {
    // all Companies
    get() {
      return $http
      .get(`${apiUrl}/companies`)
      .then(r => r.data);
    },
    // specific Company
    getCompany(companyId) {
      return $http
      .get(`${apiUrl}/companies/${companyId}`)
      .then(r => r.data);
    },
    // get company by user ID
    getCompanyByUserId(userId) {
      return $http
        .get(`${apiUrl}/users/${userId}`)
        .then(r => r.data.company._id)
        .then(company => {
          return $http
            .get(`${apiUrl}/companies/${company}`)
            .then(r => r.data.name);
        });
    },
    // add Company and updates current User field: company
    add(company) {
      const userId = $window.localStorage.getItem('userID');
      return $http
      .post(`${apiUrl}/companies`, { name: company })
      .then(r => r.data._id)
      .then(id => {
        return $http
          .put(`${apiUrl}/users/${userId}`, { company: id })
          .then(r => r.data);
      });
    },

    // delete Company
    delete(companyId) {
      return $http
      .delete(`${apiUrl}/companies/${companyId}`)
      .then(r => r.data);
    },
    // add Location
    addLocation(location) {
      const userId = $window.localStorage.getItem('userID');
      return $http
        .get(`${apiUrl}/users/${userId}`)
        .then(r => r.data.company._id)
        .then(companyId => {
          location.company = companyId;
          return $http
            .post(`${apiUrl}/locations`, location)
            .then(r => r.data._id)
            .then(locId => {
              return $http
                .put(`${apiUrl}/companies/${companyId}`, { locations: locId })
                .then(r => r.data);
            });
        });
    },

    // edit Location
    editLocation(locationData, locationId) {
      return $http.put(`${apiUrl}/locations/${locationId}`, locationData)
        .then(r => r.data);


    },


    // Get Location by User Id
    getLocationsByUserId(userId) {
      console.log('start fetch');
      return $http
        .get(`${apiUrl}/users/${userId}`)
        .then(r => r.data.company._id)
        .then(companyId => {
          return $http
            .get(`${apiUrl}/locations/bycompany/${companyId}`)
            .then(r => r.data);
        });

    },

  };
}
