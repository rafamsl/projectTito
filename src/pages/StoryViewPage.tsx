import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Book, RefreshCw, Image } from 'lucide-react';
import { Button } from '../components/Button';
import { formatStoryContent } from '../lib/utils';
import type { Story } from '../types/story';

export function StoryViewPage() {
  const location = useLocation();
  const navigate = useNavigate();
  // Adicionando a história de exemplo diretamente no código
  const defaultStory: Story = {
    id: 3,
    user_id: 1,
    title: "Tito y sus nuevos amigos",
    content: {
      "Title": "Tito y sus nuevos amigos",
      "1": "Había una vez una capibara llamada Tito.",
      "2": "Tito era muy tímido y le encantaba jugar en el agua.",
      "3": "Un día, mientras jugaba en el lago, vio a otros animales cerca.",
      "4": "Había patitos nadando y conejitos brincando en la orilla.",
      "5": "Tito se sintió un poco nervioso, pero también curioso.",
      "6": "Decidió acercarse lentamente al grupo de animales.",
      "7": "Los patitos lo saludaron con un suave cuac y los conejitos lo miraron con alegría.",
      "8": "Tito sonrió y se unió a ellos en el agua.",
      "9": "Jugaron juntos y se divirtieron mucho, olvidando la timidez de Tito.",
      "10": "Al final del día, Tito había hecho nuevos amigos y se sintió muy feliz."
    },
    created_date: "2024-11-30T18:43:26.135161"
  };

  // Usando a história padrão se não houver história fornecida
  // const story = (location.state?.story) as Story;
  const story = (defaultStory) as Story;


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