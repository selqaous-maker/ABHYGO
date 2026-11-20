import React, { useEffect, useState } from 'react';
import { ShieldCheck } from 'lucide-react';

interface MediaFrameProps {
  src: string;
  alt: string;
  aspectClassName?: string;
  className?: string;
  imgClassName?: string;
  fallbackLabel?: string;
  priority?: boolean;
  sizes?: string;
}

export const MediaFrame: React.FC<MediaFrameProps> = ({
  src,
  alt,
  aspectClassName = 'aspect-[4/3]',
  className = '',
  imgClassName = '',
  fallbackLabel = 'ABHYGO',
  priority = false,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
}) => {
  const [hasError, setHasError] = useState(false);
  const srcSet = src.includes('-800.webp')
    ? [480, 800, 1200]
        .map((width) => `${src.replace('-800.webp', `-${width}.webp`)} ${width}w`)
        .join(', ')
    : undefined;

  useEffect(() => {
    setHasError(false);
  }, [src]);

  return (
    <div
      className={`relative overflow-hidden bg-[#F5F8FC] border border-[#101D3B]/10 ${aspectClassName} ${className}`}
    >
      {!hasError && src ? (
        <img
          src={src}
          srcSet={srcSet}
          sizes={srcSet ? sizes : undefined}
          alt={alt}
          width={1200}
          height={896}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : undefined}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#F5F8FC] to-[#E6EEF8] p-6 text-center">
          <ShieldCheck className="h-8 w-8 text-[#1765BD]" aria-hidden="true" />
          <span className="text-sm font-medium text-[#101D3B]">{fallbackLabel}</span>
        </div>
      )}
    </div>
  );
};
