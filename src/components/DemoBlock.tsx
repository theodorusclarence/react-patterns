import * as React from 'react';

import { cn } from '@/lib/utils';

type DemoBlockProps = React.ComponentPropsWithoutRef<'div'>;

export default function DemoBlock({ className, ...rest }: DemoBlockProps) {
  return (
    <div
      className={cn([
        'border-gray-300 p-4 border-dashed border-2 rounded-md ',
        className,
      ])}
      {...rest}
    ></div>
  );
}
