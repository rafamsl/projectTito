import React from 'react';
import { cn } from '../lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ className, label, id, ...props }: InputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        className={cn(
          'w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none',
          className
        )}
        id={id}
        {...props}
      />
    </div>
  );
}