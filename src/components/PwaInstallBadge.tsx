import {useEffect, useState} from "react";
import {Download, Share2, Smartphone, X} from "lucide-react";

type InstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{outcome: "accepted" | "dismissed"; platform: string}>;
};

const isStandaloneMode = () =>
  window.matchMedia("(display-mode: standalone)").matches ||
  ("standalone" in window.navigator && window.navigator.standalone === true);

export default function PwaInstallBadge() {
  const [installPrompt, setInstallPrompt] = useState<InstallPromptEvent | null>(null);
  const [isStandalone, setIsStandalone] = useState(false);
  const [showGuide, setShowGuide] = useState(false);

  useEffect(() => {
    setIsStandalone(isStandaloneMode());

    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as InstallPromptEvent);
    };

    const handleAppInstalled = () => {
      setInstallPrompt(null);
      setIsStandalone(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) {
      setShowGuide(true);
      return;
    }

    await installPrompt.prompt();
    await installPrompt.userChoice;
    setInstallPrompt(null);
  };

  if (isStandalone) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 z-40 max-w-[calc(100vw-2rem)]">
      {showGuide && (
        <div className="mb-3 w-[min(22rem,calc(100vw-2rem))] rounded-3xl border border-sky-100 bg-white/95 p-4 text-slate-700 shadow-xl shadow-sky-900/10 backdrop-blur-md">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                <Smartphone className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-extrabold text-slate-900">Telefona ekle</p>
                <p className="text-xs text-slate-500">Site uygulama gibi acilir.</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setShowGuide(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-50 hover:text-slate-700"
              aria-label="Kapat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-4 space-y-2 text-xs leading-relaxed text-slate-600">
            <p className="flex gap-2">
              <Share2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky-600" />
              <span>iPhone: Safari'de Paylas dugmesine bas, sonra Ana Ekrana Ekle'yi sec.</span>
            </p>
            <p className="flex gap-2">
              <Download className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky-600" />
              <span>Android: Chrome menusunden Uygulamayi yukle veya Ana ekrana ekle'yi sec.</span>
            </p>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={handleInstall}
        className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/90 px-4 py-2.5 text-xs font-extrabold uppercase tracking-widest text-slate-700 shadow-lg shadow-sky-900/10 backdrop-blur-md transition hover:border-sky-200 hover:text-sky-700"
        title={
          installPrompt
            ? "Siteyi telefon ekranina uygulama gibi ekle"
            : "Tarayicinin menusunden ana ekrana ekleyebilirsiniz"
        }
      >
        {installPrompt ? (
          <Download className="h-4 w-4 text-sky-600" />
        ) : (
          <Smartphone className="h-4 w-4 text-sky-600" />
        )}
        <span>Uygulama gibi kullan</span>
      </button>
    </div>
  );
}
