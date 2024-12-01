import api from '../lib/api';
import type { StoryInput, Story } from '../types/story';

export const storyService = {
  async createStory(input: StoryInput): Promise<Story> {
    const payload = {
      language: input.language,
      character_name: input.characterName,
      character_description: input.characterDescription,
      story_goal: input.storyGoal,
    };

    const { data } = await api.post<Story>('https://projecttitoapi.onrender.com/submit', payload);
    return data;
  },
};