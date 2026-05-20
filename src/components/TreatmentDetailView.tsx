import React, { useState, useEffect } from "react";
import { Treatment } from "../types";
import { sendAppointmentEmail } from "../lib/sendAppointmentEmail";
import { 
  ArrowLeft, 
  ChevronLeft,
  Calendar, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight, 
  HelpCircle, 
  Sparkles, 
  Activity,
  Heart,
  Undo2,
  PhoneCall,
  UserCheck
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const TREATMENT_IMAGES: Record<string, string> = {
  "implant-tedavisi": "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600",
  "dis-beyazlatma": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600",
  "ortodonti": "https://images.unsplash.com/photo-1513412583790-264b730ae085?auto=format&fit=crop&q=80&w=600",
  "seffaf-plak-tedavisi": "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=600",
  "zirkonyum-kaplama": "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=600",
  "gulus-tasarimi": "https://images.unsplash.com/photo-1579684275623-00e8433bc636?auto=format&fit=crop&q=80&w=600",
  "kanal-tedavisi": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600",
  "cocuk-dis-hekimligi": "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=600"
};

const TREATMENT_GALLERIES: Record<string, string[]> = {
  "implant-tedavisi": [
    "/treatments/implant/implant-gallery-1.jpg",
    "/treatments/implant/implant-gallery-2.jpg",
    "/treatments/implant/implant-gallery-3.jpg",
    "/treatments/implant/implant-gallery-4.jpg",
  ],
};

interface TreatmentDetailViewProps {
  treatment: Treatment;
  onBack: () => void;
  onBookAppointment: (treatmentName: string) => void;
}

export default function TreatmentDetailView({ treatment, onBack, onBookAppointment }: TreatmentDetailViewProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  // Form states for the dedicated sidebar booking card
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    kvkk: false
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Scroll to top when treatment changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveGalleryIndex(0);
  }, [treatment]);

  const galleryImages = TREATMENT_GALLERIES[treatment.id] || [TREATMENT_IMAGES[treatment.id] || "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600"];
  const activeTreatmentImage = galleryImages[activeGalleryIndex] || galleryImages[0];
  const hasGallery = galleryImages.length > 1;

  const goToGalleryImage = (direction: "prev" | "next") => {
    setActiveGalleryIndex((current) => {
      if (direction === "next") {
        return current === galleryImages.length - 1 ? 0 : current + 1;
      }
      return current === 0 ? galleryImages.length - 1 : current - 1;
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage("");

    const timeLabels: Record<string, string> = {
      morning: "Sabah (09:00 - 12:00)",
      noon: "Öğlen (12:00 - 15:00)",
      afternoon: "İkindi (15:00 - 19:00)",
    };

    try {
      await sendAppointmentEmail("Yeni Tedavi Randevu Talebi", {
        Tedavi: treatment.name,
        "Ad Soyad": formData.fullName,
        Telefon: formData.phone,
        "E-posta": formData.email.trim() || "-",
        "Tercih Edilen Gün": formData.date || "-",
        "Tercih Edilen Saat": formData.time ? timeLabels[formData.time] || formData.time : "-",
      });
      setSubmitting(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setFormData({ fullName: "", phone: "", email: "", date: "", time: "", kvkk: false });
      }, 5000);
    } catch {
      setSubmitting(false);
      setErrorMessage("Talebiniz e-posta olarak gönderilemedi. Lütfen daha sonra tekrar deneyin.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 font-sans selection:bg-sky-100 selection:text-sky-900">
      
      {/* Navigation Breadcrumb & Back Action Bar */}
      <div className="bg-white border-b border-slate-200/80 sticky top-20 z-30 transition-shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center space-x-2 text-slate-600 hover:text-sky-600 transition-colors cursor-pointer group font-sans font-semibold text-sm"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Tedavilere Geri Dön</span>
          </button>
          
          <div className="hidden sm:flex items-center space-x-2 text-xs text-slate-400 font-medium">
            <span className="hover:text-slate-600 cursor-pointer" onClick={onBack}>Ana Sayfa</span>
            <ChevronRight className="w-3 h-3" />
            <span className="hover:text-slate-600 cursor-pointer" onClick={onBack}>Tedaviler</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-sky-600 font-semibold">{treatment.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Treatment Main Hero Header Card */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl mb-12">
          {/* Subtle decoration circles */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full filter blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-indigo-500/10 rounded-full filter blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left part: Content & Stats */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="inline-flex items-center space-x-1 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-300 text-xs font-bold tracking-wider uppercase">
                  <Sparkles className="w-3 h-3" />
                  <span>Klinik Tedavi Rehberi</span>
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-white leading-tight">
                {treatment.name}
              </h1>
              
              <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-normal">
                {treatment.longDesc}
              </p>

              {/* Practical Stats Overlay */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 flex items-center space-x-3">
                  <div className="bg-sky-500/20 p-2.5 rounded-xl text-sky-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-wider">İşlem Süresi</span>
                    <span className="text-xs font-semibold text-white leading-snug">{treatment.duration}</span>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 flex items-center space-x-3">
                  <div className="bg-emerald-500/20 p-2.5 rounded-xl text-emerald-400">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-wider">İyileşme Periyodu</span>
                    <span className="text-xs font-semibold text-white leading-snug">{treatment.recovery}</span>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 flex items-center space-x-3">
                  <div className="bg-amber-500/20 p-2.5 rounded-xl text-amber-400">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-wider">Ortalama Seans</span>
                    <span className="text-xs font-semibold text-white leading-snug">{treatment.sessionCount || "1-3 Seans"}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right part: Stunning professional Treatment Image */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="relative w-full max-w-[390px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-slate-950/20">
                <img 
                  src={activeTreatmentImage}
                  alt={treatment.name}
                  className="w-full h-full object-cover select-none hover:scale-105 transition-transform duration-700 pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />
                {hasGallery && (
                  <>
                    <button
                      type="button"
                      onClick={() => goToGalleryImage("prev")}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-lg hover:bg-white hover:scale-105 transition-all cursor-pointer"
                      aria-label="Önceki fotoğraf"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => goToGalleryImage("next")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-lg hover:bg-white hover:scale-105 transition-all cursor-pointer"
                      aria-label="Sonraki fotoğraf"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-1.5">
                      {galleryImages.map((_, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => setActiveGalleryIndex(index)}
                          className={`h-2 rounded-full transition-all cursor-pointer ${
                            activeGalleryIndex === index ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
                          }`}
                          aria-label={`${index + 1}. fotoğrafı göster`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Split: Key Medical Content & Sidebar Booking Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Deep Structural Content (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* 1. Bu Tedavi Nedir? Section */}
            <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-4">
              <div className="flex items-center space-x-2.5 border-b border-slate-100 pb-4">
                <div className="w-1.5 h-6 bg-sky-500 rounded-full" />
                <h2 className="text-xl md:text-2xl font-sans font-bold text-slate-900 tracking-tight">
                  Bu Tedavi Nedir?
                </h2>
              </div>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed whitespace-pre-line font-normal">
                {treatment.whatIsThis || treatment.longDesc}
              </p>
            </section>

            {/* 2. Kimler İçin Uygundur? Section */}
            <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-5">
              <div className="flex items-center space-x-2.5 border-b border-slate-100 pb-4">
                <div className="w-1.5 h-6 bg-sky-500 rounded-full" />
                <h2 className="text-xl md:text-2xl font-sans font-bold text-slate-900 tracking-tight">
                  Kimler İçin Uygundur?
                </h2>
              </div>
              <p className="text-slate-500 text-xs md:text-sm">
                Aşağıdaki durumlardan bir veya birkaçını yaşayan hastalarımız için {treatment.name} en ideal yaklaşımdır:
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                {(treatment.whoIsItFor || treatment.details).map((item, index) => (
                  <li 
                    key={index}
                    className="flex items-start bg-slate-50 p-4 rounded-2xl border border-slate-100 space-x-3 hover:translate-y-[-2px] transition-transform duration-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm text-slate-700 font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 3. Tedavi Süreci Nasıldır? Section */}
            <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-6">
              <div className="flex items-center space-x-2.5 border-b border-slate-100 pb-4">
                <div className="w-1.5 h-6 bg-sky-500 rounded-full" />
                <h2 className="text-xl md:text-2xl font-sans font-bold text-slate-900 tracking-tight">
                  Tedavi Süreci Nasıldır?
                </h2>
              </div>
              
              <div className="relative pl-6 border-l-2 border-dashed border-slate-200 space-y-8 py-2">
                {(treatment.processSteps || [
                  "Detaylı muayene ve planlama",
                  "Dijital tarama ve tasarımın hazırlanması",
                  "Uygulama ve geçici kaplamalar",
                  "Alt yapı provaları ve estetik yapıştırma"
                ]).map((step, idx) => {
                  const [title, desc] = step.includes(":") ? step.split(":") : [step, ""];
                  return (
                    <div key={idx} className="relative">
                      {/* Step Number Badge */}
                      <span className="absolute -left-[37px] top-0 flex items-center justify-center w-[22px] h-[22px] bg-sky-600 rounded-full text-[11px] font-black text-white outline-4 outline-white">
                        {idx + 1}
                      </span>
                      
                      <div className="space-y-1">
                        <h4 className="text-sm md:text-base font-sans font-bold text-slate-900 leading-tight">
                          {title}
                        </h4>
                        {desc && (
                          <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-normal">
                            {desc.trim()}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 4. Ortalama Kaç Seans Sürer? Section */}
            <section className="bg-sky-50 rounded-3xl p-6 md:p-8 border border-sky-100 flex flex-col md:flex-row items-stretch justify-between gap-6">
              <div className="flex items-start space-x-4 flex-1">
                <div className="w-12 h-12 bg-sky-600 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-md shadow-sky-600/10">
                  <Calendar className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base md:text-lg font-sans font-bold text-slate-900">
                    Ortalama Seans Bilgisi
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-normal">
                    Kişiye özel durumlar ve muayene sonrası belirlenen net program.
                  </p>
                </div>
              </div>
              <div className="bg-white px-6 py-4 rounded-2xl border border-sky-100 shadow-sm text-left flex-1 md:max-w-md flex flex-col justify-center">
                <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1.5">Planlanan Randevu / Süre</span>
                <span className="text-xs md:text-sm font-sans font-bold text-sky-600 leading-relaxed">
                  {treatment.sessionCount || treatment.duration}
                </span>
              </div>
            </section>

            {/* 5. Sık Sorulan Sorular (Faqs) Section */}
            {(treatment.specialFaqs && treatment.specialFaqs.length > 0) && (
              <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-6">
                <div className="flex items-center space-x-2.5 border-b border-slate-100 pb-4">
                  <div className="w-1.5 h-6 bg-sky-500 rounded-full" />
                  <h2 className="text-xl md:text-2xl font-sans font-bold text-slate-900 tracking-tight">
                    Tedavi Hakkında Sıkça Sorulan Sorular
                  </h2>
                </div>

                <div className="space-y-3">
                  {treatment.specialFaqs.map((faq, index) => {
                    const isOpen = openFaqIndex === index;
                    return (
                      <div 
                        key={index} 
                        className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                          isOpen ? "border-sky-500 bg-sky-50/10" : "border-slate-100 bg-slate-50/50 hover:bg-slate-50"
                        }`}
                      >
                        <button
                          onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                          className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-sans font-bold text-sm md:text-base text-slate-800 cursor-pointer"
                        >
                          <span className="flex items-center space-x-2">
                            <HelpCircle className="w-4 h-4 text-sky-500 shrink-0" />
                            <span>{faq.question}</span>
                          </span>
                          <span className="text-sky-500 font-black text-lg shrink-0">
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: "auto" }}
                              exit={{ height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Privacy Declaration */}
            <div className="p-5 rounded-2xl border border-dashed border-slate-300 text-[11px] text-slate-500 bg-slate-100/50 leading-relaxed">
              🔒 <strong>Hasta Mahremiyeti ve Güvenlik Duyurusu:</strong> Kliniğimizde, her hastamızın mahremiyeti ve kişisel bilgileri 6698 sayılı KVKK mevzuatına göre kurumsal koruma altındadır. Muvafakatname ve yazılı izin belgesi resmi olarak imzalanmayan hiçbir hastamızın karşılaştırmalı klinik ağız içi fotoğrafı, video kaydı veya tedavi teşhis verisi reklam/tanıtım amaçlı paylaşılamaz. Tüm vakalar tamamen yasal kurallara uygun olarak sergilenmiştir.
            </div>

          </div>

          {/* RIGHT COLUMN: Converting Appointment Form (4 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-36 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border border-slate-200/80 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-sky-500 to-indigo-600" />
              
              <div className="space-y-1">
                <span className="text-[10px] text-sky-600 font-extrabold uppercase tracking-widest block">Kliniğimizden</span>
                <h3 className="text-lg md:text-xl font-sans font-bold text-slate-900">
                  Hızlı Randevu Talebi
                </h3>
                <p className="text-xs text-slate-400 leading-snug">
                  Tercih ettiğiniz {treatment.name} tedavisi için hemen randevu talep formunu doldurun, danışan birimimiz sizi 15 dakika içinde arasın.
                </p>
              </div>

              {success ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-center space-y-3">
                  <div className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-sans font-bold text-slate-900 text-sm">Talebiniz Kaydedildi!</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Sayın <strong>{formData.fullName}</strong>, hekimimiz nezaretinde ön değerlendirme randevusu oluşturmak üzere sizi en kısa sürede telefonunuzdan arayacağız. Teşekkürler!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="bg-red-50 border border-red-100 text-red-700 p-3 rounded-xl text-xs font-bold leading-normal">
                      {errorMessage}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Adınız Soyadınız *</label>
                    <input 
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Örn. Selin Yılmaz"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs md:text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Telefon Numaranız *</label>
                    <input 
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0 (555) 123 45 67"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs md:text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">E-posta Adresiniz</label>
                    <input 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@mail.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs md:text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none bg-slate-50/50"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Tercih Edilen Gün</label>
                      <input 
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none bg-slate-50/50 text-slate-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Tercih Edilen Saat</label>
                      <select 
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none bg-slate-50/50 text-slate-600"
                      >
                        <option value="">Saat Seçin</option>
                        <option value="morning">Sabah (09:00 - 12:00)</option>
                        <option value="noon">Öğlen (12:00 - 15:00)</option>
                        <option value="afternoon">İkindi (15:00 - 19:00)</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 pt-2">
                    <input 
                      type="checkbox"
                      id="kvkkCheckDetail"
                      required
                      checked={formData.kvkk}
                      onChange={(e) => setFormData({ ...formData, kvkk: e.target.checked })}
                      className="w-4 h-4 text-sky-600 border-slate-300 rounded focus:ring-sky-500 mt-0.5 cursor-pointer"
                    />
                    <label htmlFor="kvkkCheckDetail" className="text-[10px] text-slate-500 leading-tight select-none cursor-pointer">
                      Verilerimin 6698 sayılı KVKK Aydınlatma Metni kapsamında hekim danışan iletişimi amacıyla işlenmesine izin veriyorum. *
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-sky-600 hover:bg-sky-500 text-white font-sans font-bold text-xs md:text-sm py-3 px-4 rounded-xl shadow-lg shadow-sky-600/10 transition-all flex items-center justify-center space-x-2 mt-4 cursor-pointer disabled:bg-slate-300 disabled:shadow-none"
                  >
                    <span>{submitting ? "Gönderiliyor..." : "Randevu Talebini Gönder"}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Quick Consultation Badge */}
            <div className="bg-gradient-to-b from-slate-950 to-slate-900 rounded-3xl p-6 space-y-4 border border-slate-800 text-white shadow-md">
              <h4 className="font-sans font-bold text-sm">Telefonla Doğrudan Bilgi Alın</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Randevu beklemeden kliniğimizdeki diş danışmanlarımız ile doğrudan görüşme yapabilirsiniz.
              </p>
              <a 
                href="tel:+905464309708"
                className="flex items-center justify-center space-x-2.5 py-3 px-4 rounded-xl bg-slate-800 text-cyan-400 text-xs md:text-sm font-bold border border-slate-700 hover:bg-slate-705 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-cyan-400 animate-bounce" />
                <span>+90 (546) 430 97 08</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
