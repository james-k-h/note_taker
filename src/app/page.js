import Header from '@/components/header';
import Image from 'next/image';
import Footer from '@/components/footer';
import { getAuthSession } from '@/lib/auth';

export default async function Home() {
  const session = await getAuthSession();
  return (
    <>
      <Header session={session} />
      <main className="flex min-h-screen flex-col">
        <div className="container mt-24 mx-auto px-12 py-4 ">
          <p>placeholder</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
