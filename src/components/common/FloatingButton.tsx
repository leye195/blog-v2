import { ComponentPropsWithRef } from 'react';
import Button from '@/components/common/Button';
import { cn } from '@/libs/utils';

type FloatingButtonProps = ComponentPropsWithRef<'button'>;

const FloatingButton = ({ className, children, ...restProps }: FloatingButtonProps) => {
  return (
    <div className={cn('fixed opacity-0 transition-all duration-200', className)}>
      <Button {...restProps}>{children}</Button>
    </div>
  );
};

export default FloatingButton;
