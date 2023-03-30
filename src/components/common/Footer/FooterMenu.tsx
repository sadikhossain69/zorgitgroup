import { Link } from 'react-router-dom';

interface Props {
  title: string;
  to: string;
}

export const footerMenu = [
  {
    menuTitle: 'Services',
    subMenu: [
      {
        title: 'Web & Apps Design',
        to: '',
      },
      {
        title: 'Web & Apps Development',
        to: '',
      },
      {
        title: 'Digital marketing',
        to: '',
      },
      {
        title: 'Graphics Design',
        to: '',
      },
      {
        title: 'Search Engine Optimization',
        to: '',
      },
    ],
  },
  {
    menuTitle: 'Clients',
    subMenu: [
      {
        title: 'Qtdealz',
        to: '',
      },
      {
        title: 'Dealizle',
        to: '',
      },
      {
        title: 'Fast Deals',
        to: '',
      },
      {
        title: 'Arcon Interior',
        to: '',
      },
    ],
  },
  {
    menuTitle: 'Resources',
    subMenu: [
      {
        title: 'Plugins',
        to: '',
      },
      {
        title: 'Blog',
        to: '',
      },
      {
        title: 'Themes',
        to: '',
      },
      {
        title: 'Hosting',
        to: 'https://m.do.co/c/0810016f07e7',
      },
      {
        title: 'Support',
        to: 'https://wa.me/message/VUQHDAMVQEK5A1',
      },
    ],
  },
  {
    menuTitle: 'Company',
    subMenu: [
      {
        title: 'About Us',
        to: '/about-us',
      },
      {
        title: 'Careers',
        to: '',
      },
      {
        title: 'FAQs',
        to: '',
      },
      {
        title: 'Teams',
        to: '/about-us',
      },
      {
        title: 'Contact Us',
        to: '/contact-us',
      },
    ],
  },
];

export const bottomMenu = [
  {
    title: 'Privacy Policy',
    to: '',
  },
  {
    title: 'Terms of Use',
    to: '',
  },
  {
    title: 'Site Map',
    to: 'https://goo.gl/maps/kBit2pAZiMLj2CWY6',
  },
];

export default function FooterLink({ title, to }: Props) {
  if(to.startsWith('http') || to.startsWith("https")) return (
    <a href={to} target={"_blank"}>
      <span>{title}</span>
    </a>
  )
  return (
    <Link to={to}>
      <span>{title}</span>
    </Link>
  );
}
