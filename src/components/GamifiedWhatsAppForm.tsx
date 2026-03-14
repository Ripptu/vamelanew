import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Send } from 'lucide-react';

interface FormData {
  needs: string;
  goals: string;
  company: string;
  budget: string;
}

const steps = [
  { id: 'needs', question: 'Was brauchst du? 🚀', placeholder: 'z.B. Neue Webseite...' },
  { id: 'goals', question: 'Was ist dein Ziel? 🎯', placeholder: 'z.B. Mehr Anfragen...' },
  { id: 'company', question: 'Wie heißt dein Unternehmen? 🏢', placeholder: 'z.B. Vamela' },
  { id: 'budget', question: 'Wie hoch ist dein Budget? 💰', placeholder: 'z.B. 2.000€ - 5.000€' },
];

export function GamifiedWhatsAppForm({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({ needs: '', goals: '', company: '', budget: '' });
  const [inputValue, setInputValue] = useState('');

  const handleNext = () => {
    const currentStepId = steps[step].id as keyof FormData;
    const updatedFormData = { ...formData, [currentStepId]: inputValue };
    setFormData(updatedFormData);
    setInputValue('');
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      sendToWhatsApp(updatedFormData);
    }
  };

  const sendToWhatsApp = (finalData: FormData) => {
    const message = `Hallo VAMELA, ich habe eine Anfrage:
- Bedarf: ${finalData.needs}
- Ziel: ${finalData.goals}
- Unternehmen: ${finalData.company}
- Budget: ${finalData.budget}`;
    
    const whatsappUrl = `https://wa.me/4917624200179?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const progress = ((step + 1) / steps.length) * 100;

  return (
    <div className="w-full">
      {/* Progress Bar */}
      <div className="h-2 w-full bg-slate-100 rounded-full mb-8 overflow-hidden">
        <motion.div 
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="space-y-6"
        >
          <motion.label 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="block text-2xl font-bold text-slate-900 leading-tight"
          >
            {steps[step].question}
          </motion.label>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={steps[step].placeholder}
            className="w-full p-5 text-lg rounded-2xl border-2 border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-300"
            onKeyDown={(e) => e.key === 'Enter' && inputValue && handleNext()}
            autoFocus
          />
          <div className="flex justify-end pt-2">
            <motion.button
              onClick={handleNext}
              disabled={!inputValue}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {step === steps.length - 1 ? 'Anfrage senden' : 'Weiter'}
              {step === steps.length - 1 ? <Send className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
