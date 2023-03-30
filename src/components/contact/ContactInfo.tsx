import IconGroup from '../common/IconGroup';
import { ContactInfoCard } from './ContactInfoCard';
import { CONTACT_CARD_DATA } from './data';

interface ContactInfoProps {}

export const ContactInfo: React.FC<ContactInfoProps> = ({}) => {
  return (
    <div className="px-6 mt-10">
      <h4 className="text-title text-base sm:text-xl font-normal sm:font-medium">Contact Us</h4>
      <h5 className="font-semibold text-2xl sm:text-4xl my-4 text-title">Get in Touch With Us</h5>
      <p className="text-xs leading-5 mb-5">
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
      <div className="grid sm:grid-cols-2 gap-5">
        {CONTACT_CARD_DATA.map((card) => {
          const { id, desc, icon, title, href } = card;
          return <ContactInfoCard key={id} desc={desc} Icon={icon} title={title} href={href} />;
        })}
      </div>
      <hr className="border-gray-500 my-5" />
      <div className="mx-5">
        <h6 className="text-title text-xl sm:text-2xl">Follow us on Social Media</h6>
        <div className="flex flex-row gap-3 mt-2 sm:justify-center lg:justify-start">
          <IconGroup classNames="" />
        </div>
      </div>
    </div>
  );
};
