import { useState, useRef, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, ExternalLink, MessageCircle } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

// Initialize Gemini API
let ai: GoogleGenAI | null = null;

function getAiClient() {
  if (!ai) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("GEMINI_API_KEY is not set");
      return null;
    }
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
}

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
    if (isOpen && window.innerWidth < 640) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [messages, isTyping, isOpen]);

  const handleSendToWhatsApp = () => {
    const historyString = messages.map(m => `${m.sender === 'user' ? 'Du' : 'VAMELA'}: ${m.text}`).join('\n');
    const whatsappUrl = `https://wa.me/4917624200179?text=${encodeURIComponent('Hier ist mein Chat-Verlauf mit dem VAMELA KI-Assistenten:\n\n' + historyString)}`;
    window.open(whatsappUrl, '_blank');
  };

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

    const aiClient = getAiClient();
    if (!aiClient) {
      setMessages(prev => [...prev, { 
        id: `bot-error-${Date.now()}-${Math.random()}`, 
        text: "Entschuldigung, der Chat ist aktuell nicht verfügbar.", 
        sender: 'bot' 
      }]);
      setIsTyping(false);
      return;
    }

    try {
      const currentDate = new Date().toLocaleDateString('de-DE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
      // Call Gemini API
      const response = await aiClient.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `Du bist der freundliche, ehrliche und kompetente KI-Assistent der Webdesign-Agentur VAMELA. Heute ist ${currentDate}. Du beantwortest Fragen zu Webdesign, Strategie und der Agentur kurz und prägnant (max 2-3 Sätze). Wenn du etwas nicht weißt, gib es ehrlich zu. Wenn es passend klingt, schlage vor, Christian direkt persönlich auf WhatsApp zu fragen. Wenn du diesen Vorschlag machst, beende deinen Satz mit dem exakten Wort "WHATSAPP_LINK".`
        }
      });

      let botReply = response.text || "Entschuldigung, da ist etwas schiefgelaufen.";
      const showWhatsAppLink = botReply.includes("WHATSAPP_LINK");
      botReply = botReply.replace("WHATSAPP_LINK", "").trim();
      
      setMessages(prev => {
        const newMessages = [...prev, { 
          id: `bot-${Date.now()}-${Math.random()}`, 
          text: botReply, 
          sender: 'bot' 
        }];

        if (showWhatsAppLink) {
          newMessages.push({
            id: `bot-${Date.now()}-link`,
            text: 'Christian auf WhatsApp fragen',
            sender: 'bot',
            isLink: true
          });
        }
        return newMessages;
      });
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
        className={`fixed bottom-6 right-6 w-14 h-14 bg-heading text-white rounded-full border border-heading flex items-center justify-center hover:bg-heading/90 transition-colors z-40 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:outline-none ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Chat öffnen"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end justify-end p-4 sm:p-6 pointer-events-none">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-heading/20 backdrop-blur-sm pointer-events-auto sm:hidden"
            />
            
            {/* Chat Window */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full sm:w-[350px] h-[500px] max-h-[90vh] bg-white rounded-2xl border border-border flex flex-col overflow-hidden relative z-10 pointer-events-auto mb-16 sm:mb-20"
            >
              {/* Header */}
              <div className="bg-primary text-white p-4 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <button onClick={() => setIsOpen(false)} className="md:hidden p-1">
                    <X className="w-6 h-6" />
                  </button>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden p-1 shrink-0">
                    <img src="https://s1.directupload.eu/images/260311/4p548rp9.png" alt="VAMELA" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">VAMELA Support</h3>
                    <div className="flex items-center gap-1 text-xs text-white/80">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      Online
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={handleSendToWhatsApp}
                    className="text-white hover:text-white/80 transition-colors p-1"
                    aria-label="Verlauf auf WhatsApp senden"
                  >
                    <MessageCircle className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="hidden md:block text-white/80 hover:text-white transition-colors p-1"
                    aria-label="Chat schließen"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] rounded-lg p-3 text-sm relative ${
                      msg.sender === 'user' 
                        ? 'bg-primary text-white rounded-tr-none' 
                        : 'bg-white text-body rounded-tl-none border border-border'
                    }`}>
                      {msg.isLink ? (
                        <a 
                          href="https://wa.me/4917624200179" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-primary font-bold hover:underline"
                        >
                          {msg.text} <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : (
                        <p className="leading-relaxed">{msg.text}</p>
                      )}
                      {/* Tail */}
                      <div className={`absolute top-0 w-2 h-2 ${msg.sender === 'user' ? '-right-2 bg-primary' : '-left-2 bg-white'}`} style={{ clipPath: msg.sender === 'user' ? 'polygon(0 0, 100% 0, 0 100%)' : 'polygon(0 0, 100% 0, 100% 100%)' }}></div>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white rounded-lg rounded-tl-none p-3 border border-border flex gap-1">
                      <div className="w-2 h-2 bg-body rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-body rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-body rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-border shrink-0">
                <div className="relative flex items-center gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Nachricht..."
                    className="flex-1 bg-background border border-border rounded-full py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-body"
                    aria-label="Chat Nachricht eingeben"
                  />
                  <button 
                    type="submit"
                    disabled={!inputValue.trim() || isTyping}
                    className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
                    aria-label="Nachricht senden"
                  >
                    <Send className="w-4 h-4 ml-0.5" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
