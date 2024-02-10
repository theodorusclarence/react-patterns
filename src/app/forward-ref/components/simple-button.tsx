import * as React from 'react';

import { cn } from '@/lib/utils';

type SimpleButtonProps = React.ComponentPropsWithoutRef<'button'>;

export default function SimpleButton({
  className,
  ...rest
}: SimpleButtonProps) {
  return (
    <button
      className={cn(['underline active:no-underline', className])}
      {...rest}
    ></button>
  );
}
