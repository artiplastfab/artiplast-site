import { PlayCircle } from "lucide-react";

export function VideoPlaceholder() {
  return (
    <div className="premium-grid relative overflow-hidden rounded-[36px] border border-border/60 bg-white shadow-soft">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,110,32,0.12),transparent_34%)]" />
      <div className="relative flex min-h-[420px] flex-col justify-between p-8 sm:p-10">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ink text-white shadow-soft">
          <PlayCircle className="h-7 w-7 text-accent" />
        </div>
        <div className="max-w-lg rounded-[24px] border border-border/60 bg-white/92 p-6 backdrop-blur-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Video Placeholder
          </p>
          <p className="mt-3 text-sm leading-7 text-muted">
            Future factory introduction video, aerial footage, or production reel can be placed here.
          </p>
        </div>
      </div>
    </div>
  );
}
