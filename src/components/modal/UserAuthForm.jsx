'use client';

import { cn } from '@/utils';
import { signIn } from 'next-auth/react';
import * as React from 'react';
import { FC } from 'react';
import { Button } from '@/components/ui/Button';

import { Icons } from '../Icons';
import toast from 'react-hot-toast';

const UserAuthForm = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = React.useState(false);

  const loginWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn('google');
    } catch (error) {
      toast.error('Issue');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn('flex justify-center', className)} {...props}>
      <Button
        isLoading={isLoading}
        type="button"
        size="sm"
        className="w-full"
        onClick={loginWithGoogle}
        disabled={isLoading}
      >
        {isLoading ? null : <Icons.google className="h-4 w-4 mr-2" />}
        Google
      </Button>
    </div>
  );
};

export default UserAuthForm;
