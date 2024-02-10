import * as React from 'react';

import { cn } from '@/lib/utils';

/** Notice the use of ComponentProps_With_Ref */
type ButtonWithRefProps = React.ComponentPropsWithRef<'button'>;

// forward ref
export const ButtonWithRef = React.forwardRef<
  HTMLButtonElement,
  ButtonWithRefProps
>(({ className, ...rest }, ref) => (
  <button
    ref={ref}
    className={cn(['underline active:no-underline', className])}
    {...rest}
  />
));
