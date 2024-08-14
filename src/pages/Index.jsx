import React from 'react';
import { Paw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-blue-200">
      <Paw className="w-24 h-24 text-blue-500 mb-6" />
      <h1 className="text-4xl font-bold mb-4 text-blue-800">Paw App</h1>
      <p className="text-xl text-blue-600 mb-8">Welcome to your simple paw-themed application!</p>
      <Button className="bg-blue-500 hover:bg-blue-600">
        Get Started
      </Button>
    </div>
  );
};

export default Index;