import template from './about-team.html';
import style from './about-team.scss';

export default {
  template,
  controller: function () {
    this.style = style;
    this.team = [
      {
        name: 'David Goodwin',
        github: 'https://github.com/goodwid/',
        linkedIn: 'https://www.linkedin.com/in/david-goodwin-35921b4',
        bio: 'I traded in my 15 year IT career on a chance at turning my programming hobby into a new career.',
      },
      {
        name: 'team',
        github: 'https://github.com/',
        linkedIn: 'https://www.linkedin.com/',
        bio: '',
      },
      {
        name: 'team',
        github: 'https://github.com/',
        linkedIn: 'https://www.linkedin.com/',
        bio: '',
      },
      {
        name: 'team',
        github: 'https://github.com/',
        linkedIn: 'https://www.linkedin.com/',
        bio: '',
      },
      {
        name: 'team',
        github: 'https://github.com/',
        linkedIn: 'https://www.linkedin.com/',
        bio: '',
      },
    ]
  },
};
