import { Metadata } from 'next';
import * as React from 'react';

import DemoBlock from '@/components/DemoBlock';
import PatternHeader from '@/components/PatternHeader';

import { GreetingDialogDemo } from '@/app/function-as-child/greeting-dialog/demo';

export const metadata: Metadata = {
  title: 'Function as Child',
  description: 'Expose props and render custom UI to the component.',
};

export default function FunctionAsChildPage() {
  return (
    <main className='py-20 layout'>
      <PatternHeader
        title='Function as Child'
        subtitle='Expose props and render custom UI to the component.'
        incompatibleWithServer
      />

      <DemoBlock className='mt-8'>
        {/* This pattern only works in client component */}
        <GreetingDialogDemo />
      </DemoBlock>
    </main>
  );
}
