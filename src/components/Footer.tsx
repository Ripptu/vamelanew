import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <img src="https://i.postimg.cc/Lm8nq1Sf/Logo-weiss.png" alt="VAMELA Logo" className="h-6 w-auto" referrerPolicy="no-referrer" />
        </div>
        
        <div className="flex gap-6 text-sm text-slate-500">
          <Link to="/impressum" className="hover:text-slate-900 transition-colors">Impressum</Link>
          <Link to="/datenschutz" className="hover:text-slate-900 transition-colors">Datenschutz</Link>
          <Link to="/agb" className="hover:text-slate-900 transition-colors">AGB</Link>
        </div>
        
        <div className="text-sm text-slate-400">
          © {new Date().getFullYear()} VAMELA. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
