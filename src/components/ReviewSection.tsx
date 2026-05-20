import { useState, FormEvent } from "react";
import { REVIEWS } from "../data/dentistData";
import { Review } from "../types";
import { Star, MessageSquare, Plus, CheckCircle2, User, Smile } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ReviewSection() {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [newTreatment, setNewTreatment] = useState("Gülüş Tasarımı");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmitReview = (e: FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newComment.trim()) {
      setErrorMsg("Lütfen isminizi ve memnuniyet yorumunuzu eksiksiz doldurunuz.");
      return;
    }

    const addedReview: Review = {
      id: `local-rev-${Date.now()}`,
      patientName: newName,
      comment: newComment,
      rating: newRating,
      treatment: newTreatment,
      date: "Şimdi",
      isVerified: true
    };

    setReviewsList([addedReview, ...reviewsList]);
    setNewName("");
    setNewComment("");
    setNewRating(5);
    setErrorMsg("");
    setSuccessMsg("Değerli yorumunuz başarıyla listeye eklendi. Teşekkür ederiz!");
    
    setTimeout(() => {
      setShowAddForm(false);
      setSuccessMsg("");
    }, 2500);
  };

  return (
    <section id="yorumlar" className="py-24 bg-gradient-to-b from-sky-50 to-white relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-10 left-10 w-44 h-44 bg-sky-200/20 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-50 text-sky-700 text-xs font-bold tracking-widest uppercase mb-4">
              Hasta Deneyimleri
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 tracking-tight leading-tight">
              Klinik Memnuniyet Yorumları
            </h2>
            <p className="mt-4 text-slate-600">
              Dt. Ümit Narin ile tedavi olan hastalarımızın gerçek, samimi ve tescilli deneyimleri. 
              Sizin güler yüzlü ayrılmanız, bizim en büyük gururumuzdur.
            </p>
          </div>

          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="self-start md:self-auto flex items-center space-x-1.5 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow hover:shadow-md transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Siz de Yorum Yapın</span>
          </button>
        </div>

        {/* Local Add Review Form Popdown */}
        <AnimatePresence>
          {showAddForm && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              className="bg-white border border-sky-100 rounded-2xl p-6 md:p-8 mb-12 shadow-sm max-w-2xl mx-auto overflow-hidden text-slate-700"
            >
              <h3 className="font-sans font-bold text-lg text-slate-900 mb-4 flex items-center space-x-2">
                <Smile className="w-5 h-5 text-sky-500" />
                <span>Klinik Memnuniyetinizi Diğer Hastalarla Paylaşın</span>
              </h3>

              {successMsg ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl text-center text-sm font-semibold flex items-center justify-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>{successMsg}</span>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  {errorMsg && <p className="text-red-600 text-xs font-bold">{errorMsg}</p>}
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Ad Soyad (Rumuz da Olabilir)</label>
                      <input
                        type="text"
                        placeholder="Örn: Mehmet Ali T."
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500/20 focus:outline-none focus:border-sky-500 text-sm text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Gördüğünüz Tedavi</label>
                      <select
                        value={newTreatment}
                        onChange={(e) => setNewTreatment(e.target.value)}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500/20 focus:outline-none focus:border-sky-500 text-sm text-slate-805"
                      >
                        <option value="Gülüş Tasarımı">Gülüş Tasarımı</option>
                        <option value="Diş Beyazlatma">Diş Beyazlatma</option>
                        <option value="İmplant Tedavisi">İmplant Tedavisi</option>
                        <option value="Kanal Tedavisi">Kanal Tedavisi</option>
                        <option value="Zirkonyum Kaplama">Zirkonyum Kaplama</option>
                        <option value="Dolgu Tedavisi">Dolgu Tedavisi</option>
                        <option value="Diş Taşı Temizliği">Diş Taşı Temizliği</option>
                      </select>
                    </div>
                  </div>

                  {/* Rating Selector */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Değerlendirmeniz (Skor)</label>
                    <div className="flex items-center space-x-2">
                      {[1, 2, 3, 4, 5].map((index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => setNewRating(index)}
                          className="text-2xl transition hover:scale-110 focus:outline-none cursor-pointer"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              index <= newRating ? "fill-amber-400 text-amber-400" : "text-slate-200"
                            }`}
                          />
                        </button>
                      ))}
                      <span className="text-xs font-bold text-slate-500 ml-2">({newRating} / 5 Yıldız)</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Tedavi Deneyiminiz ve Memnuniyetiniz</label>
                    <textarea
                      rows={3}
                      placeholder="Ümit Bey ve ekibiyle olan randevu deneyiminizi yazın..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500/20 focus:outline-none focus:border-sky-500 text-sm text-slate-800 resize-none"
                    />
                  </div>

                  <div className="flex space-x-3 justify-end pt-2">
                    <button
                      type="button"
                      onClick={() => setShowAddForm(false)}
                      className="px-4 py-2 border border-slate-200 rounded-xl text-xs font-semibold hover:bg-slate-50"
                    >
                      Vazgeç
                    </button>
                    <button
                      type="submit"
                      className="bg-sky-600 text-white px-5 py-2 rounded-xl text-xs font-bold shadow hover:bg-sky-700"
                    >
                      Yorumu Yayınla
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reviews Cards Masonry/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {reviewsList.map((rev) => (
              <motion.div
                key={rev.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 hover:border-sky-100 hover:shadow-lg hover:shadow-sky-100/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Star Rating & Treatment Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-0.5">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star
                          key={idx}
                          className={`w-4.5 h-4.5 ${
                            idx < rev.rating ? "fill-amber-400 text-amber-400" : "text-slate-200"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="px-2.5 py-1 bg-sky-50 text-sky-700 text-[10px] md:text-xs font-bold rounded-lg uppercase tracking-wider">
                      {rev.treatment}
                    </span>
                  </div>

                  {/* Comment */}
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed italic mb-6">
                    "{rev.comment}"
                  </p>
                </div>

                {/* Patient Profile */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-50 text-slate-500">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-9 h-9 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center font-bold text-sm border border-slate-200 uppercase">
                      {rev.patientName.slice(0, 1)}
                    </div>
                    <div>
                      <span className="block font-sans font-bold text-slate-800 text-sm">{rev.patientName}</span>
                      <span className="block text-[11px] text-slate-400">{rev.date}</span>
                    </div>
                  </div>

                  {rev.isVerified && (
                    <span className="flex items-center space-x-1 text-emerald-600 text-xs font-semibold bg-emerald-50 px-2 py-1 rounded-md">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Onaylı Hasta</span>
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
