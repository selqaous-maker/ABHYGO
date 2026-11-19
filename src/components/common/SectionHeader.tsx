import React from 'react';

interface SectionHeaderProps {
  kicker?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  kicker,
  title,
  description,
  align = 'left',
  className = '',
}) => {
  return (
    <div
      className={`${
        align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'
      } ${className}`}
    >
      {kicker && (
        <p className="mb-3 text-xs font-medium tracking-[0.04em] text-[#1765BD]">
          {kicker}
        </p>
      )}
      <h2 className="text-2xl font-semibold tracking-tight text-[#101D3B] sm:text-3xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
};
