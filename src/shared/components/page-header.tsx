import { ComponentType } from 'react';
import { IconProps } from 'phosphor-react';

interface PageHeaderProps {
  icon: ComponentType<IconProps>;
  title: string;
}

export default function PageHeader({ icon: Icon, title }: PageHeaderProps) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <Icon 
        size={24} 
        weight="bold" 
        style={{ color: 'var(--primary)' }}
      />
      <h1 
        className="text-2xl font-bold"
        style={{ color: 'var(--foreground)' }}
      >
        {title}
      </h1>
    </div>
  );
}

