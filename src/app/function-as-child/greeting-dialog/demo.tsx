'use client';

import Button from '@/components/buttons/Button';

import GreetingDialog from '@/app/function-as-child/greeting-dialog';

//! This pattern only works with client component
export function GreetingDialogDemo() {
  return (
    <GreetingDialog>
      {({ isOpen, openDialog }) => (
        <div>
          <div>
            Dialog is{' '}
            {isOpen ? (
              <span className='text-green-500'>opened</span>
            ) : (
              <span className='text-red-500'>closed</span>
            )}
          </div>

          <Button className='mt-4' variant='dark' onClick={openDialog}>
            click me!
          </Button>
        </div>
      )}
    </GreetingDialog>
  );
}
