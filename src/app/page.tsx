'use client';

import LandingNavbar from '@/shared/components/landing-navbar';
import Section from '@/features/HomePage/Section';
import Link from 'next/link';
import { 
  Brain, 
  Lightning, 
  ChartLineUp, 
  ShieldCheck, 
  Rocket, 
  CheckCircle,
  ArrowRight,
  Sparkle,
  Scales,
  FileText,
  ChartBar
} from 'phosphor-react';

export default function LandingPage() {
  const benefits = [
    {
      icon: Brain,
      title: 'Empodere Usuários de Negócio',
      description: 'Use software de regras de negócio para modelar, criar e validar decisões intuitivamente em um ambiente low-code.',
    },
    {
      icon: ChartLineUp,
      title: 'Tome Decisões Melhores',
      description: 'Combine IA com análise preditiva para melhorar seu processo de tomada de decisão.',
    },
    {
      icon: Sparkle,
      title: 'Otimize Experiências do Cliente',
      description: 'Use análise avançada para se adaptar a mudanças em tempo real e superar expectativas dos clientes.',
    },
  ];

  const solutions = [
    {
      icon: Scales,
      title: 'Gerenciamento de Decisões Operacionais',
      description: 'Analise, automatize e governe decisões de negócio complexas para atender às necessidades empresariais.',
    },
    {
      icon: Lightning,
      title: 'Serviços de Automação de Decisões',
      description: 'Implemente projetos de automação de decisões intuitivos e inteligentes sem necessidade de profissionais de TI.',
    },
    {
      icon: FileText,
      title: 'Motor de Regras Auditável',
      description: 'Centralize decisões de negócio em um motor de regras que permite rastreabilidade e versionamento completo.',
    },
  ];

  const useCases = [
    {
      title: 'Aprovação de Crédito e Financiamentos',
      description: 'Automatize a análise de crédito com regras claras e rastreáveis, reduzindo tempo de resposta e melhorando a precisão.',
    },
    {
      title: 'Autorização de Sinistros',
      description: 'Gerencie autorizações de sinistros e procedimentos com decisões automatizadas baseadas em regras de negócio.',
    },
    {
      title: 'Aprovação de Despesas',
      description: 'Simplifique a aprovação de despesas, licenças e acessos com regras de negócio centralizadas e auditáveis.',
    },
  ];

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory" style={{ scrollBehavior: 'smooth' }}>
      <main className="pt-0">
        <section className="relative h-screen flex items-center justify-center overflow-hidden flex-col snap-start">
          <LandingNavbar />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-950/20 via-transparent to-dark-900/30"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
              <Sparkle size={20} style={{ color: 'var(--primary)' }} weight="fill" />
              <span className="text-sm font-semibold" style={{ color: 'var(--foreground-secondary)' }}>
                Seja bem vindo ao nosso sistema de gerencimento de decisões
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: 'var(--foreground)', lineHeight: '1.2' }}>
              Modele, gerencie e automatize
              <br />
              <span style={{ color: 'var(--primary)' }}>decisões de negócio</span>
              <br />
              repetíveis
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--foreground-secondary)' }}>
              Nosso sistema executa decisões repetidas de negócio de forma automática e eficiente. Veja dashboards gerenciais de todas as decisões enquanto mantém controle de regras e dados .
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/dashboard"
                className="px-8 py-4 rounded-lg font-semibold text-lg transition-base flex items-center gap-2"
                style={{
                  background: 'var(--primary)',
                  color: '#fff',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--primary-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--primary)';
                }}
              >
                Começar Agora
                <ArrowRight size={20} weight="bold" />
              </Link>
              <Link
                href="/dashboard"
                className="px-8 py-4 rounded-lg font-semibold text-lg transition-base border-2"
                style={{
                  borderColor: 'var(--border)',
                  color: 'var(--foreground)',
                }}
              >
                Ver Demonstração
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <Section
          id="beneficios"
          title="Infunda inteligência em decisões operacionais"
          description="Quando você combina regras de negócio prescritivas com modelagem preditiva, pode usar machine learning para automatizar decisões repetíveis e obter vantagem competitiva."
          background="elevated"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="p-8 rounded-xl transition-base"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6" style={{ background: 'var(--primary)', opacity: 0.1 }}>
                    <Icon size={32} style={{ color: 'var(--primary)' }} weight="bold" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                    {benefit.title}
                  </h3>
                  <p className="text-lg leading-relaxed" style={{ color: 'var(--foreground-secondary)' }}>
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Section>

        {/* Solutions Section */}
        <Section
          id="solucoes"
          title="Soluções de Gerenciamento de Decisões"
          description="Crie e gerencie lógica de negócio independentemente de aplicações e processos."
        >
          <div className="grid md:grid-cols-3 gap-8">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <div
                    key={index}
                    className="p-8 rounded-xl transition-base hover:scale-105"
                    style={{
                      background: 'var(--surface-elevated)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <Icon size={48} style={{ color: 'var(--primary)' }} weight="bold" className="mb-6" />
                    <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                      {solution.title}
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: 'var(--foreground-secondary)' }}>
                      {solution.description}
                    </p>
                  </div>
                );
              })}
          </div>
        </Section>

        {/* Use Cases Section */}
        <Section
          id="casos-de-uso"
          title="Casos de Uso"
          description="Veja como a automação inteligente de decisões impulsiona a excelência operacional."
          background="elevated"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="p-8 rounded-xl transition-base"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <CheckCircle size={24} style={{ color: 'var(--success)' }} weight="fill" className="flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>
                    {useCase.title}
                  </h3>
                </div>
                <p className="text-lg leading-relaxed" style={{ color: 'var(--foreground-secondary)' }}>
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Key Features Section */}
        <Section id="recursos">
          <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
                  Separe regra de negócio de código
                </h2>
                <p className="text-xl mb-8 leading-relaxed" style={{ color: 'var(--foreground-secondary)' }}>
                  Dê autonomia ao negócio sem abrir mão de governança, auditoria e performance. Atualize decisões sem deploy e teste cenários antes de entrar em produção.
                </p>
                <ul className="space-y-4">
                  {[
                    'Decisões sempre explicáveis',
                    'Histórico e versionamento completo',
                    'Rastreabilidade total',
                    'Testes de cenários antes da produção',
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle size={24} style={{ color: 'var(--success)' }} weight="fill" />
                      <span className="text-lg" style={{ color: 'var(--foreground)' }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 rounded-xl" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'var(--primary)', opacity: 0.1 }}>
                      <Scales size={24} style={{ color: 'var(--primary)' }} weight="bold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg" style={{ color: 'var(--foreground)' }}>Decisões Rastreáveis</h4>
                      <p className="text-sm" style={{ color: 'var(--foreground-secondary)' }}>Cada decisão documentada</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'var(--primary)', opacity: 0.1 }}>
                      <FileText size={24} style={{ color: 'var(--primary)' }} weight="bold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg" style={{ color: 'var(--foreground)' }}>Regras Versionadas</h4>
                      <p className="text-sm" style={{ color: 'var(--foreground-secondary)' }}>Controle total de versões</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'var(--primary)', opacity: 0.1 }}>
                      <ChartBar size={24} style={{ color: 'var(--primary)' }} weight="bold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg" style={{ color: 'var(--foreground)' }}>Analytics em Tempo Real</h4>
                      <p className="text-sm" style={{ color: 'var(--foreground-secondary)' }}>Métricas e insights</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </Section>

        {/* CTA Section */}
        <Section
          id="contato"
          title="Pronto para começar?"
          description="Não tem certeza por onde começar? Experimente nossa plataforma e veja como podemos ajudar sua empresa a tomar decisões melhores."
          background="primary"
        >
          <div className="max-w-4xl mx-auto w-full text-center">
            <Rocket size={64} weight="fill" style={{ color: '#fff' }} className="mx-auto mb-6" />
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg transition-base"
              style={{
                background: '#fff',
                color: 'var(--primary)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
            >
              Começar Agora
              <ArrowRight size={20} weight="bold" />
            </Link>
          </div>
        </Section>
      </main>
    </div>
  );
}
