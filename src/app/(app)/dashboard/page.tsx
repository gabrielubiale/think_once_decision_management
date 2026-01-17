'use client';

import PageHeader from "@/shared/components/page-header";
import { ChartBar } from 'phosphor-react';

export default function DashboardPage() {
  return (
    <div>
      <PageHeader icon={ChartBar} title="Dashboard" />
    </div>
  );
}

