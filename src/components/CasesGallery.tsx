import { useState } from "react";
import { CASE_STUDIES } from "../data/dentistData";
import { CaseStudy } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Calendar, Layers, Eye, Users, ChevronRight, Activity, RotateCcw } from "lucide-react";

export default function CasesGallery() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "gulus" | "beyazlatma" | "implant" | "zirkonyum" | "ortodonti">("all");
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  
  // Track "view" selection for each case card (whether it shows Before or After version)
  // key: case.id, value: 'after' | 'before'
  const [cardViews, setCardViews] = useState<Record<string, "before" | "after">>({});

  const categories = [
    { id: "all", label: "Tüm Vakalar" },
    { id: "gulus", label: "Gülüş Tasarımı" },
    { id: "beyazlatma", label: "Beyazlatma" },
    { id: "implant", label: "İmplant" },
    { id: "zirkonyum", label: "Zirkonyum" },
    { id: "ortodonti", label: "Ortodonti" },
  ];

  const filteredCases = CASE_STUDIES.filter((c) => {
    return selectedCategory === "all" || c.category === selectedCategory;
  });

  const toggleCardView = (caseId: string) => {
    setCardViews((prev) => ({
      ...prev,
      [caseId]: prev[caseId] === "before" ? "after" : "before",
    }));
  };

  return (
    <section id="vakalar" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Visual background details to give clinical hi-tech premium cosmic atmosphere */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-800 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4">
            Vaka Analizleri & Başarı Hikayeleri
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight leading-tight">
            Önce & Sonra Klinik Vaka Galerisi
          </h2>
          <p className="mt-4 text-slate-400 text-base md:text-lg">
            Hastalarımızın tedavi süreçleri ve elde ettiğimiz doğal, estetik sonuçlar. 
            Tüm vaka paylaşımları hasta mahremiyeti ve onay protokollerine uygun olarak sergilenmektedir.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex bg-slate-800/80 p-1.5 rounded-2xl overflow-x-auto w-fit mx-auto mb-12 border border-slate-700/50 scrollbar-none max-w-full">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold tracking-wide transition-all duration-300 whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-sky-600 text-white shadow-lg shadow-sky-900/40"
                  : "text-slate-400 hover:text-white hover:bg-slate-700/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCases.map((cs) => {
              const currentView = cardViews[cs.id] || "after"; // default to viewing the stunning "after" image
              const isShowingAfter = currentView === "after";

              return (
                <motion.div
                  key={cs.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-slate-800/50 border border-slate-700/60 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-sky-500/30 transition-all duration-300"
                >
                  {/* Image Presentation Box with Interactive Switch */}
                  <div className="relative aspect-16/10 bg-slate-950 group overflow-hidden">
                    <img
                      src={isShowingAfter ? cs.afterImage : cs.beforeImage}
                      alt={`${cs.title} ${isShowingAfter ? 'Sonra' : 'Önce'}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20 pointer-events-none" />

                    {/* Left Indicator Tag */}
                    <div className="absolute top-4 left-4 flex flex-col gap-1.5 items-start">
                      <span className="px-3 py-1 bg-slate-950/80 backdrop-blur-md rounded-full text-[11px] font-bold tracking-widest text-sky-400 uppercase">
                        {cs.tags[0]}
                      </span>
                      {cs.visualType && (
                        <span className="px-3 py-1.5 bg-sky-950/85 backdrop-blur-md rounded-lg text-[10px] font-bold tracking-wide text-cyan-300 border border-cyan-400/20 shadow-md">
                          Görsel Türü: {cs.visualType}
                        </span>
                      )}
                    </div>

                    {/* Click Indicator Switch Overlay on Image */}
                    <div className="absolute top-4 right-4 flex bg-slate-950/90 backdrop-blur-md p-1.5 rounded-xl border border-slate-700/40 space-x-1">
                      <button
                        onClick={() => setCardViews((prev) => ({ ...prev, [cs.id]: "before" }))}
                        className={`px-3 py-1 text-xs font-extrabold rounded-lg tracking-wider transition-colors cursor-pointer ${
                          !isShowingAfter ? "bg-red-500/20 text-red-400" : "text-slate-400 hover:text-white"
                        }`}
                      >
                        ÖNCE
                      </button>
                      <button
                        onClick={() => setCardViews((prev) => ({ ...prev, [cs.id]: "after" }))}
                        className={`px-3 py-1 text-xs font-extrabold rounded-lg tracking-wider transition-colors cursor-pointer ${
                          isShowingAfter ? "bg-emerald-500/20 text-emerald-400" : "text-slate-400 hover:text-white"
                        }`}
                      >
                        SONRA
                      </button>
                    </div>

                    {/* Mobile helper overlay click indicator */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs">
                      <button
                        onClick={() => toggleCardView(cs.id)}
                        className="bg-sky-600/90 hover:bg-sky-500 text-white font-bold py-1.5 px-3.5 rounded-lg flex items-center space-x-1.5 transition-all shadow shadow-sky-900/30 backdrop-blur-sm cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Dokun Karşılaştır</span>
                      </button>
                      <span className="font-mono text-[10px] text-slate-400 bg-slate-950/60 py-1 px-2 rounded backdrop-blur-sm">
                        Hasta Yaşı: {cs.patientAge}
                      </span>
                    </div>
                  </div>

                  {/* Vaka Content */}
                  <div className="p-6 md:p-8 space-y-4">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="text-xl md:text-2xl font-sans font-bold tracking-tight text-white group-hover:text-cyan-400">
                        {cs.title}
                      </h3>
                    </div>

                    <p className="text-sm md:text-base text-slate-300 leading-relaxed font-normal">
                      {cs.description}
                    </p>

                    {/* Diagnostic notes / Process */}
                    <div className="bg-slate-900/50 rounded-2xl p-4 border border-slate-800 space-y-2">
                      <span className="block font-sans font-semibold text-xs text-sky-400 tracking-wider">Klinik Tedavi Süreci ve Planlama:</span>
                      <p className="text-xs md:text-sm text-slate-400 leading-relaxed">{cs.processInfo}</p>
                    </div>

                    {/* Stats & Details Grid */}
                    <div className="grid grid-cols-2 gap-4 text-xs pt-2">
                      <div className="flex items-center space-x-2 text-slate-400">
                        <Calendar className="w-4 h-4 text-sky-500" />
                        <span>Süreç: <strong>{cs.duration}</strong></span>
                      </div>
                      <div className="flex items-center space-x-2 text-slate-400">
                        <Activity className="w-4 h-4 text-emerald-500" />
                        <span>Klinik Memnuniyet: %100</span>
                      </div>
                    </div>

                    {/* Show Full Details Button */}
                    <div className="border-t border-slate-700/50 pt-5 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {cs.tags.slice(1).map((tag, i) => (
                          <span key={i} className="px-2 py-0.5 bg-slate-800 rounded text-[10px] text-slate-400">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <button
                        onClick={() => setSelectedCase(cs)}
                        className="text-xs md:text-sm text-sky-400 hover:text-sky-300 font-bold flex items-center space-x-1 group cursor-pointer"
                      >
                        <span>Vaka Teşhis Detayı</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Diagnostic standard note for privacy */}
        <div className="mt-12 text-center text-xs text-slate-500 bg-slate-950/30 py-3.5 px-6 rounded-2xl border border-slate-800/80 max-w-3xl mx-auto">
          🔒 <strong>Hasta Mahremiyeti ve Etik Bildirim:</strong> Yukarıdaki karşılaştırmalı klinik fotoğrafları, diş hekimliği tanı ve tedavi bilgilendirme amacı kapsamında, ilgili hastalarımızın yazılı yazılı onay ve muvafakatnameleri alınarak yayınlanmıştır. Kopyalanması ve başka sitelerde paylaşılması yasaktır.
        </div>
      </div>

      {/* Case Details Modal */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCase(null)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 border border-slate-800 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl relative z-10 max-h-[90vh] flex flex-col"
            >
              {/* Image side-by-side comparison inside detail */}
              <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-950 border-b border-slate-800">
                <div className="relative aspect-16/10">
                  <img src={selectedCase.beforeImage} alt="Tedavi Öncesi" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute top-3 left-3 bg-red-600/90 text-white font-sans text-[11px] font-black tracking-widest px-3 py-1 rounded-md">TEDAVİ ÖNCESİ</div>
                </div>
                <div className="relative aspect-16/10 border-t md:border-t-0 md:border-l border-slate-800">
                  <img src={selectedCase.afterImage} alt="Tedavi Sonrası" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute top-3 left-3 bg-emerald-600/90 text-white font-sans text-[11px] font-black tracking-widest px-3 py-1 rounded-md">TEDAVİ SONRASI</div>
                </div>
              </div>

              {/* Text Area */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1 text-slate-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{selectedCase.title}</h3>
                    <p className="text-xs text-sky-400 mt-1">Vaka Analiz Formu #{selectedCase.id}</p>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-slate-800 text-slate-200 text-xs font-semibold self-start sm:self-auto border border-slate-700">
                    Kategori: {categories.find(c => c.id === selectedCase.category)?.label}
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-sans font-bold text-slate-250 text-base mb-2">Genel Hasta Teşhisi ve Şikayetler</h4>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">{selectedCase.description}</p>
                  </div>

                  <div>
                    <h4 className="font-sans font-bold text-slate-250 text-base mb-2">Klinik Operasyon Süreç ve Teknik Detayları</h4>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">{selectedCase.processInfo}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-slate-950/40 p-4 rounded-xl border border-slate-800">
                  <div>
                    <span className="block text-[10px] text-slate-500 uppercase font-mono">HASTA YAŞI</span>
                    <span className="text-sm font-semibold text-white">{selectedCase.patientAge} Yaşında (Onay Alınmıştır)</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 uppercase font-mono">TEDAVİ SÜRESİ</span>
                    <span className="text-sm font-semibold text-white">{selectedCase.duration}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 uppercase font-mono">KULLANILAN MATERYAL</span>
                    <span className="text-sm font-semibold text-white">{selectedCase.tags.slice(0, 2).join(", ")}</span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 bg-slate-950/70 border-t border-slate-850 flex justify-end">
                <button
                  onClick={() => setSelectedCase(null)}
                  className="bg-sky-600 hover:bg-sky-500 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-colors cursor-pointer"
                >
                  Analizi Kapat
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
