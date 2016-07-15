import template from './list-all.html';
import style from './list-all.scss';

export default {
  template,
  controller: [
    '$mdDialog',
    'screeningService',
    'companyService',
    function controller($mdDialog, screeningService, companyService) {
      this.style = style;
      this.companyId = companyService.get();

      this.fetchScreenings = () => {
        screeningService.getByCompany(this.companyId)
        .then(screenings => {
          this.screenings = screenings;
        });
      };

      this.edit = (index) => {
        const screening = this.screenings[index];

        $mdDialog.show({
          template: '<screening data="screenData"></screening>',
          controller: [
            '$scope',
            function controller($scope) { // eslint-disable-line
              $scope.screenData = screening;
            },
          ],
          clickOutsideToClose: true,
        })
        .then(() => {
          this.fetchScreenings();
        });
      
      };
    },
  ],
};
