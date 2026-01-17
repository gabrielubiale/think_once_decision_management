import { ReactNode } from 'react';

export interface SectionProps {
  id: string;
  title?: string;
  description?: string;
  background?: 'default' | 'elevated' | 'primary';
  children: ReactNode;
  className?: string;
}

