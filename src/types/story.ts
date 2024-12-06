export interface StoryInput {
  language: string;
  characterName: string;
  characterDescription: string;
  storyGoal: string;
}

export interface StoryContent {
  [key: string]: {
    description: string;
    quote: string;
  };
}

export interface Story {
  content: StoryContent;
  created_date: string;
  id: number;
  title: string;
  user_id: number;
}