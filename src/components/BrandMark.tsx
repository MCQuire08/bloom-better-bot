const BrandMark = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
    <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.5" />
    <path d="M20 8 C16 14,16 18,20 22 C24 18,24 14,20 8Z" fill="currentColor" />
    <path d="M8 20 C14 16,18 16,22 20 C18 24,14 24,8 20Z" fill="currentColor" opacity=".65" />
    <path d="M32 20 C26 16,22 16,18 20 C22 24,26 24,32 20Z" fill="currentColor" opacity=".65" />
    <path d="M20 32 C16 26,16 22,20 18 C24 22,24 26,20 32Z" fill="currentColor" />
    <circle cx="20" cy="20" r="3" fill="hsl(var(--gold-dark))" />
  </svg>
);

export default BrandMark;

