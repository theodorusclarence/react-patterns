'use client';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import DemoBlock from '@/components/DemoBlock';

import { ButtonWithRef } from '@/app/forward-ref/components/button-with-ref';
import SimpleButton from '@/app/forward-ref/components/simple-button';

export default function ForwardRefDemo() {
  const simpleButtonRef = React.useRef<HTMLButtonElement>(null);
  const forwardedButtonRef = React.useRef<HTMLButtonElement>(null);

  const [log, setLog] = React.useState('');
  function triggerLogRef() {
    setLog(
      JSON.stringify(
        {
          'simpleButtonRef.current': simpleButtonRef.current,
          'forwardedButtonRef.current': {
            tagName: forwardedButtonRef.current?.tagName,
            textContent: forwardedButtonRef.current?.textContent,
            '...rest': 'hidden for brevity',
          },
        },
        null,
        2
      )
    );
  }

  return (
    <DemoBlock className='mt-8'>
      <div className='flex gap-4'>
        {/* @ts-expect-error for testing button without ref functionality */}
        <SimpleButton ref={simpleButtonRef}>Simple Button</SimpleButton>
        <ButtonWithRef ref={forwardedButtonRef}>
          Button with forwardRef
        </ButtonWithRef>
      </div>

      <Button className='mt-8' variant='dark' onClick={triggerLogRef}>
        See ref value
      </Button>

      {log !== '' && <pre className='overflow-x-auto text-xs mt-3'>{log}</pre>}
    </DemoBlock>
  );
}
