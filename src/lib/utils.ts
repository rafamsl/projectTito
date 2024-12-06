import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { StoryContent } from '../types/story';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatStoryContent(content: StoryContent): string {
  // Check if content has scene structure
  if (content.scene_1) {
    return Object.keys(content)
      .sort() // Sort scenes to ensure correct order
      .map(key => content[key].quote)
      .join('\n\n');
  }
  
  // Fallback for old content structure
  return Object.values(content).join('\n\n');
}