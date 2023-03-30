import { IconType } from 'react-icons';

interface ContactInfoCardProps {
  title: string;
  Icon: IconType;
  desc: string;
  href: string;
}

export const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ title, Icon, desc, href }) => {
  return (
    <a href={href}>
      <div className="mt-1 sm:mt-2">
        <h6 className="ml-8 text-base sm:text-xl">{title}</h6>
        <div className="flex mt-1 sm:mt-3">
          <div>
            <Icon className="-mt-0.5 mr-2" size={20} />
          </div>
          <p className="ml-1 text-paragraph text-sm">{desc}</p>
        </div>
      </div>
    </a>
  );
};
