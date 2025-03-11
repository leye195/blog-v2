import { type ComponentProps } from 'react';

type SectionWithLabelProps = {
  title: React.ReactNode;
} & Omit<ComponentProps<'section'>, 'title'>;

const SectionWithLabel = ({ title, children, className }: SectionWithLabelProps) => {
  return (
    <section className={className}>
      {title}
      {children}
    </section>
  );
};

export default SectionWithLabel;
