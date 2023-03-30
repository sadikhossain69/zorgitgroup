import { CardTypes } from '@/types/contactTypes';
import { BiPhoneCall } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

export const CONTACT_CARD_DATA: CardTypes[] = [
  {
    id: 1,
    title: 'Office',
    icon: HiOutlineLocationMarker,
    desc: 'Kader valley, House no 11, Road 01, Block H, Chittagong, Bangladesh. 4216',
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
    desc: 'start@zorgitgroup.com',
    href: 'mailto:start@zorgitgroup.com',
  },
];
