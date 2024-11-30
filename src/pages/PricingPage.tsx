import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Check, Zap } from 'lucide-react';
import { Button } from '../components/Button';

export function PricingPage() {
  const navigate = useNavigate();

  const handlePlanSelection = () => {
    // For now, both plans redirect to the final page
    navigate('/story/final');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <Sparkles className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Storytelling Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Unlock the power of AI-generated stories and bring your imagination to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Trial Plan */}
          <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-200 hover:border-blue-200 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Free Trial</h2>
              <span className="text-lg font-medium text-gray-500">$0</span>
            </div>
            <p className="text-gray-600 mb-6">Perfect for getting started</p>
            <ul className="space-y-4 mb-8">
              {[
                '3 AI-generated stories',
                'Basic story customization',
                'Standard image quality',
                'PDF downloads',
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              onClick={handlePlanSelection}
              variant="outline"
              className="w-full"
            >
              Start Free Trial
            </Button>
          </div>

          {/* Premium Plan */}
          <div className="bg-blue-600 rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-white">Premium</h2>
                <div className="flex items-center mt-1">
                  <Zap className="h-5 w-5 text-yellow-300 mr-2" />
                  <span className="text-blue-100">Most Popular</span>
                </div>
              </div>
              <div className="text-white">
                <span className="text-2xl font-bold">$9.99</span>
                <span className="text-blue-100">/month</span>
              </div>
            </div>
            <p className="text-blue-100 mb-6">Unlimited creative possibilities</p>
            <ul className="space-y-4 mb-8">
              {[
                '100 AI-generated stories per month',
                'Advanced story customization',
                'Premium image quality',
                'Priority support',
                'ePub format support',
                'Exclusive story templates',
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-yellow-300 mr-3" />
                  <span className="text-white">{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              onClick={handlePlanSelection}
              className="w-full bg-white text-blue-600 hover:bg-blue-50"
            >
              Get Premium
            </Button>
          </div>
        </div>

        <p className="text-center text-gray-500 mt-8">
          All plans include our standard features: Basic customization, PDF downloads, and customer support
        </p>
      </div>
    </div>
  );
}