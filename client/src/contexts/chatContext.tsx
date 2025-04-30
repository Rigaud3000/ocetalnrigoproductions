import { createContext, useContext, useState, ReactNode, useCallback } from "react";
import { sendMessageToAI } from "@/lib/huggingface";
import { useToast } from "@/hooks/use-toast";

interface Message {
  type: 'user' | 'ai';
  text: string;
}

interface ChatContextType {
  messages: Message[];
  sendMessage: (message: string) => void;
  isLoading: boolean;
  clearMessages: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const sendMessage = useCallback(async (message: string) => {
    // Add user message to the chat
    setMessages((prev) => [...prev, { type: 'user', text: message }]);
    setIsLoading(true);

    try {
      // Send message to API and get response
      const response = await sendMessageToAI(message);

      // Add AI response to the chat
      setMessages((prev) => [...prev, { type: 'ai', text: response.response }]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get a response from the AI assistant. Please try again.",
        variant: "destructive",
      });
      console.error("Error sending message to AI:", error);
    } finally {
      setIsLoading(false);
    }
  }, [toast]);

  const clearMessages = useCallback(() => {
    setMessages([]);
  }, []);

  return (
    <ChatContext.Provider value={{ messages, sendMessage, isLoading, clearMessages }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChatContext() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
}