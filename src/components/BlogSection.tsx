import { useState, useMemo } from "react";
import { BLOG_POSTS } from "../data/dentistData";
import { BlogPost } from "../types";
import { BookOpen, Calendar, Clock, Bookmark, X, ArrowLeft, ArrowRight, UserCheck2, ChevronRight, Hash } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Safely extract unique tags for sorting filter
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    BLOG_POSTS.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return Array.from(tags);
  }, []);

  const filteredPosts = useMemo(() => {
    if (!selectedTag) return BLOG_POSTS;
    return BLOG_POSTS.filter((p) => p.tags.includes(selectedTag));
  }, [selectedTag]);

  return (
    <section id="blog" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-50 text-sky-700 text-xs font-bold tracking-widest uppercase mb-4">
            Bilgilendirici Köşe
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 tracking-tight leading-tight">
            Ağız ve Diş Sağlığı Rehberi & Bilgiler
          </h2>
          <p className="mt-4 text-slate-600 text-base md:text-lg">
            Gülüş estetiği, implant cerrahisi ve çocuk pedodonti tedavileri hakkında 
            doğru bilinen yanlışlar ve en yeni gelişmeler.
          </p>
        </div>

        {/* Tag Sorting Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
              !selectedTag
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300"
            }`}
          >
            Tüm Yazılar
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all flex items-center space-x-1 cursor-pointer ${
                selectedTag === tag
                  ? "bg-sky-600 text-white border-sky-600"
                  : "bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300"
              }`}
            >
              <Hash className="w-3 h-3 opacity-60" />
              <span>{tag}</span>
            </button>
          ))}
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-slate-50/50 border border-slate-100 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:bg-white hover:border-sky-100 hover:shadow-xl hover:shadow-sky-100/20 transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Meta details */}
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-400">
                  <span className="text-sky-600 bg-sky-50 px-2.5 py-1 rounded">{post.category}</span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{post.readTime}</span>
                  </span>
                </div>

                <h3
                  onClick={() => setSelectedPost(post)}
                  className="font-sans font-bold text-slate-900 text-lg md:text-xl leading-snug cursor-pointer hover:text-sky-600 transition-colors line-clamp-2"
                >
                  {post.title}
                </h3>

                <p className="text-slate-500 text-xs md:text-sm leading-relaxed line-clamp-3">
                  {post.summary}
                </p>
              </div>

              {/* Card Footer with writer and date */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                <div className="flex items-center space-x-2">
                  <UserCheck2 className="w-4.5 h-4.5 text-sky-500 shrink-0" />
                  <span className="text-slate-700">{post.author}</span>
                </div>
                <button
                  onClick={() => setSelectedPost(post)}
                  className="text-sky-600 hover:text-sky-700 text-xs font-bold flex items-center group/btn cursor-pointer"
                >
                  <span>Devamını Oku</span>
                  <ChevronRight className="w-4 h-4 ml-0.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Blog Detail Reader Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm"
            />

            {/* Modal Drawer content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white max-w-2xl w-full rounded-2xl shadow-2xl overflow-hidden relative z-10 max-h-[85vh] flex flex-col border border-slate-100"
            >
              {/* Top Banner Accent */}
              <div className="bg-slate-50 p-6 md:p-8 border-b border-slate-100 flex items-center justify-between">
                <div className="space-y-1">
                  <span className="px-2 py-0.5 bg-sky-50 text-sky-700 text-[10px] font-bold rounded uppercase tracking-wider">
                    {selectedPost.category}
                  </span>
                  <div className="flex items-center space-x-4 text-[11px] font-semibold text-slate-400 mt-1">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{selectedPost.publishDate}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{selectedPost.readTime}</span>
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedPost(null)}
                  className="w-9 h-9 bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Article Content Area */}
              <div className="p-6 md:p-8 overflow-y-auto flex-1 space-y-6 text-slate-700">
                <h1 className="font-sans font-bold text-2xl md:text-3xl text-slate-900 tracking-tight leading-snug">
                  {selectedPost.title}
                </h1>

                <div className="inline-flex items-center space-x-2 bg-sky-50/70 py-1.5 px-3 rounded-lg border border-sky-100/50">
                  <UserCheck2 className="w-4.5 h-4.5 text-sky-600" />
                  <span className="text-xs font-semibold text-slate-600">Yazar: {selectedPost.author} (Protez Uzmanı)</span>
                </div>

                {/* Substantive text representation with paragraphs */}
                <div className="space-y-4 text-sm md:text-base leading-relaxed text-slate-600 whitespace-pre-line font-normal">
                  {selectedPost.content}
                </div>

                {/* Tag Chips inside reader footer */}
                <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-2.5">
                  {selectedPost.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-slate-50 rounded-lg text-xs font-medium text-slate-500">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action close button footer */}
              <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
                <span className="text-xs text-slate-400">Detaylı teşhis ve tedavi onay planı için kliniğimize başvurun.</span>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-5 rounded-xl text-xs flex items-center space-x-1 cursor-pointer"
                >
                  <span>Anladım</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
