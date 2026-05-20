import { useState, useMemo } from "react";
import { TREATMENTS } from "../data/dentistData";
import { Treatment } from "../types";
import {
  Sparkles,
  Activity,
  Shield,
  Layers,
  Heart,
  Scissors,
  CheckCircle,
  Award,
  BookOpen,
  Smile,
  X,
  Search,
  Clock,
  HeartHandshake,
  CalendarDays,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ServicesSectionProps {
  onSelectTreatmentForAppointment: (treatmentName: string) => void;
  onSelectTreatment: (treatment: Treatment) => void;
}

export default function ServicesSection({ onSelectTreatmentForAppointment, onSelectTreatment }: ServicesSectionProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"all" | "estetik" | "cerrahi" | "genel">("all");
  const [activeDetailTreatment, setActiveDetailTreatment] = useState<Treatment | null>(null);

  // Map icon strings to Lucide components
  const renderIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-sky-600 group-hover:text-white transition-colors duration-300" };
    switch (iconName) {
      case "Sparkles":
        return <Sparkles {...props} />;
      case "Activity":
        return <Activity {...props} />;
      case "ShieldAlert":
        return <Shield {...props} />;
      case "Layers":
        return <Layers {...props} />;
      case "Heart":
        return <Heart {...props} />;
      case "Scissors":
        return <Scissors {...props} />;
      case "CheckCircle":
        return <CheckCircle {...props} />;
      case "Award":
        return <Award {...props} />;
      case "Eye":
        return <BookOpen {...props} />;
      case "Smile":
        return <Smile {...props} />;
      default:
        return <CheckCircle {...props} />;
    }
  };

  // Treatment categorization
  const categoriseTreatment = (id: string): "estetik" | "cerrahi" | "genel" => {
    if (["gulus-tasarimi", "dis-beyazlatma", "lamina-veneer"].includes(id)) {
      return "estetik";
    }
    if (["implant-tedavisi", "zirkonyum-kaplama", "dis-eti-tedavileri"].includes(id)) {
      return "cerrahi";
    }
    return "genel"; // kanal, dolgu, diş taşı, çocuk diş
  };

  // Turkish & Case Insensitive search normalizer for robust search experience
  const normalizeForSearch = (str: string): string => {
    if (!str) return "";
    return str
      .replace(/İ/g, "i")
      .replace(/I/g, "i")
      .replace(/ı/g, "i")
      .replace(/ş/g, "s")
      .replace(/Ş/g, "s")
      .replace(/ç/g, "c")
      .replace(/Ç/g, "c")
      .replace(/ğ/g, "g")
      .replace(/Ğ/g, "g")
      .replace(/ü/g, "u")
      .replace(/Ü/g, "u")
      .replace(/ö/g, "o")
      .replace(/Ö/g, "o")
      .toLowerCase();
  };

  const filteredTreatments = useMemo(() => {
    const normalizedTerm = normalizeForSearch(searchTerm);
    return TREATMENTS.filter((t) => {
      const matchesSearch =
        normalizeForSearch(t.name).includes(normalizedTerm) ||
        normalizeForSearch(t.shortDesc).includes(normalizedTerm);

      const cat = categoriseTreatment(t.id);
      const matchesCategory = selectedCategory === "all" || cat === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <section id="tedaviler" className="py-24 bg-gradient-to-b from-sky-50/50 to-white relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-cyan-100/30 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-sky-100/30 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-50 text-sky-700 text-xs font-bold tracking-widest uppercase mb-4">
              Ağız ve Diş Sağlığı
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 tracking-tight leading-tight">
              Kişiye Özel Profesyonel Tedavi Çözümleri
            </h2>
            <p className="mt-4 text-slate-600 text-base md:text-lg">
              Estetik beklentilerden koruyucu tedavilere, en son tıbbi teknolojiler ve modern yaklaşımlarla 
              sağlıklı bir ağız yapısına kavuşmanızı sağlıyoruz.
            </p>
          </motion.div>
        </div>

        {/* Filters and Search and Stats */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 justify-between items-center">
          {/* Category Tabs */}
          <div className="flex bg-slate-100 p-1.5 rounded-xl overflow-x-auto w-full md:w-auto scrollbar-none">
            {[
              { id: "all", label: "Tüm Tedaviler" },
              { id: "estetik", label: "Estetik Diş" },
              { id: "cerrahi", label: "Cerrahi & Protez" },
              { id: "genel", label: "Genel & Koruyucu" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  selectedCategory === tab.id
                    ? "bg-white text-sky-700 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
            <input
              type="text"
              placeholder="Tedavi veya işlem ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all text-slate-800"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTreatments.map((treatment, index) => (
            <motion.div
              layoutId={`card-container-${treatment.id}`}
              id={`treatment-card-${treatment.id}`}
              key={treatment.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
              className="bg-white/40 hover:bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-sky-200/50 hover:border-sky-500/40 shadow-sm transition-all duration-300 flex items-center justify-between gap-6 group cursor-pointer"
              onClick={() => onSelectTreatment(treatment)}
            >
              <div className="flex-1 space-y-2 text-left">
                <span className="block font-mono text-[9px] text-sky-600 font-bold tracking-widest uppercase">TEDAVİLERİMİZ</span>
                <h3 className="text-sm md:text-base font-bold text-slate-900 group-hover:text-sky-850 transition-colors duration-200 uppercase tracking-widest font-display">
                  {treatment.name}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 pr-2">
                  {treatment.shortDesc}
                </p>
                <div className="pt-2">
                  <span className="text-[10px] font-extrabold text-sky-700/80 group-hover:text-sky-900 transition-colors flex items-center gap-1 uppercase tracking-wider">
                    <span>Daha fazla detay</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>

              {/* Icon Holder on the right inside an outline bubble exactly like the mockup */}
              <div className="w-14 h-14 rounded-2xl border border-sky-300/40 group-hover:bg-sky-500 flex items-center justify-center shrink-0 transition-all duration-300 overflow-hidden">
                {treatment.id === "cocuk-dis-hekimligi" ? (
                  <img
                    src="/child-dentistry.png"
                    alt="Çocuk Diş Hekimliği"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  renderIcon(treatment.icon)
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {filteredTreatments.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-200">
            <p className="text-slate-500 font-medium">Aramanızla eşleşen bir tedavi bulunamadı.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="mt-3 text-sky-600 hover:text-sky-700 text-sm font-semibold hover:underline"
            >
              Filtreleri Sıfırla
            </button>
          </div>
        )}
      </div>

      {/* Details Slide-over Modal Backdrop */}
      <AnimatePresence>
        {activeDetailTreatment && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveDetailTreatment(null)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              layoutId={`card-container-${activeDetailTreatment.id}`}
              className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden relative z-10 max-h-[85vh] flex flex-col border border-slate-100"
            >
              {/* Header Visual with Turquoise Accent */}
              <div className="bg-gradient-to-r from-sky-600 to-cyan-600 p-6 md:p-8 text-white relative">
                <button
                  onClick={() => setActiveDetailTreatment(null)}
                  className="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                  aria-label="Kapat"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold uppercase tracking-wider mb-2">
                  {categoriseTreatment(activeDetailTreatment.id) === "estetik"
                    ? "Estetik Diş Hekimliği"
                    : categoriseTreatment(activeDetailTreatment.id) === "cerrahi"
                    ? "Cerrahi & Protez"
                    : "Genel & Koruyucu Tedavi"}
                </div>
                <h3 className="text-2xl md:text-3xl font-sans font-bold tracking-tight">
                  {activeDetailTreatment.name}
                </h3>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1 text-slate-700">
                <p className="text-base text-slate-800 leading-relaxed font-medium bg-sky-50/50 p-4 rounded-xl border border-sky-100/50">
                  {activeDetailTreatment.longDesc}
                </p>

                {/* Treatment details card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3 p-4 bg-slate-50 rounded-xl">
                    <Clock className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-mono text-[10px] uppercase font-bold text-slate-400">YALNIZCA SÜRE</span>
                      <span className="font-semibold text-slate-900 leading-snug">{activeDetailTreatment.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-slate-50 rounded-xl">
                    <HeartHandshake className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-mono text-[10px] uppercase font-bold text-slate-400">İyileşme / Sosyal Hayat</span>
                      <span className="font-semibold text-slate-900 leading-snug">{activeDetailTreatment.recovery}</span>
                    </div>
                  </div>
                </div>

                {/* Bulleted procedural stages */}
                <div>
                  <h4 className="font-sans font-bold text-slate-900 text-base mb-3 flex items-center space-x-2">
                    <span className="w-1.5 h-4 bg-sky-600 rounded-full" />
                    <span>Tedavi Aşamaları ve Detaylar</span>
                  </h4>
                  <ul className="grid grid-cols-1 gap-2.5">
                    {activeDetailTreatment.details.map((detail, index) => (
                      <li key={index} className="flex items-start space-x-2.5 text-sm md:text-base">
                        <CheckCircle className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Secure Advise Note */}
                <div className="border border-amber-100 bg-amber-50/50 p-4 rounded-xl text-xs md:text-sm text-slate-600 leading-relaxed">
                  <strong className="text-amber-800">Önemli Klinik Bilgi:</strong> Diş tedavileri tamamen kişiye özel kemik yapısı ve genel ağız sağlığı analizlerine göre değişmektedir. En doğru planlama için kliniğimizde yapılacak radyolojik ön muayene şarttır.
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row gap-3 items-center justify-between">
                <button
                  onClick={() => {
                    setActiveDetailTreatment(null);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 font-semibold text-sm transition-colors cursor-pointer"
                >
                  Kapat
                </button>
                <button
                  onClick={() => {
                    const treatmentName = activeDetailTreatment.name;
                    setActiveDetailTreatment(null);
                    onSelectTreatmentForAppointment(treatmentName);
                  }}
                  className="w-full sm:w-auto bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md shadow-sky-100 flex items-center justify-center space-x-2 cursor-pointer transition-shadow"
                >
                  <CalendarDays className="w-4 h-4" />
                  <span>Bu Tedavi İçin Randevu Talebi Gönder</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
