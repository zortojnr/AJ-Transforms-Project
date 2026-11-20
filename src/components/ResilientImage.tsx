import { useState } from 'react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`w-full h-full bg-gradient-to-br from-[#101B2D] via-[#1B2B44] to-[#263A57] flex flex-col items-center justify-center p-8 text-center border border-[#24344D] ${className}`}
        role="img"
        aria-label={alt}
      >
        <svg
          className="w-12 h-12 text-[#B69A70] mb-3"
          viewBox="0 0 48 48"
          fill="none"
          aria-hidden="true"
        >
          <rect x="6" y="10" width="36" height="28" stroke="currentColor" strokeWidth="1.5" />
          <line x1="6" y1="22" x2="42" y2="22" stroke="currentColor" strokeWidth="1" />
          <line x1="20" y1="10" x2="20" y2="38" stroke="currentColor" strokeWidth="1" />
        </svg>
        <span className="text-xs uppercase tracking-[0.14em] text-[#B69A70] font-semibold">
          {fallbackTitle}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
