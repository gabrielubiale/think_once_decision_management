import { SectionProps } from './Section.type';

export default function Section({
  id,
  title,
  description,
  background = 'default',
  children,
  className = '',
}: SectionProps) {
  const backgroundStyles = {
    default: {},
    elevated: { background: 'var(--surface-elevated)' },
    primary: { background: 'var(--primary)' },
  };

  return (
    <section
      id={id}
      className={`h-screen flex items-center px-6 snap-start ${className}`}
      style={backgroundStyles[background]}
    >
      <div className="max-w-7xl mx-auto w-full py-20">
        {(title || description) && (
          <div className="text-center mb-16">
            {title && (
              <h2
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{ color: background === 'primary' ? '#fff' : 'var(--foreground)' }}
              >
                {title}
              </h2>
            )}
            {description && (
              <p
                className="text-xl max-w-3xl mx-auto"
                style={{
                  color: background === 'primary' ? 'rgba(255, 255, 255, 0.9)' : 'var(--foreground-secondary)',
                }}
              >
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

