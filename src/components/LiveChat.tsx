import { useState, useRef, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, ExternalLink } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

// Initialize Gemini API
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  isLink?: boolean;
}

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: 'Hallo! Ich bin der VAMELA KI-Assistent. Wie kann ich dir heute helfen?', sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    
    // Add user message
    setMessages(prev => [...prev, { id: `user-${Date.now()}-${Math.random()}`, text: userMessage, sender: 'user' }]);

    // Check length constraint
    if (userMessage.length > 200) {
      setIsTyping(true);
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          id: `bot-${Date.now()}-1`, 
          text: 'Deine Frage ist sehr detailliert. Lass uns das am besten direkt auf WhatsApp besprechen, damit ich dir optimal helfen kann!', 
          sender: 'bot' 
        }, {
          id: `bot-${Date.now()}-2`,
          text: 'WhatsApp öffnen',
          sender: 'bot',
          isLink: true
        }]);
        setIsTyping(false);
      }, 600);
      return;
    }

    setIsTyping(true);

    try {
      const currentDate = new Date().toLocaleDateString('de-DE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
      // Call Gemini API
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `Du bist der freundliche, ehrliche und kompetente KI-Assistent der Webdesign-Agentur VAMELA. Heute ist ${currentDate}. Du beantwortest Fragen zu Webdesign, Strategie und der Agentur kurz und prägnant (max 2-3 Sätze). Wenn du etwas nicht weißt, gib es ehrlich zu und verweise auf ein persönliches Gespräch mit Christian (dem Gründer).`
        }
      });

      const botReply = response.text || "Entschuldigung, da ist etwas schiefgelaufen.";
      
      setMessages(prev => [...prev, { 
        id: `bot-${Date.now()}-${Math.random()}`, 
        text: botReply, 
        sender: 'bot' 
      }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { 
        id: `bot-error-${Date.now()}-${Math.random()}`, 
        text: "Entschuldigung, mein System ist gerade überlastet. Bitte schreibe uns direkt über WhatsApp!", 
        sender: 'bot' 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-slate-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-slate-800 transition-colors z-40 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:outline-none ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Chat öffnen"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 w-[350px] h-[500px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-slate-900 text-white p-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden p-1 shrink-0">
                  <img src="https://s1.directupload.eu/images/260311/4p548rp9.png" alt="VAMELA" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">VAMELA Support</h3>
                  <div className="flex items-center gap-1 text-xs text-slate-300">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    KI-Assistent Online
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-white transition-colors p-1 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-sm"
                aria-label="Chat schließen"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl p-3 text-sm ${
                    msg.sender === 'user' 
                      ? 'bg-primary text-white rounded-br-sm' 
                      : 'bg-white border border-slate-200 text-slate-800 rounded-bl-sm shadow-sm'
                  }`}>
                    {msg.isLink ? (
                      <a 
                        href="https://wa.me/4917624200179" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[#25D366] font-bold hover:underline focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:outline-none rounded-sm px-1"
                      >
                        {msg.text} <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <p className="leading-relaxed">{msg.text}</p>
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-sm p-3 shadow-sm flex gap-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-100 shrink-0">
              <div className="relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Schreibe eine Nachricht..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-full py-3 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  aria-label="Chat Nachricht eingeben"
                />
                <button 
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="absolute right-1.5 top-1.5 bottom-1.5 w-9 bg-primary text-white rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-hover transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:outline-none"
                  aria-label="Nachricht senden"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </div>
              <div className="text-center mt-2">
                <span className={`text-[10px] ${inputValue.length > 200 ? 'text-red-500 font-bold' : 'text-slate-400'}`}>
                  {inputValue.length}/200 Zeichen
                </span>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
