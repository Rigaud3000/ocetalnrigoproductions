import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, X, Send, Bot } from "lucide-react";
import { useChatContext } from "@/contexts/chatContext";
import { motion, AnimatePresence } from "framer-motion";

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(true);
  const messageInputRef = useRef<HTMLInputElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const { messages, isLoading, sendMessage } = useChatContext();

  // Scroll to bottom of messages when new messages arrive
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    // Focus input when chat is opened
    if (!isOpen) {
      setTimeout(() => {
        messageInputRef.current?.focus();
      }, 300);
    }
  };
  
  const closeChat = () => {
    setIsOpen(false);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (messageInputRef.current && messageInputRef.current.value.trim()) {
      sendMessage(messageInputRef.current.value);
      messageInputRef.current.value = "";
    }
  };

  return (
    <div className="fixed bottom-20 right-6 z-30">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="bg-white rounded-lg shadow-xl overflow-hidden w-80 max-h-[500px] flex flex-col mb-4"
          >
            <div className="bg-black text-white p-4 flex justify-between items-center">
              <h3 className="font-bold">AI Assistant</h3>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:text-amber-500 h-8 w-8 p-0" 
                onClick={closeChat}
              >
                <X size={18} />
              </Button>
            </div>
            
            <div 
              ref={messagesContainerRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px] max-h-[350px]"
            >
              {messages.length === 0 ? (
                <div className="flex items-start">
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm">
                      Hi there! I'm Ms. Angel, your AI assistant. How can I help you with your business needs today?
                    </p>
                  </div>
                </div>
              ) : (
                messages.map((msg, index) => (
                  <div key={index} className={`flex items-start ${msg.type === 'user' ? 'justify-end' : ''}`}>
                    <div 
                      className={`rounded-lg p-3 max-w-[80%] ${
                        msg.type === 'user' 
                          ? 'bg-amber-500 text-white' 
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                    </div>
                  </div>
                ))
              )}
              
              {isLoading && (
                <div className="flex items-start">
                  <div className="bg-gray-100 rounded-lg p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <form onSubmit={handleSubmit} className="border-t p-4">
              <div className="flex items-center">
                <Input
                  ref={messageInputRef}
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 border rounded-l-lg px-4 py-2 focus:ring-2 focus:ring-amber-500"
                  disabled={isLoading}
                />
                <Button 
                  type="submit"
                  className="bg-amber-500 text-white rounded-r-lg hover:bg-black transition"
                  disabled={isLoading}
                >
                  <Send size={18} />
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleChat}
        className="bg-red-500 text-white p-4 rounded-full shadow-lg hover:bg-red-600 transition flex items-center space-x-2"
        aria-label="Chat with AI Assistant"
      >
        <div className="relative">
          <MessageSquare size={24} className="absolute -top-2 -right-2 text-red-500 bg-white rounded-full p-1" />
          <Bot size={24} />
        </div>
      </motion.button>
    </div>
  );
}
