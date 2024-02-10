'use client';

import * as React from 'react';
import { PiHandWaving } from 'react-icons/pi';

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

type ReturnProps = {
  isOpen: boolean;
  openDialog: () => void;
};

export default function GreetingDialog({
  children,
}: {
  children: (props: ReturnProps) => React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);

  function openDialog() {
    setOpen(true);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* If you're using radix primitives, you could actually just use <DialogTrigger asChild>{children}</DialogTrigger> */}
      {/* However, this pattern is useful if the children need to access states inside the component e.g. isOpen */}
      {children({ openDialog, isOpen: open })}

      <DialogContent>
        <div className='flex items-center gap-2'>
          <PiHandWaving className='text-yellow-500 animate-waving' size={30} />
          <DialogTitle>Hello from a dialog! </DialogTitle>
        </div>
      </DialogContent>
    </Dialog>
  );
}
