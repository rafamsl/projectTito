import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatStoryContent(content: Record<string, string>): string {
  const numericKeys = Object.keys(content)
    .filter(key => !isNaN(Number(key)))
    .sort((a, b) => Number(a) - Number(b));
  
  return numericKeys.map(key => content[key]).join('\n\n');
}