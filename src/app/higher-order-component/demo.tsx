'use client';

import * as React from 'react';

import DemoBlock from '@/components/DemoBlock';

import DummyComponent from '@/app/higher-order-component/components/dummy-component';

export default function HOCDemo() {
  return (
    <DemoBlock className='mt-8'>
      <DummyComponent number={1} content='This is a dummy component' />

      <p className='text-sm mt-8'>Log generated: (or check on your own)</p>
      <pre className='overflow-x-auto text-xs mt-2'>
        <p className='text-[#22D3EE]'>
          ============== COMPONENT LOG: DummyComponent
        </p>
        <p>/higher-order-component</p>

        <p>{'Object { number: 1, content: "This is a dummy component" }'}</p>
      </pre>
    </DemoBlock>
  );
}
