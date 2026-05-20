import React, { useState } from "react";
import { CLINIC_PHOTOS } from "../data/dentistData";
import { motion, AnimatePresence } from "motion/react";
import { ZoomIn, X, Compass, CheckCircle, Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";

export default function ClinicGallery() {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    const video = document.getElementById("clinic-promo-video") as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
        setIsPlaying(false);
      } else {
        video.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = document.getElementById("clinic-promo-video") as HTMLVideoElement;
    if (video) {
      if (video.requestFullscreen) {
        video.requestFullscreen().catch(() => {});
      }
    }
  };

  const openLightbox = (index: number) => {
    setActivePhotoIndex(index);
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
  };

  const navigatePhotos = (direction: "next" | "prev") => {
    if (activePhotoIndex === null) return;
    if (direction === "next") {
      setActivePhotoIndex((prev) => (prev !== null && prev < CLINIC_PHOTOS.length - 1 ? prev + 1 : 0));
    } else {
      setActivePhotoIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : CLINIC_PHOTOS.length - 1));
    }
  };

  return (
    <section id="klinik" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-50 text-sky-700 text-xs font-bold tracking-widest uppercase mb-4">
            Sanal Klinik Turu
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 tracking-tight leading-tight">
            Modern, Hijyenik ve Konforlu Klinik Alanlarımız
          </h2>
          <p className="mt-4 text-slate-600 text-base md:text-lg">
            Sizi en son teknolojik alt yapı ile donatılmış, iç mimarisi konfor ve sterilizasyon standartlarına göre 
            özenle tasarlanmış kliniklerimizde ağırlamaktan mutluluk duyuyoruz.
          </p>
        </div>

        {/* Klinik Tanıtım Videosu Panel */}
        <div className="mb-16 rounded-3xl overflow-hidden border border-sky-200/50 bg-sky-50/50 p-4 md:p-6 shadow-sm max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Column: Video player context */}
            <div className="lg:col-span-7 relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border-4 border-white shadow-lg group cursor-pointer" onClick={togglePlay}>
              <video
                id="clinic-promo-video"
                src="https://assets.mixkit.co/videos/preview/mixkit-dentist-explaining-treatment-on-mouth-model-to-female-patient-41549-large.mp4"
                loop
                muted={isMuted}
                autoPlay
                className="w-full h-full object-cover"
              />
              
              {/* Overlay with details */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <span className="inline-block self-start font-mono text-[9px] text-sky-800 bg-white/90 px-2.5 py-1 rounded-full font-bold uppercase tracking-widest mb-2">
                  CANLI İZLE • KLİNİK İÇİ TANITIM
                </span>
                <p className="text-white text-xs md:text-sm font-medium opacity-90">
                  Dt. Ümit Narin ile dijital süreçler ve sterile giden her aşamanın şeffaf sunumu.
                </p>
              </div>

              {/* Central Custom Play Trigger */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm text-sky-600 flex items-center justify-center shadow-2xl hover:scale-105 transition-all">
                  {isPlaying ? <Pause className="w-6 h-6 fill-sky-500" /> : <Play className="w-6 h-6 fill-sky-500 ml-1" />}
                </div>
              </div>

              {/* Bottom right Volume & Fullscreen trigger bar */}
              <div className="absolute top-4 right-4 flex items-center space-x-2">
                <button
                  type="button"
                  onClick={toggleMute}
                  className="w-9 h-9 rounded-full bg-slate-950/60 backdrop-blur-sm text-white flex items-center justify-center hover:bg-slate-950/80 transition cursor-pointer"
                  title={isMuted ? "Sesi Aç" : "Sesi Kapat"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <button
                  type="button"
                  onClick={toggleFullscreen}
                  className="w-9 h-9 rounded-full bg-slate-950/60 backdrop-blur-sm text-white flex items-center justify-center hover:bg-slate-950/80 transition cursor-pointer"
                  title="Tam Ekran İzle"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right Column: Key visual values */}
            <div className="lg:col-span-5 space-y-4 text-left lg:pl-4">
              <span className="text-[10px] font-bold text-sky-600 uppercase tracking-widest font-mono">Dt. Ümit Narin Klinik Turu</span>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight leading-tight">Şeffaf, Güvenli ve Ağrısız Diş Hekimliği Deneyimi</h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                Kliniğimizin her köşesi, yüksek hijyen standartlarında dezenfekte edilmektedir. Tanıtım videomuza göz atarak uyguladığımız dijital 3D ağız tarayıcılar, düşük radyasyonlu tomografi sistemleri ve hastalarımızın konforu için hazırlanmış muayene odalarını doğrudan görebilirsiniz.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-white border border-sky-150 text-sky-700 text-[10px] font-bold tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Dijital İmplantoloji</span>
                </span>
                <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-white border border-sky-150 text-sky-700 text-[10px] font-bold tracking-wide">
                  <span>%100 Hijyen Standardı</span>
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* High Tech Equipment & Cleanliness Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          {[
            { tag: "Avrupa Standartları", label: "Otoklav Sınıf B Sterilizasyon" },
            { tag: "Dijital Ölçü", label: "3D Ağız İçi Tarayıcı CAD/CAM" },
            { tag: "Minimal Radyasyon", label: "3D Çene Tomografisi röntgeni" },
            { tag: "Sıfır Fobi", label: "Ergonomik & Sakinleştirici Tasarım" },
          ].map((item, i) => (
            <div key={i} className="bg-slate-50/80 border border-slate-100 p-4 rounded-2xl text-center flex flex-col justify-center items-center">
              <CheckCircle className="w-5 h-5 text-sky-600 mb-2" />
              <span className="block font-sans font-bold text-slate-800 text-sm">{item.label}</span>
              <span className="block font-mono text-[9px] text-slate-400 font-semibold tracking-wider uppercase mt-1">{item.tag}</span>
            </div>
          ))}
        </div>

        {/* Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLINIC_PHOTOS.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative rounded-2xl overflow-hidden group shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
                />
              </div>

              {/* Hover Overlay with text details and magnification symbol */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <button
                  onClick={() => openLightbox(index)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:bg-white/35 transition-colors cursor-pointer"
                  title="Tam Ekran İncele"
                >
                  <ZoomIn className="w-5 h-5" />
                </button>
                <h3 className="font-sans font-bold text-white text-lg tracking-wide">
                  {photo.title}
                </h3>
                <p className="text-slate-250 text-xs mt-1 leading-relaxed">
                  {photo.desc}
                </p>
              </div>

              {/* Always visible header at bottom for non-hover (mostly mobile layout) */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 md:hidden">
                <h3 className="font-sans font-bold text-slate-800 text-sm">{photo.title}</h3>
                <p className="text-slate-500 text-xs mt-1 leading-snug">{photo.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {activePhotoIndex !== null && (
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/90 backdrop-blur-md p-4">
            {/* Close trigger backdrop */}
            <div className="absolute inset-0 cursor-zoom-out" onClick={closeLightbox} />

            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-11 h-11 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center z-10 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Lightbox Center Area */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4.5xl w-full flex flex-col text-white items-center pointer-events-none"
            >
              {/* Display Image */}
              <div className="w-full relative rounded-2xl overflow-hidden aspect-16/10 shadow-2xl bg-black max-h-[70vh]">
                <img
                  src={CLINIC_PHOTOS[activePhotoIndex].imageUrl}
                  alt={CLINIC_PHOTOS[activePhotoIndex].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain pointer-events-auto"
                />
              </div>

              {/* Description Drawer Below Lightbox */}
              <div className="w-full text-center mt-5 text-slate-300 pointer-events-auto">
                <span className="inline-flex items-center space-x-1 font-mono text-[9px] text-sky-400 font-extrabold uppercase tracking-widest bg-slate-800 px-2.5 py-1 rounded">
                  <Compass className="w-3 h-3 text-sky-400" />
                  <span>KLİNİK SIRA NO: {activePhotoIndex + 1} / {CLINIC_PHOTOS.length}</span>
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mt-1.5">{CLINIC_PHOTOS[activePhotoIndex].title}</h3>
                <p className="text-sm text-slate-400 max-w-xl mx-auto mt-1 leading-relaxed">
                  {CLINIC_PHOTOS[activePhotoIndex].desc}
                </p>
              </div>

              {/* Next & Previous Navigation triggers */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 w-full pointer-events-none">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigatePhotos("prev");
                  }}
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center hover:scale-105 pointer-events-auto transition cursor-pointer"
                >
                  ❮
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigatePhotos("next");
                  }}
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center hover:scale-105 pointer-events-auto transition cursor-pointer"
                >
                  ❯
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
