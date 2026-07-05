/** Medallion gigi & kikir — ikon khas metatah */
export function ToothMedallion({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-olive before:absolute before:inset-1.5 before:rounded-full before:border before:border-dashed before:border-olive/55 before:content-[''] ${className}`}
      aria-hidden="true"
    >
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
        <path
          d="M14 10 C14 6 20 5 24 8 C28 5 34 6 34 10 C34 18 31 22 30 30 C29.5 34 27 34 26.5 30 L25 22 L23 22 L21.5 30 C21 34 18.5 34 18 30 C17 22 14 18 14 10 Z"
          stroke="#716246"
          strokeWidth="1.6"
        />
        <line x1="10" y1="38" x2="38" y2="38" stroke="#475950" strokeWidth="2" strokeLinecap="round" />
        <line x1="14" y1="41.5" x2="34" y2="41.5" stroke="#716246" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    </div>
  );
}
