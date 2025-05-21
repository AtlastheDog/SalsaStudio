import Head from 'next/head';
import Image from 'next/image'; // Import the Image component
import Navigation from '@/components/Navigation'; // Import the new Navigation component

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Salsa Brand</title>
        <meta name="description" content="Delicious local salsa brand" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation /> {/* Add the Navigation component */}

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* Hero Section */}
        <section className="w-full text-center py-12">
          <h1 className="text-5xl font-bold">Experience the Flavor of [Your Salsa Brand Name]</h1>
          <p className="mt-4 text-xl">Handcrafted with fresh, local ingredients.</p>
          {/* You can add an image here */}
          {/* <Image src="/images/hero-salsa.jpg" alt="Delicious Salsa" width={600} height={400} className="mt-8 mx-auto" /> */}
        </section>

        {/* Call to Action / Online Order Section (Future) */}
        <section className="w-full py-12 text-center">
          <h2 className="text-3xl font-bold">Get Your Salsa Today!</h2>
          <p className="mt-4 text-xl">
            [Link to online store or a call to action for local purchase.]
          </p>
          {/* You can add a button component here */}
        </section>
      </main>

      <footer className="w-full text-center py-8 border-t">
        <p>&copy; {new Date().getFullYear()} [Your Salsa Brand Name]. All rights reserved.</p>
      </footer>
    </>
  );
}