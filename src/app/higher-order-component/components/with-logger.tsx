import * as React from 'react';

import logger from '@/lib/logger';

type WithLoggerProps = object;

/**
 * For more TypeScript syntax check out the cheatsheet:
 * @see https://react-typescript-cheatsheet.netlify.app/docs/hoc/full_example/ */
export function withLogger<T extends WithLoggerProps = WithLoggerProps>(
  WrappedComponent: React.ComponentType<T>
) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  const Component = (props: Omit<T, keyof WithLoggerProps>) => {
    React.useEffect(() => {
      logger(props, `Component Props: ${displayName}`);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <WrappedComponent {...(props as T)} />;
  };

  Component.displayName = `withLogger(${displayName})`;

  return Component;
}
