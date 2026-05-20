import { useState, useEffect } from "react";
import { Sparkles, Menu, X, Calendar, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onNavigate, activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const whatsappUrl = "https://wa.me/905464309708";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "hakkimda", label: "Hakkımda" },
    { id: "tedaviler", label: "Hizmetler" },
    { id: "vakalar", label: "Vaka Analizi" },
    { id: "klinik", label: "Klinik" },
    { id: "sertifikalar", label: "Eğitim" },
    { id: "yorumlar", label: "Yorumlar" },
    { id: "blog", label: "Blog" },
    { id: "sss", label: "S.S.S." },
    { id: "iletisim", label: "İletişim" },
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-full ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-md border border-white/50 py-2 px-6 max-w-6xl mx-auto"
          : "bg-white/45 backdrop-blur-sm border border-white/30 py-3.5 px-6 max-w-6xl mx-auto"
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleLinkClick("hero")}
            className="flex items-center space-x-2.5 text-left focus:outline-none cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-full bg-sky-500 flex items-center justify-center text-white shadow-sm group-hover:bg-sky-600 transition-colors duration-300">
              <Sparkles className="w-4.5 h-4.5" />
            </div>
            <div>
              <span className="block font-sans font-extrabold text-sm tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors duration-300">
                DT. ÜMİT NARİN
              </span>
              <span className="block font-mono text-[9px] text-sky-600 font-bold tracking-widest uppercase">
                KLİNİK HEKİMİ
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-0.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`relative px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest transition-colors duration-200 cursor-pointer ${
                  activeSection === link.id
                    ? "text-sky-600"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-sky-550 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* CTA & Phone Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp ile iletişime geç"
              title="WhatsApp ile iletişime geç"
              className="w-9 h-9 flex items-center justify-center text-slate-700 hover:text-sky-600 transition-colors rounded-full hover:bg-white/30"
            >
              <Phone className="w-3.5 h-3.5 text-sky-500 animate-pulse" />
            </a>
            <button
              onClick={() => handleLinkClick("randevu")}
              className="flex items-center space-x-1.5 bg-sky-500 hover:bg-sky-600 text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest shadow shadow-sky-500/10 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Randevu Al</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => handleLinkClick("randevu")}
              className="sm:hidden w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center text-sky-600 focus:outline-none"
              title="Randevu"
            >
              <Calendar className="w-4.5 h-4.5" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label="Menü"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-b border-slate-100 shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`block w-full text-left px-4 py-2.5 text-base font-semibold rounded-xl transition-colors ${
                    activeSection === link.id
                      ? "bg-sky-50 text-sky-700"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 pb-2 border-t border-slate-100 flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp ile iletişime geç"
                  title="WhatsApp ile iletişime geç"
                  className="w-11 h-11 flex items-center justify-center text-slate-700 rounded-xl hover:text-sky-600 hover:bg-sky-50"
                >
                  <Phone className="w-4 h-4 text-sky-500" />
                </a>
                <button
                  onClick={() => handleLinkClick("randevu")}
                  className="w-full flex items-center justify-center space-x-2 bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-xl font-bold text-sm shadow-md"
                >
                  <Calendar className="w-4.5 h-4.5" />
                  <span>Randevu Talebi Oluştur</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
