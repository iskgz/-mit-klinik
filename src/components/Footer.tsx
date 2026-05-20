import { DENTIST_INFO } from "../data/dentistData";
import { Phone, MessageSquare, MapPin, Mail, Clock, Navigation, CheckSquare, Shield } from "lucide-react";

export default function Footer({ onNavigateToSection }: { onNavigateToSection: (id: string) => void }) {
  
  // Encoded message for WhatsApp
  // “Merhaba, web siteniz üzerinden randevu almak istiyorum. Müsaitlik bilgisi alabilir miyim?”
  const whatsappMsgEncoded = encodeURIComponent(
    "Merhaba, web siteniz üzerinden randevu almak istiyorum. Müsaitlik bilgisi alabilir miyim?"
  );
  const whatsappUrl = `https://wa.me/905464309708?text=${whatsappMsgEncoded}`;
  const phoneCallUrl = "tel:+905464309708";
  const mapDirectionsUrl = "https://www.google.com/maps/search/?api=1&query=F%C4%B1rat%2C%2021070%20Kayap%C4%B1nar%2FDiyarbak%C4%B1r";

  return (
    <footer id="iletisim" className="bg-slate-950 text-slate-400 pt-20 pb-28 md:pb-12 relative overflow-hidden">
      {/* Upper main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Clinic Address & Hours */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-2">
              <span className="text-white font-sans font-bold text-2xl tracking-tight block">
                Dt. Ümit Narin
              </span>
              <span className="text-sky-400 font-mono text-[10px] uppercase font-bold tracking-wider block">
                Estetik Diş Hekimliği ve İmplantoloji Uzmanı
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Modern klinik vizyonumuzla, hastalarımıza üst düzey hijyen ve konfor standartlarında dijital 
              diş hekimliği ve estetik gülüş tasarımları sunuyoruz.
            </p>

            {/* Working Hours */}
            <div className="space-y-3 pt-4 border-t border-slate-900">
              <span className="block text-white font-sans font-bold text-sm tracking-wide">Çalışma Saatlerimiz:</span>
              <div className="space-y-1.5 text-xs text-slate-450">
                {DENTIST_INFO.workingHours.map((item, id) => (
                  <div key={id} className="flex justify-between items-center bg-slate-900/40 p-2 rounded-lg">
                    <span className="flex items-center space-x-1.5">
                      <Clock className="w-3.5 h-3.5 text-sky-500" />
                      <span>{item.day}</span>
                    </span>
                    <strong className="text-slate-350">{item.hours}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Contacts Visual */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-white font-sans font-bold text-lg tracking-wide border-b border-slate-900 pb-3">Kanal & İletişim Bilgileri</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3.5 text-sm">
                <MapPin className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-500 text-xs font-bold uppercase font-mono">KLİNİK ADRESİ</span>
                  <p className="text-slate-300 leading-relaxed mt-0.5">{DENTIST_INFO.clinicAddress}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 text-sm">
                <Phone className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-500 text-xs font-bold uppercase font-mono">TELEFON HABERLEŞME HATTI</span>
                  <a href={phoneCallUrl} className="block text-slate-100 font-bold hover:text-sky-400 transition-colors mt-0.5 text-base">
                    {DENTIST_INFO.clinicPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 text-sm">
                <Mail className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-500 text-xs font-bold uppercase font-mono">KLİNİK RESMİ E-POSTA</span>
                  <a href={`mailto:${DENTIST_INFO.clinicEmail}`} className="block text-slate-300 hover:text-sky-400 transition-colors mt-0.5">
                    {DENTIST_INFO.clinicEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Action buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={phoneCallUrl}
                className="flex items-center justify-center space-x-1.5 bg-slate-900 hover:bg-slate-850 hover:text-white text-slate-200 py-2.5 px-4 rounded-xl text-xs font-bold transition-all border border-slate-800"
              >
                <Phone className="w-4 h-4 text-sky-500" />
                <span>Telefonla Ara</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer referrer"
                className="flex items-center justify-center space-x-1.5 bg-slate-900 hover:bg-slate-850 hover:text-white text-slate-200 py-2.5 px-4 rounded-xl text-xs font-bold transition-all border border-slate-800"
              >
                <MessageSquare className="w-4 h-4 text-emerald-500" />
                <span>WhatsApp Yaz</span>
              </a>
            </div>
          </div>

          {/* Interactive Google Map Embedding */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-white font-sans font-bold text-lg tracking-wide border-b border-slate-900 pb-3">Klinik Konumu</h3>
            
            <div className="rounded-2xl overflow-hidden border border-slate-900 h-44 bg-slate-950 relative shadow-inner">
              <iframe
                title="Klinik Haritası Yerleşimi"
                src={DENTIST_INFO.clinicMapUrl}
                className="absolute inset-0 w-full h-full border-0 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* "Yol Tarifi Al" button */}
            <a
              href={mapDirectionsUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center space-x-2 bg-sky-600 hover:bg-sky-700 text-white font-sans font-bold py-2.5 rounded-xl text-xs shadow-md transition-all cursor-pointer"
            >
              <Navigation className="w-4 h-4" />
              <span>Haritada Yol Tarifi Al</span>
            </a>
          </div>

        </div>
      </div>

      {/* Lower Copyright & TDB Legal Info Area */}
      <div className="border-t border-slate-900 pt-8 mt-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-normal text-slate-500">
        <p className="max-w-md">
          © {new Date().getFullYear()} Dt. Ümit Narin. Tüm hakları saklıdır. 
          Klinik tıbbi tanıtım bilgilendirme sitemiz Türkiye Cumhuriyeti Sağlık Bakanlığı ve TDB kurallarına uygundur.
        </p>

        <div className="flex flex-wrap justify-center sm:justify-start gap-4">
          <button onClick={() => onNavigateToSection("hakkimda")} className="hover:text-white transition">Hakkında</button>
          <button onClick={() => onNavigateToSection("tedaviler")} className="hover:text-white transition">Hizmetler</button>
          <button onClick={() => onNavigateToSection("sss")} className="hover:text-white transition">S.S.S.</button>
          <button onClick={() => onNavigateToSection("randevu")} className="hover:text-white transition font-bold text-sky-450">Randevu Talebi</button>
        </div>
      </div>

      {/* STICKY BOTTOM BUTTONS FOR MOBILE VIEW - Requested explicitly: "Mobil görünümde randevu ve WhatsApp butonları kolay erişilebilir şekilde sabit kalsın. Sitede sabit bir WhatsApp butonu olsun." */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-sky-100 py-3.5 px-4 shadow-2xl flex md:hidden items-center justify-between gap-3">
        {/* Call Now button */}
        <a
          href={phoneCallUrl}
          className="flex-1 bg-slate-900 hover:bg-black text-white py-3 rounded-xl font-bold text-xs shadow-sm flex items-center justify-center space-x-1.5"
        >
          <Phone className="w-4 h-4 text-sky-400" />
          <span>Hemen Ara</span>
        </a>

        {/* Persistent WhatsApp button with text */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer referrer"
          className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-bold text-xs shadow-md flex items-center justify-center space-x-1.5"
        >
          <MessageSquare className="w-4 h-4 text-white" />
          <span>WhatsApp Randevu</span>
        </a>

        {/* Trigger Appointment Form redirect */}
        <button
          onClick={() => onNavigateToSection("randevu")}
          className="w-12 h-11 bg-sky-600 hover:bg-sky-700 text-white rounded-xl flex items-center justify-center shadow-md shrink-0 cursor-pointer"
          title="Online Randevu"
        >
          <CheckSquare className="w-5 h-5" />
        </button>
      </div>

      {/* Floating active desktop WhatsApp action indicator bubble - Persistent requested */}
      <div className="hidden md:block fixed bottom-6 right-6 z-40">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 relative group cursor-pointer"
        >
          {/* Notification pulsing element */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-pulse" />
          <MessageSquare className="w-7 h-7" />
          
          {/* Desktop Hover tooltip text */}
          <div className="absolute right-16 scale-0 group-hover:scale-100 transition-all origin-right bg-white text-slate-800 text-xs font-bold py-2 px-4 rounded-xl shadow-lg border border-slate-100 whitespace-nowrap">
            Yazın ve Hemen Yanıt Alın!
          </div>
        </a>
      </div>
    </footer>
  );
}
