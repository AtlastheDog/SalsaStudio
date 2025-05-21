import Head from 'next/head';
import Image from 'next/image'; // Import the Image component
import Navigation from '@/components/Navigation'; // Import the Navigation component

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Our Story - Your Salsa Brand</title>
        <meta name="description" content="Learn about the story of our salsa brand" />
      </Head>

      <Navigation /> {/* Add the Navigation component */}

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* About Section */}
        <section className="w-full py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center">Our Story</h1>
            <p className="mt-4 text-lg text-center">
              [Write a brief and engaging story about your salsa brand, its origins, and values.]
            </p>
            {/* You can add an image here */}
            {/* <Image src="/images/our-story.jpg" alt="Our Story" width={500} height={300} className="mt-8 mx-auto" /> */}
          </div>
        </section>
      </main>

      <footer className="w-full text-center py-8 border-t">
        <p>&copy; {new Date().getFullYear()} [Your Salsa Brand Name]. All rights reserved.</p>
      </footer>
    </>
  );
}
