import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Send, Info } from 'lucide-react';
import { sanitize, isBot, limitLength } from '../lib/security';

interface FormData {
  needs: string;
  goals: string;
  company: string;
  budget: string;
  subscription: string;
  honeypot: string;
}

const steps = [
  { 
    id: 'needs', 
    question: 'Was brauchst du? 🚀', 
    placeholder: 'Oder etwas anderes...',
    options: ['Neue Website', 'Website Redesign', 'Online-Shop', 'Landingpage']
  },
  { 
    id: 'goals', 
    question: 'Was ist dein Hauptziel? 🎯', 
    placeholder: 'Oder dein eigenes Ziel...',
    options: ['Mehr Kunden/Anfragen', 'Modernes Design', 'Google-Sichtbarkeit', 'Mitarbeitergewinnung']
  },
  { 
    id: 'company', 
    question: 'Wie heißt dein Unternehmen? 🏢', 
    placeholder: 'z.B. Vamela Webdesign' 
  },
  { 
    id: 'budget', 
    question: 'Wie hoch ist dein Budget? 💰', 
    placeholder: 'z.B. eigenes Budget...',
    options: ['Ab 1.500€', '2.500€ - 5.000€', 'Über 5.000€', 'Abo (ab 299€/mtl)']
  },
];

export function GamifiedWhatsAppForm({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({ 
    needs: '', 
    goals: '', 
    company: '', 
    budget: '', 
    subscription: '',
    honeypot: ''
  });
  const [inputValue, setInputValue] = useState('');

  const handleNext = (overrideValue?: string) => {
    if (isBot(formData.honeypot)) {
      console.warn('Bot detected');
      return;
    }

    const valueToSave = overrideValue || inputValue;
    if (!valueToSave) return;

    const currentStepId = steps[step].id as keyof FormData;
    const updatedFormData = { ...formData, [currentStepId]: valueToSave };
    setFormData(updatedFormData);
    setInputValue('');

    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      sendToWhatsApp(updatedFormData);
    }
  };

  const sendToWhatsApp = (finalData: FormData) => {
    const sanitizedNeeds = sanitize(limitLength(finalData.needs, 200));
    const sanitizedGoals = sanitize(limitLength(finalData.goals, 200));
    const sanitizedCompany = sanitize(limitLength(finalData.company, 100));
    const sanitizedBudget = sanitize(limitLength(finalData.budget, 100));

    const message = `Hallo VAMELA, ich habe eine Anfrage:
- Bedarf: ${sanitizedNeeds}
- Ziel: ${sanitizedGoals}
- Unternehmen: ${sanitizedCompany}
- Budget/Abo: ${sanitizedBudget}`;
    
    const whatsappUrl = `https://wa.me/4917624200179?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const progress = ((step + 1) / steps.length) * 100;

  return (
    <div className="w-full">
      <div className="hidden" aria-hidden="true">
        <input 
          type="text" 
          name="honeypot" 
          tabIndex={-1} 
          autoComplete="off"
          value={formData.honeypot}
          onChange={(e) => setFormData({...formData, honeypot: e.target.value})}
        />
      </div>

      <div className="h-2 w-full bg-slate-100 rounded-full mb-8 overflow-hidden">
        <motion.div 
          className="h-full bg-slate-900"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <motion.label 
            className="flex items-center gap-2 text-2xl font-bold text-slate-900 leading-tight"
          >
            {steps[step].question}
          </motion.label>
          
          <div className="space-y-4">
            {steps[step].options && (
              <div className="flex flex-wrap gap-2 mb-4">
                {steps[step].options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleNext(opt)}
                    className="px-4 py-2.5 bg-slate-50 border border-slate-200 hover:border-slate-400 hover:bg-slate-100 text-slate-700 rounded-xl font-medium text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
            
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={steps[step].placeholder}
              maxLength={200}
              className="w-full p-4 text-base rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all duration-300 bg-white text-slate-900"
              onKeyDown={(e) => e.key === 'Enter' && inputValue && handleNext()}
              autoFocus
            />
          </div>

          <div className="flex justify-end pt-2">
            <motion.button
              onClick={() => handleNext()}
              disabled={!inputValue}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 rounded-full font-medium text-sm sm:text-base flex items-center gap-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900"
            >
              {step === steps.length - 1 ? 'Anfrage senden' : 'Weiter'}
              {step === steps.length - 1 ? <Send className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
