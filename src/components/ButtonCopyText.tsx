'use client';
import { useToast } from '@/src/hooks/use-toast';
import React from 'react';

export const ButtonCopyText = (
  props: { copyText: string } & React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { toast } = useToast();
  const { copyText, ...rest } = props;

  const handleClick = () => {
    navigator.clipboard.writeText(props.copyText);
    toast({
      title: 'Texte copié !'
    });
  };
  return (
    <button {...rest} className="rounded-3xl bg-nude px-2" onClick={handleClick}>
      {props.children}
    </button>
  );
};
