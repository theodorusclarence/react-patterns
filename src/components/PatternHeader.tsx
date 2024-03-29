import * as React from 'react';
import { ImGithub } from 'react-icons/im';

import { getCurrentGithubLink } from '@/lib/file-name.server';
import { cn } from '@/lib/utils';

import PrimaryLink from '@/components/links/PrimaryLink';

type PatternHeaderProps = {
  title: string;
  subtitle: string;
  incompatibleWithServer?: boolean;
} & React.ComponentPropsWithoutRef<'div'>;

export default function PatternHeader({
  className,
  title,
  subtitle,
  incompatibleWithServer = false,
  ...rest
}: PatternHeaderProps) {
  return (
    <div className={cn([className])} {...rest}>
      <h1 className='tracking-tighter'>{title}</h1>
      <p className='mt-1 text-gray-500'>{subtitle}</p>
      {incompatibleWithServer && (
        <p className='text-sm text-blue-400 mt-2'>
          *incompatible for server component, create a client wrapper to use
        </p>
      )}

      <PrimaryLink
        className='mt-4 space-x-2 text-sm'
        href={getCurrentGithubLink()}
      >
        <ImGithub />
        <span>View Source Code</span>
      </PrimaryLink>
    </div>
  );
}
