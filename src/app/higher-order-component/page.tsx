import { Metadata } from 'next';
import * as React from 'react';

import PatternHeader from '@/components/PatternHeader';

import HOCDemo from '@/app/higher-order-component/demo';

export const metadata: Metadata = {
  title: 'Higher Order Component',
};

export default function HOCPage() {
  return (
    <main className='py-20 layout'>
      <PatternHeader
        title='Higher Order Component'
        subtitle='Inject props or do side effects to a component.'
      />

      <HOCDemo />
    </main>
  );
}
