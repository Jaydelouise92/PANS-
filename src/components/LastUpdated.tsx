import React from 'react';
import { Calendar } from 'lucide-react';

interface Props {
  date: string;
  className?: string;
}

export default function LastUpdated({ date, className = '' }: Props) {
  return (
    <div className={`no-print inline-flex items-center gap-1.5 text-xs text-stone-400 ${className}`}>
      <Calendar size={11} />
      Last updated: {date}
    </div>
  );
}
