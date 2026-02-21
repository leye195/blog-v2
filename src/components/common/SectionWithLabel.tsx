import { type ComponentProps } from 'react';
import { cn } from '@/libs/utils';

type SectionWithLabelProps = {
  title: React.ReactNode;
} & Omit<ComponentProps<'section'>, 'title'>;

const SectionWithLabel = ({ title, children, className }: SectionWithLabelProps) => {
  return (
    <section className={cn('py-8', className)}>
      <div className={cn("mx-auto w-full px-2", "md:px-4")}>
        {title}
        {children}
      </div>
    </section>
  );
};

export default SectionWithLabel;
