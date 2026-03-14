import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Send, MessageCircle } from 'lucide-react';

interface FormData {
  needs: string;
  goals: string;
  company: string;
  budget: string;
}

const steps = [
  { id: 'needs', question: 'Was brauchst du genau?', placeholder: 'z.B. Neue Webseite, Landingpage...' },
  { id: 'goals', question: 'Was ist dein Ziel?', placeholder: 'z.B. Mehr Anfragen, Image-Aufbau...' },
  { id: 'company', question: 'Wie heißt dein Unternehmen?', placeholder: 'z.B. Muster GmbH' },
  { id: 'budget', question: 'Wie hoch ist dein Budget?', placeholder: 'z.B. 2.000€ - 5.000€' },
];

export function GamifiedWhatsAppForm({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({ needs: '', goals: '', company: '', budget: '' });
  const [inputValue, setInputValue] = useState('');

  const handleNext = () => {
    const currentStepId = steps[step].id as keyof FormData;
    setFormData({ ...formData, [currentStepId]: inputValue });
    setInputValue('');
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      sendToWhatsApp();
    }
  };

  const sendToWhatsApp = () => {
    const message = `Hallo VAMELA, ich habe eine Anfrage:
- Bedarf: ${formData.needs}
- Ziel: ${formData.goals}
- Unternehmen: ${formData.company}
- Budget: ${formData.budget}`;
    
    const whatsappUrl = `https://wa.me/4917624200179?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-4"
        >
          <label className="block text-lg font-semibold text-slate-900">
            {steps[step].question}
          </label>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={steps[step].placeholder}
            className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            onKeyDown={(e) => e.key === 'Enter' && inputValue && handleNext()}
          />
          <div className="flex justify-between items-center pt-4">
            <span className="text-sm text-slate-400">Schritt {step + 1} von {steps.length}</span>
            <button
              onClick={handleNext}
              disabled={!inputValue}
              className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all disabled:opacity-50"
            >
              {step === steps.length - 1 ? 'Anfrage senden' : 'Weiter'}
              {step === steps.length - 1 ? <Send className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
