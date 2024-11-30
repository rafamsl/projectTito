import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, RefreshCw, Download } from 'lucide-react';
import { Button } from '../components/Button';
import samplePdf from '../dog.pdf';

export function ImageViewPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-12 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-sm p-8 w-full max-w-3xl">
        <div className="flex flex-col items-center">
          <FileText className="h-16 w-16 text-blue-600 mb-6" />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Your Generated Story</h1>
          
          {/* Render PDF using iframe */}
          <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center mb-8 overflow-auto">
            <iframe
              src={samplePdf}
              title="PDF Preview"
              width="100%"
              height="100%"
              className="rounded-lg"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Button
              onClick={() => navigate('/')} 
              variant="secondary"
              className="flex items-center"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Try Again
            </Button>

            <Button
              onClick={() => {}} 
              variant="primary"
              className="flex items-center"
            >
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>

            <Button
              onClick={() => {}} 
              variant="primary"
              className="flex items-center"
            >
              <Download className="mr-2 h-4 w-4" />
              Download ePUB
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageViewPage;
