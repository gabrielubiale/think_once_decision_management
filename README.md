# 🧠 Think Once

> **Think Once** — Sistema de gerenciamento de decisões empresariais

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-16.x-black)
![React](https://img.shields.io/badge/React-19.x-blue)
![License](https://img.shields.io/badge/license-MIT-green.svg)

</div>

---

## 💡 Visão Geral

**Think Once** é uma plataforma **Decision Management System (DMS)** que permite **modelar, executar e auditar decisões de negócio repetíveis** por meio de regras claras, versionadas e rastreáveis.

> **Think once. Execute sempre.**

A proposta é simples: separar **lógica de decisão** do código da aplicação, dando autonomia ao negócio sem abrir mão de governança, auditoria e performance.

---

## 🎯 O Problema

Empresas tomam milhares de decisões operacionais todos os dias:

* 🏦 Aprovação de crédito e financiamentos
* 🏥 Autorização de sinistros e procedimentos
* 🏢 Aprovação de despesas, licenças e acessos
* 🚗 Pré-validação de clientes e parceiros

Hoje, essas decisões normalmente estão:

* ❌ Espalhadas no código-fonte
* ❌ Difíceis de alterar (dependem de deploy)
* ❌ Sem explicação clara do *porquê* da decisão
* ❌ Sem histórico ou versionamento

Isso gera **lentidão, risco de compliance e alto custo operacional**.

---

## ✅ A Solução

O **Think Once** centraliza decisões de negócio em um **motor de regras auditável**, permitindo:

* Separar regra de negócio de código
* Atualizar decisões sem deploy
* Explicar cada decisão de forma transparente
* Testar cenários antes de entrar em produção

---

## 🧠 Como Funciona

### Exemplo: Aprovação de Empréstimo

#### 1️⃣ Cadastro das regras

```text
Regra: Auto-aprovação (Prioridade Alta)
SE scoreCredito > 750 E rendaMensal > 5000
ENTÃO APROVAR com confiança 90%
```

```text
Regra: Rejeição automática (Prioridade Alta)
SE scoreCredito < 500
ENTÃO REJEITAR
```

```text
Regra: Revisão manual (Prioridade Média)
SE scoreCredito entre 500 e 750
ENTÃO ENVIAR_PARA_ANALISTA
```

---

#### 2️⃣ Entrada de dados (fatos)

```json
{
  "nome": "João Silva",
  "idade": 35,
  "rendaMensal": 8000,
  "scoreCredito": 780,
  "valorEmprestimo": 50000,
  "tempoEmprego": 5
}
```

---

#### 3️⃣ Processamento pelo motor

* Avalia todas as regras ativas
* Ordena por prioridade
* Executa a primeira regra válida
* Registra justificativas

---

#### 4️⃣ Resultado retornado

```json
{
  "decisao": "APROVADO",
  "confianca": 90,
  "justificativa": [
    "Score de crédito acima de 750 (780)",
    "Renda mensal suficiente (R$ 8.000)",
    "Regra 'Auto-aprovação' aplicada"
  ],
  "regrasAplicadas": ["AUTO_APROVACAO"],
  "timestamp": "2026-01-16T18:30:00Z"
}
```

---

## 🏗️ Arquitetura Conceitual

```text
Usuário (Business / Analista)
        ↓
Interface Web (Next.js)
        ↓
Decision Engine
        ↓
Repositório de Regras
```

**Princípios-chave:**

* Regra ≠ Código
* Decisão sempre explicável
* Histórico imutável

---

## 🚀 Diferenciais

### ✔ Motor de decisão real

* Avaliação condicional (if/then)
* Prioridade entre regras
* Execução determinística

### ✔ Rastreabilidade total

* Quem decidiu
* Quando decidiu
* Por que decidiu
* Qual versão da regra foi usada

### ✔ Business-friendly

* Pensado para analistas, não só devs
* Interface clara
* Testes de cenário

### ✔ Pronto para escalar

* Arquitetura preparada para backend
* API-first
* Microservices-ready

---

## 🎯 Casos de Uso

* Crédito e financiamentos
* Detecção de fraude
* Aprovação de despesas
* Onboarding automatizado
* Pricing dinâmico

---

## 🛠️ Stack Tecnológica

### Frontend

* **Next.js 16** (App Router)
* **React 19**
* **TypeScript**
* **Tailwind CSS 4**
* **HeroUI**

### Estado & Dados

* **TanStack Query**
* **Zustand**
* **MSW (Mock Service Worker)**

### Formulários & Validação

* **React Hook Form**
* **Zod**

### Visualização

* **Recharts**

### Qualidade

* ESLint
* Prettier
* Husky
* lint-staged
* Commitlint

---

## 📁 Estrutura do Projeto

```text
src/
 ├─ app/            # Rotas (Next App Router)
 ├─ features/       # Domínios da aplicação
 ├─ domain/         # Regras e entidades puras
 ├─ mocks/          # API mockada (MSW)
 ├─ components/     # UI compartilhada
 ├─ store/          # Zustand
 └─ lib/            # Utilitários
```

---

## 🛣️ Roadmap

### MVP

* Motor de decisão mockado
* Execução de decisões
* Histórico e dashboard

### Próximas fases

* Editor visual de regras
* Versionamento
* Backend Node.js + PostgreSQL
* Autenticação
* API pública

---

## 🎓 Inspirações

* IBM Decision Management
* Drools
* DMN (Decision Model and Notation)

---

## 📄 Licença

MIT License

---

<div align="center">

**🧠 Think Once — Pense uma vez. Execute sempre.**

</div>
