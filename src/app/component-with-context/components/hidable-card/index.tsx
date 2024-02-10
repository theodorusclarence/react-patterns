'use client';

import { Eye, EyeOff } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

import IconButton from '@/components/buttons/IconButton';

import {
  HidableCardContextProvider,
  useHidableCardContext,
} from '@/app/component-with-context/components/hidable-card/context';

//* components in this file can also be stored in separate files

//#region  //*=========== Base ===========
export function HidableCard({
  className,
  ...rest
}: Pick<React.ComponentPropsWithoutRef<'div'>, 'className' | 'children'>) {
  return (
    <HidableCardContextProvider>
      <div
        className={cn([
          'p-4',
          'rounded-lg border border-gray-200 shadow-sm',
          className,
        ])}
        {...rest}
      />
    </HidableCardContextProvider>
  );
}
//#endregion  //*======== Base ===========

//#region  //*=========== Title ===========
export function HidableCardTitle({
  className,
  children,
}: Pick<React.ComponentPropsWithoutRef<'h3'>, 'className' | 'children'>) {
  const { hidden } = useHidableCardContext();

  return (
    <h3 className={cn(['text-gray-800 tracking-tighter', className])}>
      {hidden ? <span className='tracking-wide'>••••••••</span> : children}
    </h3>
  );
}
//#endregion  //*======== Title ===========

//#region  //*=========== Subtitle ===========
export function HidableCardSubtitle({
  className,
  children,
}: Pick<React.ComponentPropsWithoutRef<'p'>, 'className' | 'children'>) {
  const { hidden } = useHidableCardContext();

  return (
    <p className={cn(['text-gray-500 text-sm', className])}>
      {hidden ? <span className='tracking-wide'>••••••••</span> : children}
    </p>
  );
}
//#endregion  //*======== Subtitle ===========

//#region  //*=========== Hide Button ===========
export function HidableCardHideButton({ className }: { className?: string }) {
  const { hidden, toggle } = useHidableCardContext();

  return (
    <IconButton
      variant='light'
      icon={hidden ? EyeOff : Eye}
      className={className}
      classNames={{ icon: 'text-xs' }}
      onClick={toggle}
    />
  );
}
//#endregion  //*======== Hide Button ===========
