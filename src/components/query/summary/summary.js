import template from './summary.html';
import styles from './summary.scss';

export default {
  template,
  bindings: {
    info: '<',
    name: '<',
    base: '<',
    index: '<',
  },
  controller,
};

function controller() {
  this.styles = styles;

  this.info.totals.admissions = Math.floor(this.info.totals.admissions);
  this.info.totals.avgAdm = Math.floor(this.info.totals.avgAdm);
  this.info.totals.avgAtt = Math.floor(this.info.totals.avgAtt);

  this.base.admissions = Math.floor(this.base.admissions);
  this.base.avgAdm = Math.floor(this.base.avgAdm);
  this.base.avgAtt = Math.floor(this.base.avgAtt);

  this.admDiff = this.info.totals.admissions - this.base.admissions;
  this.attDiff = this.info.totals.attendance - this.base.attendance;
  this.avgAdmDiff = this.info.totals.avgAdm - this.base.avgAdm;
  this.avgAttDiff = this.info.totals.avgAtt - this.base.avgAtt;

  this.querytext = '';

  Object.keys(this.info.queries).forEach((e, index, arr) => {
    if (e !== 'name' && e !== 'company') {
      this.querytext += ` ${e}=`;
      this.querytext += `${this.info.queries[e]} | `;
    }
    if (index === arr.length - 1) {
      this.querytext = this.querytext.slice(0, this.querytext.length - 2);
    }
  }, this);

}
