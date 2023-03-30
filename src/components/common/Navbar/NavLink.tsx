import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export const links = [
  {
    title: 'Work',
    to: '/portfolio',
  },
  {
    title: 'Services',
    to: '/#services',
  },
  {
    title: 'Clients',
    to: '/#clients',
  },
  {
    title: 'About Us',
    to: '/about-us',
  },
  {
    title: 'Contact Us',
    to: '/contact-us',
  },
];

interface NavLinkProps {
  title: string;
  to: string;
}

export default function NavLink({ title, to }: NavLinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <li className="py-2 nav-item">
      <Link
        className={`px-3 text-[18px] py-2 flex items-center md:text-[20px] font-medium leading-snug hover:opacity-75 ${
          match ? 'text-primary' : ''
        }`}
        to={to}
      >
        <span className="ml-2">{title}</span>
      </Link>
    </li>
  );
}
