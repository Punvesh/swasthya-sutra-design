
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { geminiService } from "@/services/geminiService";

interface GeminiApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApiKeySave: () => void;
}

const GeminiApiKeyModal: React.FC<GeminiApiKeyModalProps> = ({
  isOpen,
  onClose,
  onApiKeySave,
}) => {
  const { toast } = useToast();
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    if (isOpen) {
      const savedKey = geminiService.getApiKey();
      if (savedKey) {
        setApiKey(savedKey);
      }
    }
  }, [isOpen]);

  const handleSave = () => {
    if (!apiKey.trim()) {
      toast({
        title: "API Key Required",
        description: "Please enter a valid Gemini API key",
        variant: "destructive",
      });
      return;
    }

    geminiService.setApiKey(apiKey.trim());
    toast({
      title: "API Key Saved",
      description: "Your Gemini API key has been saved successfully",
    });
    
    // Call the callback to notify parent components that the API key has been saved
    onApiKeySave();
    
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Gemini API Key</DialogTitle>
          <DialogDescription>
            Enter your Google AI Gemini API key to generate personalized Indian food plans.
            You can get your API key from{" "}
            <a
              href="https://aistudio.google.com/app/apikey"
              target="_blank"
              rel="noreferrer"
              className="text-sage-600 underline hover:text-sage-800"
            >
              Google AI Studio
            </a>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Input
              id="apiKey"
              placeholder="Enter your Gemini API key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full"
              type="password"
            />
          </div>
        </div>

        <DialogFooter className="sm:justify-between">
          <Button
            variant="outline"
            onClick={() => {
              setApiKey("");
              geminiService.clearApiKey();
              toast({
                title: "API Key Cleared",
                description: "Your stored API key has been removed",
              });
            }}
          >
            Clear Key
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSave}>Save Key</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default GeminiApiKeyModal;
