import Navbar from '@/shared/components/navbar';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="md:ml-64 pt-0 p-6">
        {children}
      </main>
    </>
  );
}

