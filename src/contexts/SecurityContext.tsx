import React, { createContext, useContext, useState, useCallback } from 'react';

interface SecurityContextType {
  isBot: boolean;
  markAsBot: () => void;
  sanitizeInput: (input: string) => string;
  reportSecurityEvent: (event: string) => void;
}

const SecurityContext = createContext<SecurityContextType | undefined>(undefined);

export const SecurityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isBot, setIsBot] = useState(false);

  const markAsBot = useCallback(() => {
    setIsBot(true);
    console.warn('Security: Potential bot detected via honeypot.');
  }, []);

  const sanitizeInput = useCallback((input: string) => {
    // Basic client-side sanitization
    return input.replace(/[<>]/g, '').trim();
  }, []);

  const reportSecurityEvent = useCallback((event: string) => {
    // In a real app, this would send to a logging service
    console.error(`Security Event Reported: ${event}`);
  }, []);

  return (
    <SecurityContext.Provider value={{ isBot, markAsBot, sanitizeInput, reportSecurityEvent }}>
      {children}
    </SecurityContext.Provider>
  );
};

export const useSecurity = () => {
  const context = useContext(SecurityContext);
  if (context === undefined) {
    throw new Error('useSecurity must be used within a SecurityProvider');
  }
  return context;
};
