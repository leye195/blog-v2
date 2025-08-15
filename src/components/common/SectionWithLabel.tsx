import { clsx } from 'clsx';
import { type ComponentProps } from 'react';

type SectionWithLabelProps = {
  title: React.ReactNode;
} & Omit<ComponentProps<'section'>, 'title'>;

const SectionWithLabel = ({ title, children, className }: SectionWithLabelProps) => {
  return (
    <section className={clsx('py-8', className)}>
      <div className="mx-auto w-full px-4">
        {title}
        {children}
      </div>
    </section>
  );
};

export default SectionWithLabel;
