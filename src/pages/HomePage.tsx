import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { Input } from '../components/Input';
import { TextArea } from '../components/TextArea';
import { Button } from '../components/Button';
import type { StoryInput } from '../types/story';

export function HomePage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<StoryInput>({
    language: '',
    characterName: '',
    characterDescription: '',
    storyGoal: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // TODO: Implement API call
      navigate('/story-view', { state: { story: {} } });
    } catch (error) {
      console.error('Error generating story:', error);
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

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-sm">
          <Input
            label="Language"
            id="language"
            value={formData.language}
            onChange={(e) => setFormData({ ...formData, language: e.target.value })}
            required
          />

          <Input
            label="Main Character Name"
            id="characterName"
            value={formData.characterName}
            onChange={(e) => setFormData({ ...formData, characterName: e.target.value })}
            required
          />

          <TextArea
            label="Character Description"
            id="characterDescription"
            value={formData.characterDescription}
            onChange={(e) => setFormData({ ...formData, characterDescription: e.target.value })}
            rows={3}
            required
          />

          <TextArea
            label="Story Goal"
            id="storyGoal"
            value={formData.storyGoal}
            onChange={(e) => setFormData({ ...formData, storyGoal: e.target.value })}
            rows={3}
            required
          />

          <Button type="submit" className="w-full">
            Generate Story
          </Button>
        </form>
      </div>
    </div>
  );
}