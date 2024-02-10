import { Metadata } from 'next';
import * as React from 'react';

import DemoBlock from '@/components/DemoBlock';
import PatternHeader from '@/components/PatternHeader';

import {
  HidableCard,
  HidableCardHideButton,
  HidableCardSubtitle,
  HidableCardTitle,
} from '@/app/component-with-context/components/hidable-card';

export const metadata: Metadata = {
  title: 'Component With Context',
  description:
    'Component that shares some UI states could benefit react context.',
};

export default function ComponentContextPage() {
  return (
    <main className='py-20 layout'>
      <PatternHeader
        title='Component With Context'
        subtitle='Component that shares some UI states could benefit react context.'
      />

      <DemoBlock className='mt-8 flex flex-col items-center py-20'>
        <div className='w-full max-w-96'>
          <HidableCard className='flex justify-between items-start'>
            <div className='space-y-1'>
              <HidableCardTitle>Card Title</HidableCardTitle>
              <HidableCardSubtitle>Card Subtitle</HidableCardSubtitle>
            </div>
            <HidableCardHideButton />
          </HidableCard>
        </div>
      </DemoBlock>
    </main>
  );
}
