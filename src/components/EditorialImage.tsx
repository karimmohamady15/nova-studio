import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  titleFallback: string;
  className?: string;
  imgClassName?: string;
  loading?: 'eager' | 'lazy';
}

export function EditorialImage({
  src,
  alt,
  titleFallback,
  className = '',
  imgClassName = '',
  loading = 'lazy',
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-[#181818] border border-white/10 text-[#A5A5A0] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <ImageIcon className="w-7 h-7 mb-3 text-[#C8F169]/70" strokeWidth={1.5} />
        <span className="text-sm font-medium text-white/90 tracking-tight">{titleFallback}</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#181818] ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover ${imgClassName}`}
      />
    </div>
  );
}
