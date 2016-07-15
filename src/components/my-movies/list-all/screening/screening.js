import template from './screening.html';
import style from './screening.scss';

export default {
  template,
  bindings: {
    data: '=',
  },
  controller(screeningService) {
    this.style = style;

    this.editing = false;

    this.submitEdit = () => {
      if (this.putData.admissionsTotal && this.putData.attendanceTotal) {
        screeningService.edit(this.putData, this.data._id)
          .then(() => {
            this.data.attendanceTotal = this.putData.attendanceTotal;
            this.data.admissionsTotal = this.putData.admissionsTotal;
            this.putData = {};
            this.editing = false;
          });
      }
    };
  },
};
