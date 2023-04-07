import { CardTypes } from '@/types/contactTypes';
import { BiPhoneCall } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

export const CONTACT_CARD_DATA: CardTypes[] = [
  {
    id: 1,
    title: 'Office',
    icon: HiOutlineLocationMarker,
    desc: 'Moar Banani 11, Ventura Iconia, Level 3, Holding 37, Road 11, Block H, Banani 1213 Dhaka, Bangladesh.',
    href: '#map',
  },
  {
    id: 2,
    title: 'Support',
    icon: BiPhoneCall,
    desc: '+8801752722365',
    href: 'tel:[+8801752722365]',
  },
  {
    id: 3,
    title: 'Email Information',
    icon: FiMail,
    desc: 'mail@zorgitgroup.com',
    href: 'mailto:mail@zorgitgroup.com',
  },
];
