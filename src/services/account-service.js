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
          .then(r => console.log('success'));
      });

    },
    // update Company
    update(companyId) {
      return $http
      .update(`${apiUrl}/companies/${companyId}`)
      .then(r => r.data);
    },
    // delete Company
    delete(companyId) {
      return $http
      .delete(`${apiUrl}/companies/${companyId}`)
      .then(r => r.data);
    },
    // add Location
    addLoc(location) {
      return $http
      .post(`${apiUrl}/locations`, location)
      .then(r => r.data);
    },
  };
}
