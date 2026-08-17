import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'avatar' | 'white-bg' | 'dark-bg';
  showSubtitle?: boolean;
}

/**
 * Custom Vector Brand Identity for "Promoções do Dia"
 * Symbol: Price Tag with Heart (Ofertas + Carinho + Oportunidade)
 */
export const PriceTagHeartSymbol: React.FC<{
  className?: string;
  tagColor?: string;
  heartColor?: string;
  holeColor?: string;
}> = ({
  className = "w-6 h-6",
  tagColor = "currentColor",
  heartColor = "#F4512A",
  holeColor = "#F4512A",
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Price tag shape */}
      <path
        d="M28 35 L45 18 C47.5 15.5 50.8 14 54.3 14 L79 14 C84.5 14 89 18.5 89 24 L89 48.7 C89 52.2 87.5 55.5 85 58 L57 86 C53.1 89.9 46.9 89.9 43 86 L18 61 C14.1 57.1 14.1 50.9 18 47 L28 35 Z"
        fill={tagColor}
      />
      {/* Hole eyelet */}
      <circle cx="73" cy="30" r="5" fill={holeColor} />
      {/* Heart cutout/emboss */}
      <path
        d="M45.5 48 C45.5 43.8 50 40 54 43.8 C58 40 62.5 43.8 62.5 48 C62.5 54.5 54 60.5 54 60.5 C54 60.5 45.5 54.5 45.5 48 Z"
        fill={heartColor}
      />
    </svg>
  );
};

export const LogoAvatar: React.FC<{
  size?: number | string;
  className?: string;
  shadow?: boolean;
}> = ({ size = 48, className = '', shadow = true }) => {
  const sizeNum = typeof size === 'number' ? size : 48;

  return (
    <div
      id="brand-logo-avatar"
      style={{ width: sizeNum, height: sizeNum }}
      className={`relative inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF5E36] via-[#F4512A] to-[#E03A12] flex-shrink-0 select-none overflow-hidden ${
        shadow ? 'shadow-md shadow-orange-500/20 ring-2 ring-white/20' : ''
      } ${className}`}
    >
      <div className="absolute inset-0 bg-radial from-white/25 via-transparent to-transparent opacity-60 pointer-events-none" />
      <PriceTagHeartSymbol
        className="w-[62%] h-[62%] text-white transform -rotate-3 transition-transform group-hover:scale-105"
        tagColor="#FFFFFF"
        heartColor="#F4512A"
        holeColor="#F4512A"
      />
    </div>
  );
};

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
  showSubtitle = true,
}) => {
  const sizes = {
    sm: { avatar: 36, title: 'text-base', sub: 'text-[10px]' },
    md: { avatar: 48, title: 'text-xl', sub: 'text-xs' },
    lg: { avatar: 56, title: 'text-2xl', sub: 'text-sm' },
    xl: { avatar: 68, title: 'text-3xl', sub: 'text-base' },
  }[size];

  if (variant === 'avatar') {
    return <LogoAvatar size={sizes.avatar} className={className} />;
  }

  return (
    <div
      id="brand-logo-full"
      className={`inline-flex items-center gap-3 select-none text-left ${className}`}
    >
      <LogoAvatar size={sizes.avatar} />
      <div className="flex flex-col leading-tight">
        <span
          className={`font-extrabold tracking-tight text-[#222222] font-display ${sizes.title}`}
        >
          Promoções <span className="text-[#F4512A]">do Dia</span>
        </span>
        {showSubtitle && (
          <span
            className={`font-semibold uppercase tracking-wider text-neutral-500 ${sizes.sub}`}
          >
            Grupo Oficial de Ofertas
          </span>
        )}
      </div>
    </div>
  );
};
