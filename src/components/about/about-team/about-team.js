import template from './about-team.html';
import style from './about-team.scss';

export default {
  template,
  controller() {
    this.style = style;
    this.team = [
      {
        name: 'Dave Hanagan',
        github: 'https://github.com/billyham',
        linkedIn: 'https://www.linkedin.com/in/davehanagan',
        bio: 'I thoroughly enjoy creative endeavors at the intersection of art and technology. ', // eslint-disable-line
      },
      {
        name: 'Don Chatelain',
        github: 'https://github.com/DonChatelain',
        linkedIn: 'Public Profilehttps://www.linkedin.com/in/don-chatelain-01325140',
        bio: 'If I could mount any animal regardless of scale, I would choose a praying mantis because it can fly and can also probably take down an apache helicopter.',
      },
      {
        name: 'Yvonne Hayes',
        github: 'https://github.com/YvonneHayes',
        linkedIn: 'https://www.linkedin.com/in/yvonne-hayes',
        bio: 'I\'m an Austrian who came to Portland via Puerto Vallarta, Mexico and still thinks fondly of the time she lived in London, England. I am happiest when working with a team of fellow code enthusiasts hacking away on interesting projects we\'re all passionate about.', // eslint-disable-line
      },
      {
        name: 'David Goodwin',
        github: 'https://github.com/goodwid/',
        linkedIn: 'https://www.linkedin.com/in/david-goodwin-35921b4',
        bio: 'I traded in my 15 year IT career on a chance at turning my programming hobby into a new career.', // eslint-disable-line
      },
      {
        name: 'Johnny Luangphasy',
        github: 'https://github.com/jluangphasy',
        linkedIn: 'https://www.linkedin.com/in/jluangphasy',
        bio: 'Software developer by day, breakdancer by night.',
      },
    ];
  },
};
