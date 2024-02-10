'use client';

import * as React from 'react';

import { withLogger } from '@/app/higher-order-component/components/with-logger';

function DummyComponent({
  content,
  number,
}: {
  content: string;
  number: number;
}) {
  return (
    <p className='font-mono text-sm'>
      {`<DummyComponent content={'${content}'} number={${number}} />`}
    </p>
  );
}
export default withLogger(DummyComponent);
