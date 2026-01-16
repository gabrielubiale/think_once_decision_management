'use client'

import Image from 'next/image'

export default function ColorTestPage() {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
  }

  const primaryColors = ['900', '950']

  const darkColors = [
    '50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'
  ]

  return (
    <div
      className="min-h-screen transition-colors"
      style={{
        background: 'var(--background)',
        color: 'var(--foreground)',
      }}
    >
      <div className="p-8 max-w-7xl mx-auto space-y-16">

        {/* Header */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold">Think Once</h1>
              <p style={{ color: 'var(--foreground-secondary)' }}>
                Design System – Color Tokens
              </p>
            </div>
          </div>

          <button
            onClick={toggleDarkMode}
            className="px-6 py-3 rounded-lg font-semibold transition"
            style={{
              background: 'var(--primary)',
              color: '#fff',
              boxShadow: 'var(--shadow-glow)',
            }}
          >
            Toggle Dark Mode
          </button>
        </header>

        {/* Primary Colors */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Primary Colors (Dark Tones)</h2>

          <div className="grid grid-cols-2 gap-6 max-w-md">
            {primaryColors.map((step) => (
              <div key={step} className="text-center space-y-2">
                <div
                  className="h-32 rounded-lg"
                  style={{
                    background: `var(--primary-${step})`,
                    boxShadow: step === '950' ? 'var(--shadow-glow)' : undefined,
                  }}
                />
                <p className="text-sm font-semibold">{step}</p>
                <p
                  className="text-xs font-mono"
                  style={{ color: 'var(--foreground-secondary)' }}
                >
                  --primary-{step}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Dark Colors */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Dark Scale</h2>

          <div className="grid grid-cols-7 gap-4">
            {darkColors.map((step) => (
              <div key={step} className="text-center space-y-2">
                <div
                  className="h-24 rounded-lg"
                  style={{
                    background: `var(--dark-${step})`,
                    border: '1px solid var(--border)',
                  }}
                />
                <p className="text-sm font-semibold">{step}</p>
                <p
                  className="text-xs font-mono"
                  style={{ color: 'var(--foreground-secondary)' }}
                >
                  --dark-{step}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Surfaces */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Surfaces</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div
              className="p-6 rounded-xl"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              Surface
            </div>

            <div
              className="p-6 rounded-xl"
              style={{
                background: 'var(--surface-elevated)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              Elevated
            </div>

            <div
              className="p-6 rounded-xl"
              style={{
                background: 'var(--primary)',
                color: '#fff',
                boxShadow: 'var(--shadow-glow)',
              }}
            >
              Brand Surface
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
