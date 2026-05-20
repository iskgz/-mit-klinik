import { useState, useMemo } from "react";
import { CERTIFICATIONS } from "../data/dentistData";
import { Certification } from "../types";
import { Award, GraduationCap, Presentation, ShieldCheck, HeartHandshake } from "lucide-react";
import { motion } from "motion/react";

export default function Certifications() {
  const [activeTab, setActiveTab] = useState<"all" | "egitim" | "sertifika" | "kongre">("all");

  const filteredCerts = useMemo(() => {
    return CERTIFICATIONS.filter((c) => activeTab === "all" || c.type === activeTab);
  }, [activeTab]);

  const getIcon = (type: "egitim" | "sertifika" | "kongre") => {
    const props = { className: "w-5 h-5 text-sky-600 shrink-0" };
    switch (type) {
      case "egitim":
        return <GraduationCap {...props} />;
      case "sertifika":
        return <Award {...props} />;
      case "kongre":
        return <Presentation {...props} />;
      default:
        return <Award {...props} />;
    }
  };

  return (
    <section id="sertifikalar" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-widest uppercase mb-4">
            Eğitim & Güvenilirlik
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 tracking-tight leading-tight">
            Akademik Eğitim, Kongreler ve Sertifikalar
          </h2>
          <p className="mt-4 text-slate-600 text-base md:text-lg">
            Sürekli gelişen diş hekimliği biliminde hastalarımıza en güncel ve en bilimsel tedavi yöntemlerini 
            sunabilmek amacıyla yurt içi ve yurt dışı eğitim programlarını yakından takip etmekteyiz.
          </p>
        </div>

        {/* Custom filter Category Tabs */}
        <div className="flex justify-center border-b border-slate-200 mb-12">
          <div className="flex space-x-6 md:space-x-8">
            {[
              { id: "all", label: "Tamamı" },
              { id: "egitim", label: "Uzmanlık Eğitimi" },
              { id: "sertifika", label: "Uluslararası Kurslar" },
              { id: "kongre", label: "Kongre & Bildiriler" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`pb-4 text-sm font-semibold tracking-wide border-b-2 transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? "border-sky-600 text-sky-700"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Certificate Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, index) => (
            <motion.div
              layout
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 hover:border-sky-100 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Year and Icon Header */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-sm font-bold text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
                    {cert.year}
                  </span>
                  <div className="w-9 h-9 bg-slate-50 rounded-xl flex items-center justify-center">
                    {getIcon(cert.type)}
                  </div>
                </div>

                <h3 className="font-sans font-bold text-slate-900 text-base md:text-lg tracking-tight hover:text-sky-700 transition-colors">
                  {cert.title}
                </h3>

                <p className="font-sans font-medium text-slate-400 text-xs mt-1.5 uppercase tracking-wide">
                  {cert.institution}
                </p>

                <p className="text-slate-500 text-xs md:text-sm mt-3 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Verified Trust Badge at Footer */}
              <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                <span className="flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Klinik Olarak Tescillidir</span>
                </span>
                <span className="text-[10px] bg-slate-50 text-slate-500 py-0.5 px-2 rounded">
                  {cert.type === "egitim" ? "Diploma" : cert.type === "sertifika" ? "Sertifika" : "Kurul Sonucu"}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certified Images Section requested by user ("Sertifika görsellerinin eklenebileceği ayrı bir alan olsun.") */}
        <div className="mt-16 bg-gradient-to-r from-sky-900 to-indigo-950 p-8 md:p-12 rounded-3xl text-white relative overflow-hidden shadow-xl shadow-slate-200">
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-sky-500/20 rounded-full filter blur-3xl" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-sky-300 text-[10px] font-extrabold uppercase tracking-widest">
                Uluslararası Geçerli Akreditasyonlar
              </span>
              <h3 className="text-2xl md:text-3xl font-sans font-bold tracking-tight">
                Dünya Standartlarında Tanınan Tedavi Akreditasyonları
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                Tüm estetik, implantoloji ve dijital gülüş tasarımı sertifikalarımız Avrupa ve Amerika Birleşik Devletleri tıp otoritelerince onaylı resmi kurumlara aittir. Kliniğimiz bu kurumlardan akredite yetkili merkezler arasında gösterilmektedir.
              </p>
              
              <div className="flex items-center space-x-2 text-xs md:text-sm text-sky-400 font-semibold pt-2">
                <HeartHandshake className="w-4 h-4 text-emerald-400" />
                <span>Anlaşmalı uluslararası hastaneler ve klinikler ağındayız.</span>
              </div>
            </div>

            {/* Custom visual mockup showcasing Certificates "Sertifika görsellerinin eklenebileceği alan" */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "ITI Implant Specialist", number: "REG-2019-2423", color: "from-amber-500 to-amber-600" },
                { title: "Digital Smile Design Academ.", number: "DSD-2020-0084", color: "from-sky-500 to-sky-600" },
                { title: "EDAD Estetik Diş Bilim.", number: "TR-EDAD-14392", color: "from-purple-500 to-indigo-600" },
                { title: "London masterclass Cert.", number: "UK-IAA-4820", color: "from-emerald-500 to-teal-600" },
              ].map((m, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 hover:border-white/20 transition flex flex-col justify-between aspect-16/10">
                  <div className="flex items-center justify-between mb-2">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${m.color}`} />
                    <span className="font-mono text-[9px] text-zinc-400">{m.number}</span>
                  </div>
                  <div>
                    <span className="block font-sans font-bold text-white text-xs md:text-sm tracking-tight">{m.title}</span>
                    <span className="block font-mono text-[8px] text-sky-300 font-extrabold uppercase tracking-widest mt-1">Sertifika Görseli Mockup</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
