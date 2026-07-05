/**
 * Kotak placeholder foto — layout sudah final, tinggal ganti dengan foto asli
 * lewat src/config.ts (cari "PLACEHOLDER:").
 */
export default function PhotoPlaceholder({
  label,
  src,
  className = "",
}: {
  label: string;
  src?: string;
  className?: string;
}) {
  if (src) {
    return (
      <div
        className={`bg-cover bg-center ${className}`}
        style={{ backgroundImage: `url('${src}')` }}
        role="img"
        aria-label={label}
      />
    );
  }
  return (
    <div
      className={`bg-tile flex items-center justify-center bg-cream-deep ${className}`}
    >
      <span className="font-label text-[11px] font-bold uppercase tracking-[.18em] text-ink-soft/70">
        {label}
      </span>
    </div>
  );
}
