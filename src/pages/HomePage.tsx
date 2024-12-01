import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { Input } from '../components/Input';
import { TextArea } from '../components/TextArea';
import { Button } from '../components/Button';
import { storyService } from '../services/storyService';
import type { StoryInput } from '../types/story';

export function HomePage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState<StoryInput>({
    language: '',
    characterName: '',
    characterDescription: '',
    storyGoal: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const story = await storyService.createStory(formData);
      navigate('/story-view', { state: { story } });
    } catch (error) {
      setError('Failed to generate story. Please try again.');
      console.error('Error generating story:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-2xl px-4">
        <div className="text-center mb-8">
          <BookOpen className="mx-auto h-12 w-12 text-blue-600" />
          <h1 className="mt-4 text-3xl font-bold text-gray-900">Create Your Story</h1>
          <p className="mt-2 text-gray-600">Fill in the details to generate a unique kids story</p>
        </div>

        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-sm">
          <Input
            label="Language"
            id="language"
            value={formData.language}
            onChange={(e) => setFormData({ ...formData, language: e.target.value })}
            required
            placeholder="e.g., English, Spanish, Portuguese"
          />

          <Input
            label="Main Character Name"
            id="characterName"
            value={formData.characterName}
            onChange={(e) => setFormData({ ...formData, characterName: e.target.value })}
            required
            placeholder="Enter character name"
          />

          <TextArea
            label="Character Description"
            id="characterDescription"
            value={formData.characterDescription}
            onChange={(e) => setFormData({ ...formData, characterDescription: e.target.value })}
            rows={3}
            required
            placeholder="Describe your character's personality and appearance"
          />

          <TextArea
            label="Story Goal"
            id="storyGoal"
            value={formData.storyGoal}
            onChange={(e) => setFormData({ ...formData, storyGoal: e.target.value })}
            rows={3}
            required
            placeholder="What should the character achieve in the story?"
          />

          <Button 
            type="submit" 
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? 'Generating Story...' : 'Generate Story'}
          </Button>
        </form>
      </div>
    </div>
  );
}