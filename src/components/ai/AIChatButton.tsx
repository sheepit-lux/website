
"use client";

import { Button } from '@/components/ui/button';
import { BotMessageSquare } from 'lucide-react';
import { useState } from 'react';
import AIChatModal from './AIChatModal';

export default function AIChatButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        variant="default"
        size="lg"
        className="fixed bottom-6 right-6 rounded-full shadow-lg p-4 h-auto"
        onClick={() => setIsModalOpen(true)}
        aria-label="Open AI Chat Assistant"
      >
        <BotMessageSquare className="h-7 w-7 mr-2" />
        Ask Our AI
      </Button>
      <AIChatModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
