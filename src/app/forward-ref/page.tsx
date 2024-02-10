import { Metadata } from 'next';
import * as React from 'react';

import PatternHeader from '@/components/PatternHeader';

import ForwardRefDemo from '@/app/forward-ref/demo';

export const metadata: Metadata = {
  title: 'Forward Ref',
};

export default function forwardRefPage() {
  return (
    <main className='py-20 layout'>
      <PatternHeader
        title='Forward Ref'
        subtitle='Forward ref access to your component, which by default is not forwarded.'
      />

      <ForwardRefDemo />
    </main>
  );
}
