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
        name: 'Yvonne Hayes',
        github: 'https://github.com/YvonneHayes',
        linkedIn: 'https://www.linkedin.com/in/yvonne-hayes',
        bio: 'I\'m an Austrian who came to Portland via Puerto Vallarta, Mexico and still thinks fondly of the time she lived in London, England. I\'m an avid reader, on again off again runner, gamer, MMORPG addict, catholic school survivor, Netflix binge-watcher and absolute dog person - who is owned by 3 cats (it\'s a long story).I am happiest when working with a team of fellow code enthusiasts hacking away on interesting projects we\'re all passionate about.',
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
