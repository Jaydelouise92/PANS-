import React from 'react';
import { Printer } from 'lucide-react';

interface Props {
  label?: string;
  className?: string;
}

export default function PrintButton({ label = 'Print / Save as PDF', className = '' }: Props) {
  return (
    <button
      onClick={() => window.print()}
      className={`no-print inline-flex items-center gap-2 bg-white border border-purple-200 text-brand-primary px-5 py-2.5 rounded-full font-bold text-sm hover:bg-brand-secondary hover:border-brand-primary transition-all shadow-sm ${className}`}
    >
      <Printer size={15} />
      {label}
    </button>
  );
}
