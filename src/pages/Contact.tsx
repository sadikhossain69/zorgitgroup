import Header from '@/components/common/Header';
import Direction from '@/components/contact/Direction';
import { ContactSection } from '../components/contact';
import GlobalLayout from '../components/layouts/GlobalLayout';
import contactUsImg from '@images/contactUs.png';

interface ContactProps {}

export const Contact: React.FC<ContactProps> = ({}) => {
  return (
    <GlobalLayout>
      <Header pageTitle="Contact Us" image={contactUsImg} path="/contact-us" />
      <ContactSection />
      <Direction />
    </GlobalLayout>
  );
};
