import { PlayCircle } from "lucide-react";
import type { Locale } from "@/lib/i18n";

export function VideoPlaceholder({ locale }: { locale: Locale }) {
  const copy = {
    tr: {
      title: "Video Alanı",
      description: "Gelecekte fabrika tanıtım videosu, drone çekimi veya üretim filmi burada yer alabilir.",
    },
    en: {
      title: "Video Placeholder",
      description: "Future factory introduction video, aerial footage, or production reel can be placed here.",
    },
    de: {
      title: "Videobereich",
      description: "Ein künftiges Fabrikvideo, Luftaufnahmen oder ein Produktionsfilm kann hier platziert werden.",
    },
    ar: {
      title: "مساحة الفيديو",
      description: "يمكن وضع فيديو تعريفي للمصنع أو لقطات جوية أو فيلم إنتاج هنا مستقبلاً.",
    },
    az: {
      title: "Video Sahəsi",
      description: "Gələcəkdə zavod təqdimat videosu, hava görüntüsü və ya istehsal çarxı burada yerləşdirilə bilər.",
    },
    bg: {
      title: "Видео зона",
      description: "Тук може да бъде добавено бъдещо представително видео на фабриката, въздушни кадри или производствен клип.",
    },
    fr: {
      title: "Zone vidéo",
      description: "Une future vidéo de présentation de l'usine, des vues aériennes ou un film de production peuvent être placés ici.",
    },
    ru: {
      title: "Видео Зона",
      description: "Здесь позже можно разместить презентационное видео завода, аэросъемку или производственный ролик.",
    },
  }[locale];

  return (
    <div className="premium-grid relative overflow-hidden rounded-[36px] border border-border/60 bg-white shadow-soft">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,110,32,0.12),transparent_34%)]" />
      <div className="relative flex min-h-[420px] flex-col justify-between p-8 sm:p-10">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ink text-white shadow-soft">
          <PlayCircle className="h-7 w-7 text-accent" />
        </div>
        <div className="max-w-lg rounded-[24px] border border-border/60 bg-white/92 p-6 backdrop-blur-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {copy.title}
          </p>
          <p className="mt-3 text-sm leading-7 text-muted">
            {copy.description}
          </p>
        </div>
      </div>
    </div>
  );
}
