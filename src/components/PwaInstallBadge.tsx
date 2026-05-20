import {useEffect, useState} from "react";
import {Download, Smartphone} from "lucide-react";

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
      <button
        type="button"
        onClick={handleInstall}
        disabled={!installPrompt}
        className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/90 px-4 py-2.5 text-xs font-extrabold uppercase tracking-widest text-slate-700 shadow-lg shadow-sky-900/10 backdrop-blur-md transition hover:border-sky-200 hover:text-sky-700 disabled:cursor-default disabled:hover:text-slate-700"
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
