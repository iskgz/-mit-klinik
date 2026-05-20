import React, { useState } from "react";
import { FAQS } from "../data/dentistData";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle, PhoneCall, CalendarDays, MessageSquare, Send, CheckCircle2, User, Clock, Sparkles } from "lucide-react";

export default function FaqSection({ onNavigateToAppointment }: { onNavigateToAppointment: () => void }) {
  const [openId, setOpenId] = useState<string | null>("faq-1"); // Open first item by default for better visual balance
  
  const [askedQuestions, setAskedQuestions] = useState<Array<{id: string, name: string, question: string, date: string, status: string, answer?: string}>>([
    {
      id: "q-1",
      name: "Ceren K.",
      question: "Zirkonyum kaplama sonrası sıcak soğuk hassasiyeti ne kadar sürer?",
      date: "Bugün",
      status: "Yanıtlandı",
      answer: "Zirkonyum kaplamaların yapıştırılmasından sonraki ilk birkaç hafta hafif hassasiyet normaldir. Ancak şiddetli ağrı olması halinde hekiminize başvurmanızı öneririm."
    },
    {
      id: "q-2",
      name: "Ahmet S.",
      question: "İmplant tedavisi sırasında hiç acı hisseder miyim?",
      date: "Dün",
      status: "Yanıtlandı",
      answer: "İmplant cerrahisi gelişmiş lokal anestezi yöntemleriyle tamamen ağrısız geçer. Sonrasında ise hafif ağrı kesicilerle kontrol altına alınabilen konforlu bir iyileşme dönemi yaşarsınız."
    }
  ]);

  const [newName, setNewName] = useState("");
  const [newQuestion, setNewQuestion] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleAskQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newQuestion.trim()) {
      setErrorMsg("Lütfen isminizi ve sormak istediğiniz soruyu doldurunuz.");
      return;
    }

    const addedQ = {
      id: `q-local-${Date.now()}`,
      name: newName,
      question: newQuestion,
      date: "Şimdi",
      status: "İnceleme Bekliyor",
      answer: "Sorunuz başarıyla iletildi. Dr. Ümit Narin sorunuza en kısa sürede tescilli klinik değerlendirmesini sunup burada yanıtlayacaktır."
    };

    setAskedQuestions([addedQ, ...askedQuestions]);
    setNewName("");
    setNewQuestion("");
    setErrorMsg("");
    setSuccessMsg("Harika! Sorunuz başarıyla hekimimize iletildi. Onay ve değerlendirme sonrası aşağıda yayınlanacaktır.");
    
    setTimeout(() => {
      setSuccessMsg("");
    }, 4000);
  };

  return (
    <section id="sss" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background details */}
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-cyan-100/20 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-50 text-sky-700 text-xs font-bold tracking-widest uppercase mb-4">
            Destek & Bilgi
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 tracking-tight leading-tight">
            Sıkça Sorulan Sorular (S.S.S.)
          </h2>
          <p className="mt-4 text-slate-600 text-sm md:text-base">
            Ağız ve diş sağlığı süreçlerimiz, muayene şartları ve tedavi süreçleri hakkında hastalarımızın en çok merak ettiği konular.
          </p>
        </div>

        {/* Accordions */}
        <div className="max-w-4xl mx-auto space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`bg-white border rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ${
                  isOpen ? "border-sky-300 ring-2 ring-sky-500/5" : "border-slate-100 hover:border-slate-200"
                }`}
              >
                {/* Trigger Button */}
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between text-left p-6 font-sans font-bold text-slate-900 transition-colors text-sm md:text-base focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center space-x-3.5 pr-4">
                    <HelpCircle className="w-5 h-5 text-sky-600 shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-sky-600" : ""
                    }`}
                  />
                </button>

                {/* Animated Inner Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-650 text-xs md:text-sm leading-relaxed border-t border-slate-50">
                        <p className="p-3 bg-slate-50/50 rounded-xl border border-slate-100/50">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Dynamic Ask a Question Form and Forum Area */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left: Input Form */}
          <div className="lg:col-span-5 bg-white border border-sky-100 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <span className="inline-flex items-center space-x-1.5 bg-sky-50 border border-sky-100 px-3 py-1 rounded-full text-sky-700 text-[10px] font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Dt. Ümit Narin'e Sorun</span>
              </span>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">Kafanıza Takılan Soruları Sorun</h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                Diş tedavisi korkularınız, estetik gülüş beklentileriniz veya cerrahi müdahaleler hakkında merak ettiğiniz soruları doğrudan uzman hekimimize yöneltebilirsiniz.
              </p>
            </div>

            <form onSubmit={handleAskQuestion} className="space-y-4 pt-6">
              {errorMsg && <p className="text-red-600 text-[11px] font-bold">{errorMsg}</p>}
              {successMsg && <p className="text-emerald-600 text-[11px] font-bold">{successMsg}</p>}

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Adınız Soyadınız</label>
                <input
                  type="text"
                  placeholder="Örn: Elif S."
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500/20 focus:outline-none focus:border-sky-500 text-xs text-slate-800"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Hekimimize Sormak İstediğiniz Soru</label>
                <textarea
                  rows={3}
                  placeholder="Diş implantları ne kadar sürer? Hamilelikte dolgu yapılabilir mi?.."
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500/20 focus:outline-none focus:border-sky-500 text-xs text-slate-800 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center space-x-1.5 shadow transition-all duration-300 cursor-pointer"
              >
                <span>Hekime Soru Gönder</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

          {/* Right: Answered & Queued Forum Questions */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-base font-bold text-slate-900 flex items-center space-x-2">
                <MessageSquare className="w-4 h-4 text-sky-550" />
                <span>Son Sorulan & Yanıtlanan Sorular</span>
              </h4>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">TOPLAM {askedQuestions.length}</span>
            </div>

            <div className="space-y-4 max-h-[460px] overflow-y-auto pr-2 custom-scrollbar">
              <AnimatePresence mode="popLayout">
                {askedQuestions.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white p-5 rounded-2xl border border-sky-100/40 relative space-y-3 shadow-2xs"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-7 h-7 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center font-bold text-[11px]">
                          {item.name.slice(0, 1)}
                        </div>
                        <div>
                          <span className="block text-xs font-bold text-slate-850 leading-none">{item.name}</span>
                          <span className="block text-[10px] text-slate-400 pt-0.5">{item.date}</span>
                        </div>
                      </div>

                      {item.status === "Yanıtlandı" ? (
                        <span className="inline-flex items-center space-x-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Hekim Yanıtı</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center space-x-1 bg-amber-50 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">
                          <Clock className="w-3 h-3" />
                          <span>Müşteri Hizmetleri • İncelemede</span>
                        </span>
                      )}
                    </div>

                    {/* Question text */}
                    <p className="text-xs text-slate-800 font-medium bg-slate-50/75 p-3 rounded-lg leading-relaxed border border-slate-100">
                      Q: {item.question}
                    </p>

                    {/* Reply text if exists */}
                    {item.answer && (
                      <div className="pl-4 border-l-2 border-sky-400/70 pt-1 space-y-1">
                        <span className="block text-[9px] font-bold text-sky-600 uppercase tracking-widest leading-none font-mono">Dt. Ümit Narin:</span>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Still Have Questions? Banner */}
        <div className="mt-16 bg-white p-6 md:p-8 rounded-2xl border border-slate-150 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
          <div>
            <h3 className="font-sans font-bold text-slate-900 text-lg tracking-tight">Aradığınız cevabı bulamadınız mı?</h3>
            <p className="text-slate-500 text-xs md:text-sm mt-1">
              Merak ettiğiniz diğer konular veya özel durumlar için klinik hattımızı arayabilirsiniz.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="tel:+905464309708"
              className="flex items-center space-x-1 px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs md:text-sm font-bold transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-sky-500" />
              <span>Telefonla Danışın</span>
            </a>
            <button
              onClick={onNavigateToAppointment}
              className="px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs md:text-sm font-bold transition-all flex items-center space-x-1 cursor-pointer"
            >
              <CalendarDays className="w-4 h-4" />
              <span>Randevu Talep Et</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
