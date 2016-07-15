import template from './list-all.html';
import style from './list-all.scss';

export default {
  template,
  controller: ['movieService', 'screeningService', 'companyService', function (movieService, screeningService, companyService) {
    this.style = style;
    this.companyId = companyService.get();
    screeningService.getByCompany(this.companyId)
      .then(screenings => {
        this.screenings = screenings;

      });

  }],
};
