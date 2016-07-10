import template from './master.html';

export default {
  template,
  controller() {
    this.fuck = process.env.API_URL;
  },
    
};
