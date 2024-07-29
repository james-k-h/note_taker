import Header from '@/components/header';
import Image from 'next/image';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col">
        <div className="container mt-24 mx-auto px-12 py-4 ">
          <p>placeholder</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
