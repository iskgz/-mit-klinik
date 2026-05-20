import { useState, useEffect } from "react";
import { Menu, X, Calendar, Phone, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

const navLinks = [
  { id: "hakkimda", label: "Hakkımda" },
  { id: "tedaviler", label: "Hizmetler" },
  { id: "vakalar", label: "Vaka Analizi" },
  { id: "klinik", label: "Klinik" },
  { id: "sertifikalar", label: "Eğitim" },
  { id: "yorumlar", label: "Yorumlar" },
  { id: "blog", label: "Blog" },
  { id: "sss", label: "S.S.S." },
];

const navDetails: Record<string, { eyebrow: string; description: string; items: string[] }> = {
  hakkimda: {
    eyebrow: "Hekim profili",
    description: "Dt. Ümit Narin'in klinik yaklaşımı, deneyimi ve hasta odaklı tedavi anlayışı.",
    items: ["Deneyim", "Tedavi yaklaşımı", "Klinik felsefesi"],
  },
  tedaviler: {
    eyebrow: "Tedavi seçenekleri",
    description: "İmplant, estetik diş hekimliği, kanal tedavisi ve modern gülüş tasarımı hizmetleri.",
    items: ["İmplant", "Gülüş tasarımı", "Diş beyazlatma"],
  },
  vakalar: {
    eyebrow: "Örnek çalışmalar",
    description: "Tedavi planlama sürecini ve klinik sonuçları daha anlaşılır hale getiren vaka sunumları.",
    items: ["Öncesi-sonrası", "Tedavi analizi", "Planlama detayları"],
  },
  klinik: {
    eyebrow: "Klinik ortamı",
    description: "Hijyen, konfor ve dijital diş hekimliği odağında hazırlanmış modern klinik alanı.",
    items: ["Klinik galeri", "Konum", "Çalışma saatleri"],
  },
  sertifikalar: {
    eyebrow: "Eğitim ve yetkinlik",
    description: "Mesleki eğitimler, sertifikalar ve uzmanlık gelişimini gösteren bölüm.",
    items: ["Sertifikalar", "Eğitimler", "Mesleki gelişim"],
  },
  yorumlar: {
    eyebrow: "Hasta deneyimleri",
    description: "Klinik deneyimini paylaşan hasta yorumları ve memnuniyet değerlendirmeleri.",
    items: ["Yorumlar", "Memnuniyet", "Deneyimler"],
  },
  blog: {
    eyebrow: "Bilgilendirici içerikler",
    description: "Ağız ve diş sağlığı hakkında kısa, anlaşılır ve güvenilir bilgilendirme yazıları.",
    items: ["Bakım önerileri", "Tedavi rehberleri", "Sık merak edilenler"],
  },
  sss: {
    eyebrow: "Hızlı cevaplar",
    description: "Randevu, tedavi süreci ve klinik hizmetleri hakkında sık sorulan sorular.",
    items: ["Randevu süreci", "Acil durumlar", "Tedavi soruları"],
  },
};

export default function Header({ onNavigate, activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openNavId, setOpenNavId] = useState<string | null>(null);
  const whatsappUrl = "https://wa.me/905464309708";
  const openNav = openNavId ? navLinks.find((link) => link.id === openNavId) : null;
  const openNavDetail = openNavId ? navDetails[openNavId] : null;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    setOpenNavId(null);
    onNavigate(id);
  };

  return (
    <header
      id="main-header"
      onMouseLeave={() => setOpenNavId(null)}
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-full ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-md border border-white/50 py-2 px-4 sm:px-6 max-w-6xl mx-auto"
          : "bg-white/45 backdrop-blur-sm border border-white/30 py-3 px-4 sm:py-3.5 sm:px-6 max-w-6xl mx-auto"
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={() => handleLinkClick("hero")}
            className="flex items-center text-left focus:outline-none cursor-pointer group shrink-0"
            aria-label="Ana sayfaya dön"
          >
            <img
              src="/logo-umit-narin.svg"
              alt="DT. Ümit Narin Diş Hekimi"
              className="h-9 sm:h-12 w-auto max-w-[180px] sm:max-w-[320px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </button>

          <nav className="hidden lg:flex items-center space-x-0.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onMouseEnter={() => setOpenNavId(link.id)}
                onFocus={() => setOpenNavId(link.id)}
                onClick={() => handleLinkClick(link.id)}
                className={`relative px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest transition-colors duration-200 cursor-pointer ${
                  activeSection === link.id || openNavId === link.id
                    ? "text-sky-600"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
                {(activeSection === link.id || openNavId === link.id) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-sky-550 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

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

          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 rounded-full bg-white/70 text-slate-700 hover:bg-sky-50 hover:text-sky-700 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm"
              aria-label="Menü"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {openNav && openNavDetail && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="hidden lg:block absolute left-6 right-6 top-full mt-3 rounded-3xl bg-white/95 backdrop-blur-md border border-sky-100 shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-[1fr_auto] gap-8 p-6">
              <div>
                <span className="text-[10px] font-extrabold tracking-widest uppercase text-sky-600">
                  {openNavDetail.eyebrow}
                </span>
                <h3 className="mt-1 text-xl font-bold text-slate-900">{openNav.label}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500">
                  {openNavDetail.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {openNavDetail.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-800"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={() => handleLinkClick(openNav.id)}
                className="self-center inline-flex items-center gap-2 rounded-full bg-sky-600 px-5 py-3 text-xs font-extrabold uppercase tracking-widest text-white shadow-md transition hover:bg-sky-700"
              >
                Bölüme Git
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden absolute left-0 right-0 top-full mt-3 overflow-hidden rounded-3xl bg-white/95 backdrop-blur-md border border-sky-100 shadow-xl"
          >
            <div className="p-4">
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`min-h-11 px-3 py-2 text-left text-sm font-bold rounded-2xl transition-colors ${
                      activeSection === link.id
                        ? "bg-sky-50 text-sky-700"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-[56px_1fr] gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp ile iletişime geç"
                  title="WhatsApp ile iletişime geç"
                  className="w-14 h-12 flex items-center justify-center text-slate-700 rounded-2xl bg-slate-50 hover:text-sky-600 hover:bg-sky-50"
                >
                  <Phone className="w-4 h-4 text-sky-500" />
                </a>
                <button
                  onClick={() => handleLinkClick("randevu")}
                  className="w-full flex items-center justify-center space-x-2 bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-2xl font-bold text-sm shadow-md"
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
