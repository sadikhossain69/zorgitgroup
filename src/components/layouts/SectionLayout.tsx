import { ReactNode } from 'react';

interface SectionLayoutProps {
  children: ReactNode;
  classNames?: string;
}

export default function SectionLayout({ children, classNames = '' }: SectionLayoutProps) {
  return (
    <section
      className={`max-w-screen-2xl mx-auto sm:px-14 lg:px-32 2xl:px-0 py-2 my-8 ${classNames}`}
    >
      {children}
    </section>
  );
}
