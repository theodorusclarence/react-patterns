'use client';

import { Grid3X3 } from 'lucide-react';
import * as React from 'react';

import ArrowLink from '@/components/links/ArrowLink';
import PrimaryLink from '@/components/links/PrimaryLink';
import UnderlineLink from '@/components/links/UnderlineLink';

const patterns = {
  '/component-with-context': 'Component With Context',
  '/function-as-child': 'Function as Child',
  '/forward-ref': 'Forward Ref',
  '/higher-order-component': 'Higher Order Component',
};

export default function HomePage() {
  return (
    <main>
      <section className='bg-white'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <Grid3X3 size={50} className='text-cyan-400 rotate-45' />

          <h1 className='mt-5'>React Patterns</h1>
          <p className='mt-2 text-sm text-gray-800'>
            Collection of useful react patterns. Built for upcoming article.
          </p>
          <p className='mt-4 text-sm text-gray-700'>
            <ArrowLink href='https://github.com/theodorusclarence/react-patterns'>
              See the repository
            </ArrowLink>
          </p>

          <div className='mt-8 space-y-2 flex flex-col'>
            <p className='font-semibold text-sm'>Patterns:</p>
            {Object.entries(patterns).map(([path, title]) => (
              <li className='list-disc' key={path}>
                <PrimaryLink className='text-sm text-left block' href={path}>
                  {title}
                </PrimaryLink>
              </li>
            ))}
          </div>

          <footer className='absolute bottom-2 text-gray-700'>
            © {new Date().getFullYear()} By{' '}
            <UnderlineLink href='https://theodorusclarence.com?ref=tsnextstarter'>
              Theodorus Clarence
            </UnderlineLink>
          </footer>
        </div>
      </section>
    </main>
  );
}
