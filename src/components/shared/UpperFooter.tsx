import React from 'react';

// 1. Definujte interface pro props
interface UpperFooterProps {
  bgColor: string;
}

// 2. Použijte interface v definici komponenty
export const UpperFooter: React.FC<UpperFooterProps> = ({ bgColor }) => {
  return (
    <div className={`w-full h-20 flex items-center justify-center ${bgColor}`}>
      <h1 className="text-3xl md:text-4xl font-medium text-beige">
        Sociální sítě a weby
      </h1>
    </div>
  );
};