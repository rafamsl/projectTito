import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Book, RefreshCw, Image } from 'lucide-react';
import { Button } from '../components/Button';
import { formatStoryContent } from '../lib/utils';
import type { Story } from '../types/story';

export function StoryViewPage() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const story = (location.state?.story) as Story;


  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-3xl px-4">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex items-center justify-center mb-6">
            <Book className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">{story.content?.Title || 'Your Story'}</h1>
          </div>

          <div className="prose max-w-none">
            {story.content && (
              <div className="whitespace-pre-wrap text-lg text-gray-700">
                {formatStoryContent(story.content)}
              </div>
            )}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate('/')}
              variant="secondary"
              className="flex items-center"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Try Again
            </Button>
            
            <Button
              onClick={() => navigate('/auth')}
              className="flex items-center"
            >
              <Image className="mr-2 h-4 w-4" />
              Create Images
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}