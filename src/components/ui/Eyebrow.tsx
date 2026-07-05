export default function Eyebrow({
  children,
  bright = false,
}: {
  children: React.ReactNode;
  bright?: boolean;
}) {
  return (
    <span
      className={`font-label block text-[11px] font-bold uppercase tracking-[.32em] ${
        bright ? "text-cream-deep" : "text-olive"
      }`}
    >
      {children}
    </span>
  );
}
