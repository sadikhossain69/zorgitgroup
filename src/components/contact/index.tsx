import SectionLayout from '../layouts/SectionLayout';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';

interface ContactSectionProps {}

export const ContactSection: React.FC<ContactSectionProps> = ({}) => {
  return (
    <SectionLayout classNames="grid md:grid-cols-2 gap-5">
      <ContactForm />
      <ContactInfo />
    </SectionLayout>
  );
};
