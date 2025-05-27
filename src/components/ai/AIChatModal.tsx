
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import AIChatInterface from './AIChatInterface';

interface AIChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AIChatModal({ isOpen, onClose }: AIChatModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] p-0">
        <DialogHeader className="p-6 pb-4 border-b">
          <DialogTitle className="text-xl">SheepIT AI Architecture Assistant</DialogTitle>
          <DialogDescription>
            Ask questions about enterprise software architecture. Our AI will try its best to assist you.
          </DialogDescription>
        </DialogHeader>
        <div className="h-[60vh] max-h-[70vh] flex flex-col">
          <AIChatInterface />
        </div>
      </DialogContent>
    </Dialog>
  );
}
