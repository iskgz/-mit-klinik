import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Appointment } from "../types";
import { TREATMENTS } from "../data/dentistData";
import { sendAppointmentEmail } from "../lib/sendAppointmentEmail";
import { CalendarCheck2, ShieldCheck, Mail, Phone, User, MessageSquare, ClipboardCheck, ArrowRight, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface AppointmentFormProps {
  preselectedTreatmentName?: string | null;
  onClearPreselection?: () => void;
}

export default function AppointmentForm({ preselectedTreatmentName, onClearPreselection }: AppointmentFormProps) {
  const [formData, setFormData] = useState<Appointment>({
    fullName: "",
    phone: "",
    email: "",
    treatmentType: "",
    preferredDate: "",
    preferredTime: "",
    complaint: "",
    kvkkAccepted: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Safely grab tomorrow's date representation to lock past calendars
  const [minDateString, setMinDateString] = useState("");

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, "0");
    const dd = String(tomorrow.getDate()).padStart(2, "0");
    setMinDateString(`${yyyy}-${mm}-${dd}`);
  }, []);

  // Pre-fill the dropdown if the parent sets a treatment select
  useEffect(() => {
    if (preselectedTreatmentName) {
      setFormData((prev) => ({
        ...prev,
        treatmentType: preselectedTreatmentName,
      }));
    }
  }, [preselectedTreatmentName]);

  // Masking Turkish phones as 555-444-3322
  const handlePhoneChange = (val: string) => {
    const rawDigits = val.replace(/\D/g, "");
    if (rawDigits.length <= 10) {
      setFormData((prev) => ({ ...prev, phone: rawDigits }));
    }
  };

  const formatPhoneNumber = (phoneNumberString: string) => {
    const cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{2})(\d{2})$/);
    if (match) {
      return "(" + match[1] + ") " + match[2] + " " + match[3] + " " + match[4];
    }
    return phoneNumberString;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Validate inputs
    if (!formData.fullName.trim()) {
      setErrorMessage("Lütfen adınızı ve soyadınızı giriniz.");
      return;
    }
    if (formData.phone.length < 10) {
      setErrorMessage("Lütfen 10 haneli geçerli bir telefon numarası giriniz.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Lütfen geçerli bir e-posta adresi yazınız.");
      return;
    }
    if (!formData.treatmentType) {
      setErrorMessage("Lütfen tedavi almak istediğiniz hizmeti seçiniz.");
      return;
    }
    if (!formData.preferredDate) {
      setErrorMessage("Lütfen tercih ettiğiniz randevu tarihini seçiniz.");
      return;
    }
    if (!formData.preferredTime) {
      setErrorMessage("Lütfen tercih ettiğiniz saat dilimini seçiniz.");
      return;
    }
    if (!formData.kvkkAccepted) {
      setErrorMessage("Randevu talebi için kanun gereği KVKK Onay Beyanı kutusunu işaretlemeniz gerekmektedir.");
      return;
    }

    setIsSubmitting(true);

    try {
      await sendAppointmentEmail("Yeni Randevu Talebi", {
        "Ad Soyad": formData.fullName,
        Telefon: `+90 ${formatPhoneNumber(formData.phone)}`,
        "E-posta": formData.email,
        Tedavi: formData.treatmentType,
        "Tercih Edilen Tarih": formData.preferredDate,
        "Tercih Edilen Saat": formData.preferredTime,
        "Şikayet / Not": formData.complaint.trim() || "-",
      });
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onClearPreselection) onClearPreselection();
    } catch {
      setIsSubmitting(false);
      setErrorMessage("Talebiniz e-posta olarak gönderilemedi. Lütfen daha sonra tekrar deneyin veya WhatsApp butonunu kullanın.");
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      treatmentType: "",
      preferredDate: "",
      preferredTime: "",
      complaint: "",
      kvkkAccepted: false,
    });
    setIsSubmitted(false);
  };

  return (
    <section id="randevu" className="py-24 bg-sky-900 text-white relative overflow-hidden">
      {/* Decorative medical ring pattern */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-44 w-96 h-96 bg-sky-600/20 rounded-full border border-sky-400/10 pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 -right-44 p-6 w-96 h-96 bg-cyan-600/20 rounded-full border border-cyan-400/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Form Left Callout text */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-800 text-sky-300 text-xs font-bold tracking-widest uppercase">
              Online İletişim
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight leading-tight">
              Anında Randevu Talebi Oluşturun
            </h2>
            <p className="text-sky-100 text-base md:text-lg leading-relaxed">
              Ön muayene randevunuz için bilgilerinizi iletin. Klinik koordinatörümüz 
              en geç <strong>30 dakika içinde</strong> sizi arayarak gün ve saat onayınızı tamamlasın.
            </p>

            {/* Steps or Clinical trust lines */}
            <div className="space-y-4 pt-4 border-t border-sky-800">
              {[
                { title: "Bilgilerinizi Gönderin", desc: "Form aracılığıyla dilediğiniz günü ve tedavi türünü seçin." },
                { title: "Telefonla Onay Alın", desc: "Klinik ekibimiz sizi arayarak en konforlu müsaitliği teyit etsin." },
                { title: "Dosyanız Hazırlansın", desc: "Klinikte beklemeden doğrudan muayeneye giriş yapın." },
              ].map((step, i) => (
                <div key={i} className="flex items-start space-x-3.5">
                  <span className="w-6 h-6 rounded-full bg-cyan-500 text-sky-900 font-sans font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="font-sans font-bold text-white text-sm leading-snug">{step.title}</h4>
                    <p className="text-sky-200/80 text-xs mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form and Success Box container */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-800 p-6 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden border border-slate-100">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form-fields"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <h3 className="font-sans font-bold text-xl md:text-2xl text-slate-900 tracking-tight">Hızlı Rezervasyon Formu</h3>
                        <p className="text-xs text-slate-500 mt-0.5">Lütfen tüm alanları gerçeğe uygun şekilde doldurun.</p>
                      </div>
                      <CalendarCheck2 className="w-8 h-8 text-sky-600 shrink-0 hidden sm:block" />
                    </div>

                    {errorMessage && (
                      <div className="bg-red-50 border border-red-100 text-red-700 p-4 rounded-xl text-xs font-bold mb-5 leading-normal">
                        ⚠️ HATA: {errorMessage}
                      </div>
                    )}

                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      {/* Name Row */}
                      <div className="relative">
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Ad Soyad *</label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                          <input
                            type="text"
                            name="fullName"
                            placeholder="Örn: Selin Saygın"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all text-slate-800"
                            required
                          />
                        </div>
                      </div>

                      {/* Contact row (Phone & Email) */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Telefon Numarası *</label>
                          <div className="relative">
                            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                            <input
                              type="tel"
                              name="phone"
                              placeholder="(5XX) XXX XX XX"
                              value={formData.phone ? formatPhoneNumber(formData.phone) : ""}
                              onChange={(e) => handlePhoneChange(e.target.value)}
                              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all text-slate-800"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase mb-1">E-Posta Adresi *</label>
                          <div className="relative">
                            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                            <input
                              type="email"
                              name="email"
                              placeholder="adiniz@example.com"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all text-slate-800"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      {/* Treatment Type Row */}
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Hizmet / Tedavi Türü *</label>
                        <select
                          name="treatmentType"
                          value={formData.treatmentType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all text-slate-808"
                          required
                        >
                          <option value="">Lütfen listeden tedavi seçiniz</option>
                          {TREATMENTS.map((t) => (
                            <option key={t.id} value={t.name}>
                              {t.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Preference Date and Hours row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Tercih Edilen Tarih *</label>
                          <input
                            type="date"
                            name="preferredDate"
                            min={minDateString}
                            value={formData.preferredDate}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all text-slate-808"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Tercih Edilen Saat Aralığı *</label>
                          <select
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all text-slate-808"
                            required
                          >
                            <option value="">Saat seçiniz</option>
                            <option value="09:00 - 11:00 (Sabah)">09:00 - 11:00 (Sabah)</option>
                            <option value="11:00 - 13:00 (Öğle Öncesi)">11:00 - 13:00 (Öğle Öncesi)</option>
                            <option value="13:00 - 15:00 (Öğle)">13:00 - 15:00 (Öğle)</option>
                            <option value="15:00 - 17:00 (İkindi)">15:00 - 17:00 (İkindi)</option>
                            <option value="17:00 - 19:00 (Akşam)">17:00 - 19:00 (Akşam)</option>
                          </select>
                        </div>
                      </div>

                      {/* Complain Note */}
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Şikayet / Açıklama Notu (İsteğe Bağlı)</label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3.5 top-3 w-4.5 h-4.5 text-slate-400" />
                          <textarea
                            name="complaint"
                            rows={2}
                            placeholder="Randevu öncesi dişinizdeki ağrı, estetik talepleriniz veya hassasiyetinizi kısaca yazabilirsiniz."
                            value={formData.complaint}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all text-slate-800 resize-none animate-none"
                          />
                        </div>
                      </div>

                      {/* KVKK acceptance checkbox */}
                      <div className="flex items-start space-x-2 pt-1">
                        <input
                          id="kvkkAccepted"
                          name="kvkkAccepted"
                          type="checkbox"
                          checked={formData.kvkkAccepted}
                          onChange={handleInputChange}
                          className="mt-1 w-4 h-4 bg-slate-50 border-slate-300 text-sky-600 rounded focus:ring-sky-500"
                        />
                        <label htmlFor="kvkkAccepted" className="text-xs text-slate-500 leading-snug cursor-pointer select-none">
                          <span className="font-semibold text-slate-700 hover:underline">6698 sayılı KVKK</span> uyarınca kişisel verilerimin, sağlık bildirimlerimin işlenmesine ve onay aşaması için benimle iletişime geçilmesine açık rıza gösteriyorum. *
                        </label>
                      </div>

                      {/* Action trigger button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-sky-500 hover:bg-sky-600 text-white font-sans font-extrabold py-4 px-6 rounded-full text-xs tracking-widest uppercase shadow hover:shadow-md flex items-center justify-center space-x-2.5 transition-all disabled:opacity-85 disabled:cursor-wait cursor-pointer duration-300 hover:scale-[1.01]"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>Talep Gönderiliyor...</span>
                            </>
                          ) : (
                            <>
                              <span>Randevu Talebi Gönder</span>
                              <ArrowRight className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  // Exact match layout on user success prompt:
                  // "Randevu talebiniz alınmıştır. Klinik ekibimiz sizinle en kısa sürede iletişime geçecektir."
                  <motion.div
                    key="success-box"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="py-12 px-2 text-center space-y-6"
                  >
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner border border-emerald-100">
                      <ClipboardCheck className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold text-slate-900 font-sans tracking-tight">Kayıt Başarıyla Alındı</h4>
                      
                      {/* Mandated notification message */}
                      <p className="text-base text-slate-700 leading-relaxed font-semibold max-w-md mx-auto bg-slate-50 rounded-2xl p-4 border border-slate-100/80 shadow-inner">
                        “Randevu talebiniz alınmıştır. Klinik ekibimiz sizinle en kısa sürede iletişime geçecektir.”
                      </p>
                    </div>

                    {/* Booking Ticket summary simulation for supreme presentation */}
                    <div className="bg-sky-50/50 rounded-2xl p-5 border border-sky-100/50 max-w-sm mx-auto text-left text-xs text-slate-600 space-y-2.5">
                      <span className="block font-sans font-bold text-slate-800 text-center border-b border-sky-100 pb-2 mb-1">
                        🔑 TALEBİNİZİN ÖZETİ
                      </span>
                      <div className="flex justify-between">
                        <span>Hasta Adı:</span>
                        <strong className="text-slate-800">{formData.fullName}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Seçilen Tedavi:</span>
                        <strong className="text-slate-800">{formData.treatmentType}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Hedef Tarih:</span>
                        <strong className="text-slate-800">{formData.preferredDate} ({formData.preferredTime.split(" ")[0]})</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Telefon Hattınız:</span>
                        <strong className="text-slate-800">+{formatPhoneNumber(formData.phone)}</strong>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={resetForm}
                        className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-6 py-2.5 rounded-xl text-xs transitionCursor"
                      >
                        Yeni Talep Gönder
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
