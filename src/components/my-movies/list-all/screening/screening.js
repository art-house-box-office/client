import template from './screening.html';
import style from './screening.scss';

export default {
  template,
  bindings: {
    data: '=',
  },
  controller(screeningService, $mdDialog) {
    this.style = style;
    this.putData = {};

    this.submitEdit = () => {
      if (this.putData.admissionsTotal || this.putData.attendanceTotal) {
        console.log(this.putData);
        screeningService.edit(this.putData, this.data._id)
          .then(() => {
            if (this.putData.attendanceTotal) {
              this.data.attendanceTotal = this.putData.attendanceTotal;
            }
            if (this.putData.admissionsTotal) {
              this.data.admissionsTotal = this.putData.admissionsTotal;
            }
            this.putData = {};
            $mdDialog.hide();
          });
      } else {
        $mdDialog.hide();
      }
    };

    this.deleteScreening = () => {
      screeningService.delete(this.data._id)
        .then(() => {
          $mdDialog.hide();
        });
    };
  },
};
