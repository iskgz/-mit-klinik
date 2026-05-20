import { useState, useEffect, useRef } from "react";
import { DENTIST_INFO } from "./data/dentistData";
import { Treatment } from "./types";
import Header from "./components/Header";
import ServicesSection from "./components/ServicesSection";
import TreatmentDetailView from "./components/TreatmentDetailView";
import CasesGallery from "./components/CasesGallery";
import ClinicGallery from "./components/ClinicGallery";
import Certifications from "./components/Certifications";
import ReviewSection from "./components/ReviewSection";
import BlogSection from "./components/BlogSection";
import FaqSection from "./components/FaqSection";
import AppointmentForm from "./components/AppointmentForm";
import Footer from "./components/Footer";
import { 
  Smile, 
  CalendarCheck, 
  ShieldCheck, 
  Award, 
  Clock, 
  PhoneCall, 
  Flame, 
  FileText, 
  UserSquare2,
  ChevronRight,
  Heart
} from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [selectedAppointmentTreatment, setSelectedAppointmentTreatment] = useState<string | null>(null);
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  // Smooth scroll helper
  const navigateToSection = (sectionId: string) => {
    setSelectedTreatment(null);

    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        const headerOffset = 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        setActiveSection(sectionId);
      }
    }, 60);
  };

  // Monitor screen scrolling to update navigation highlight triggers automatically
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const sections = ["hero", "hakkimda", "tedaviler", "vakalar", "klinik", "sertifikalar", "yorumlar", "blog", "sss", "randevu", "iletisim"];
      
      for (const sect of sections) {
        const el = document.getElementById(sect);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sect);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTreatmentSelectForAppointment = (treatmentName: string) => {
    setSelectedAppointmentTreatment(treatmentName);
    // Auto-scroll to form coordinates
    setTimeout(() => {
      navigateToSection("randevu");
    }, 100);
  };

  return (
    <div id="dentist-root" className="min-h-screen bg-white font-sans text-slate-800 antialiased overflow-x-hidden selection:bg-sky-100 selection:text-sky-900">
      
      {/* Header element */}
      <Header onNavigate={navigateToSection} activeSection={activeSection} />

      {selectedTreatment ? (
        <TreatmentDetailView
          treatment={selectedTreatment}
          onBack={() => {
            setSelectedTreatment(null);
            setTimeout(() => {
              const el = document.getElementById("tedaviler");
              if (el) {
                const headerOffset = 100;
                const elementPosition = el.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
              }
            }, 60);
          }}
          onBookAppointment={(treatmentName) => {
            setSelectedTreatment(null);
            setSelectedAppointmentTreatment(treatmentName);
            setTimeout(() => {
              const el = document.getElementById("randevu");
              if (el) {
                const headerOffset = 100;
                const elementPosition = el.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
              }
            }, 100);
          }}
        />
      ) : (
        <>
          {/* Hero Section */}
          <section
            id="hero"
        className="pt-28 pb-16 md:pt-32 xl:pt-36 md:pb-24 bg-sky-100 relative overflow-hidden flex flex-col justify-between"
      >
        {/* Soft abstract shape mapping the aesthetic layouts of the target */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 pointer-events-none" />
        <div className="absolute top-1/2 -left-48 w-96 h-96 bg-sky-50/50 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-12 items-center">
            
            {/* Left Hero Texts */}
            <div className="xl:col-span-6 space-y-6 md:space-y-8 text-center xl:text-left flex flex-col items-center xl:items-start select-none">
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-sans font-bold text-slate-900 tracking-tight leading-[1.08] text-center xl:text-left"
              >
                Aydınlık <br />
                Gülüşünüz <br />
                Sizi Bekliyor
              </motion.h1>

              {/* Mockup styled rounded capsule action button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="pt-2 text-left w-full"
              >
                <button
                  onClick={() => navigateToSection("randevu")}
                  className="bg-sky-500 hover:bg-sky-600 text-white font-sans font-semibold px-8 py-4 rounded-full text-sm inline-flex items-center space-x-2.5 shadow-lg shadow-sky-600/10 hover:shadow-sky-600/20 transition-all duration-300 hover:scale-[1.03] cursor-pointer"
                >
                  <span>Hemen Randevu Al</span>
                  <ChevronRight className="w-4.5 h-4.5" />
                </button>
              </motion.div>
            </div>

            {/* Right Hero Visual elements - Confident patient/clinician with sage clean background */}
            <div className="xl:col-span-6 relative flex justify-center xl:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative w-full max-w-[320px] sm:max-w-sm aspect-[4/5] overflow-visible"
              >
                {/* Clean matching background rotating decorative plate */}
                <div className="absolute inset-0 bg-sky-200/30 rounded-[48px] -rotate-3 transition duration-500" />
                
                {/* Overlapping Main Frame with large curvy corners */}
                <div className="absolute inset-1 rounded-[48px] overflow-hidden bg-white border-4 border-white shadow-xl group">
                  <img
                    src="/doctor-hero.jpeg"
                    alt="Sağlıklı Diş Tedavisi ve Gülüş Tasarımı"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-700 object-top"
                  />
                  
                  {/* Glassmorphism float overlay badge inside hero */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md p-4 rounded-3xl shadow-lg border border-white/50 flex items-center space-x-3 text-slate-805">
                    <div className="w-10 h-10 rounded-2xl bg-sky-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
                      DT
                    </div>
                    <div>
                      <span className="block text-[9px] font-extrabold text-sky-600 uppercase tracking-widest font-mono">KLİNİK UZMANI</span>
                      <span className="block text-sm font-bold text-slate-900 leading-tight">{DENTIST_INFO.name}</span>
                    </div>
                  </div>
                </div>

              </motion.div>
            </div>

          </div>

          {/* Bottom Custom Navigation tabs mimic the mockup */}
          <div className="mt-16 border-t border-sky-200/50 pt-8 w-full hidden md:block">
            <div className="flex flex-wrap items-center justify-center lg:justify-between gap-4 text-xs font-bold tracking-widest text-sky-700/90 uppercase font-display">
              
              <button
                onClick={() => navigateToSection("vakalar")}
                className="px-4 py-2.5 rounded-full hover:bg-white/40 hover:text-sky-955 transition-all cursor-pointer"
              >
                Vakalarımız
              </button>

              <div className="px-5 py-2.5 rounded-full bg-white/40 border border-white/60 text-sky-950 font-extrabold flex items-center space-x-2 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-ping" />
                <span>+8,500 Mutlu Danışan</span>
              </div>

              <button
                onClick={() => navigateToSection("hakkimda")}
                className="px-4 py-2.5 rounded-full hover:bg-white/40 hover:text-sky-955 transition-all cursor-pointer"
              >
                Hakkımızda
              </button>

              <button
                onClick={() => navigateToSection("tedaviler")}
                className="px-4 py-2.5 rounded-full hover:bg-white/40 hover:text-sky-955 transition-all cursor-pointer"
              >
                Tedavilerimiz
              </button>

              <button
                onClick={() => navigateToSection("sss")}
                className="px-4 py-2.5 rounded-full hover:bg-white/40 hover:text-sky-955 transition-all cursor-pointer"
              >
                Neden Biz?
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Hakkımda Section & Chronological Journey */}
      <section id="hakkimda" className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
        {/* Soft abstract graphic background mapping target layout */}
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-sky-50/50 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left bio visual asymmetric collage layout mimic */}
            <div className="lg:col-span-5 relative flex flex-col sm:flex-row gap-4 items-center justify-center">
              
              {/* Primary Curvy Medical/Dental Action Image */}
              <div className="relative w-full max-w-[280px] aspect-[4/5] rounded-tl-[80px] rounded-br-[80px] rounded-tr-[24px] rounded-bl-[24px] overflow-hidden shadow-lg border border-sky-100/50">
                <img
                  src="/about/about-treatment-1.jpeg"
                  alt="Dt. Ümit Narin klinik tedavi süreci"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Offset Secondary Curvy Portrait overlapping style */}
              <div className="relative w-full max-w-[200px] aspect-[3/4] rounded-tr-[60px] rounded-bl-[60px] rounded-tl-[16px] rounded-br-[16px] overflow-hidden shadow-md border border-white -mt-8 sm:mt-12 bg-sky-50">
                <img
                  src="/about/about-treatment-2.jpeg"
                  alt={`${DENTIST_INFO.name} hasta muayenesi`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Float Experience badge */}
              <div className="absolute top-4 left-4 bg-sky-600/95 backdrop-blur-sm text-white font-sans font-bold text-xs px-3.5 py-1.5 rounded-full shadow-md">
                {DENTIST_INFO.experienceYears} Yıl Deneyim
              </div>
            </div>

            {/* Right bio text and details matching target narrative */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-sky-100 text-sky-800 text-[10px] font-bold tracking-widest uppercase mb-4">
                  BİZİMLE GÜLÜMSEYİN
                </span>
                <h2 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 tracking-tight leading-snug">
                  Size Özel ve Samimi <br />
                  Diş Sağlığı Yaklaşımı
                </h2>
              </div>

              <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed font-normal">
                <p className="font-semibold text-sky-800">
                  {DENTIST_INFO.name} liderliğindeki uzman ekibimizle, ağız sağlığınızı ve estetik beklentilerinizi en modern tanı yöntemleriyle karşılıyoruz.
                </p>
                <p>
                  Sıcak, modern ve sterilliği en üst standartlarda tutulan kliniğimizde, her muayeneyi stressiz ve ağrısız bir denetim sürecine dönüştürmek birincil önceliğimizdir. Güven veren uzmanlık ve samimiyetimizi bir araya getirerek, her gülüşü tescilli bir sanat eserine dönüştürüyoruz.
                </p>
              </div>

              {/* Custom Action Pill */}
              <div className="pt-2">
                <button
                  onClick={() => navigateToSection("tedaviler")}
                  className="bg-sky-650 hover:bg-sky-700 text-white font-sans font-bold px-7 py-3 rounded-full text-xs tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                >
                  Daha Fazla Bilgi
                </button>
              </div>
            </div>

          </div>

          {/* Chronological Steps Timeline Grid from the target mockup */}
          <div className="mt-24 border-t border-sky-100 pt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
              
              {/* Step 1 */}
              <div className="space-y-3 relative group">
                <div className="font-sans font-light text-5xl md:text-6xl text-sky-200/70 group-hover:text-sky-500/30 transition-colors duration-300">
                  01
                </div>
                <h3 className="font-sans font-bold text-slate-900 text-lg">
                  Klinik Planlama
                </h3>
                <p className="text-slate-500 text-sm max-w-xs mx-auto">
                  Sizin için en uygun tarihe pratik, hızlı ve kolay online randevu planlaması.
                </p>
              </div>

              {/* Step 2 */}
              <div className="space-y-3 relative group">
                <div className="font-sans font-light text-5xl md:text-6xl text-sky-200/70 group-hover:text-sky-500/30 transition-colors duration-300">
                  02
                </div>
                <h3 className="font-sans font-bold text-slate-900 text-lg">
                  Detaylı Analiz
                </h3>
                <p className="text-slate-500 text-sm max-w-xs mx-auto">
                  3D tomografi, ağız içi tarama ve kişiselleştirilmiş gülüş tasarımı değerlendirmesi.
                </p>
              </div>

              {/* Step 3 */}
              <div className="space-y-3 relative group">
                <div className="font-sans font-light text-5xl md:text-6xl text-sky-200/70 group-hover:text-sky-500/30 transition-colors duration-300">
                  03
                </div>
                <h3 className="font-sans font-bold text-slate-900 text-lg">
                  Estetik Tedavi
                </h3>
                <p className="text-slate-500 text-sm max-w-xs mx-auto">
                  Son teknoloji hekimlik yöntemleriyle tamamen ağrısız ve ömürlük estetik restorasyon.
                </p>
              </div>

            </div>

            {/* Book Now Bottom Button */}
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => navigateToSection("randevu")}
                className="bg-sky-500 hover:bg-sky-600 text-white font-sans font-semibold px-8 py-3.5 rounded-full text-xs tracking-widest uppercase shadow-md transition-all hover:scale-103 cursor-pointer"
              >
                Hemen Randevu Gönder
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Treatments Section */}
      <ServicesSection 
        onSelectTreatmentForAppointment={handleTreatmentSelectForAppointment} 
        onSelectTreatment={(treatment) => setSelectedTreatment(treatment)}
      />

      {/* Case Before-After Gallery Section */}
      <CasesGallery />

      {/* Clinic Interior Photo Gallery Section */}
      <ClinicGallery />

      {/* Certifications and achievements Section */}
      <Certifications />

      {/* Patients Feedback Reviews Section */}
      <ReviewSection />

      {/* Interactive Booking Appointment Form Section */}
      <AppointmentForm
        preselectedTreatmentName={selectedAppointmentTreatment}
        onClearPreselection={() => setSelectedAppointmentTreatment(null)}
      />

      {/* Information Blog Posts Section */}
      <BlogSection />

      {/* FAQ Accordion Section */}
      <FaqSection onNavigateToAppointment={() => navigateToSection("randevu")} />
        </>
      )}

      {/* Footer and Interactive Maps */}
      <Footer onNavigateToSection={navigateToSection} />

    </div>
  );
}
