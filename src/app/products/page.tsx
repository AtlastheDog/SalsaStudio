import Head from 'next/head';
import Image from 'next/image'; // Import the Image component
import Navigation from '@/components/Navigation'; // Import the Navigation component

export default function ProductsPage() {
  return (
    <>
      <Head>
        <title>Our Salsas - Your Salsa Brand</title>
        <meta name="description" content="Explore our delicious salsa varieties and prices" />
      </Head>

      <Navigation /> {/* Add the Navigation component */}

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* Products Section */}
        <section className="w-full py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center">Our Salsas</h1>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Mild Salsa */}
              <div className="text-center">
                {/* <Image src="/images/salsa-mild.jpg" alt="Mild Salsa" width={300} height={200} className="mx-auto" /> */}
                <h3 className="mt-4 text-xl font-semibold">Mild Salsa</h3>
                <p className="mt-2">[Description of mild salsa]</p>
                <p className="mt-1 text-lg font-bold">$[Price of Mild Salsa]</p>
              </div>
              {/* Medium Salsa */}
              <div className="text-center">
                {/* <Image src="/images/salsa-medium.jpg" alt="Medium Salsa" width={300} height={200} className="mx-auto" /> */}
                <h3 className="mt-4 text-xl font-semibold">Medium Salsa</h3>
                <p className="mt-2">[Description of medium salsa]</p>
                <p className="mt-1 text-lg font-bold">$[Price of Medium Salsa]</p>
              </div>
              {/* Hot Salsa */}
              <div className="text-center">
                {/* <Image src="/images/salsa-hot.jpg" alt="Hot Salsa" width={300} height={200} className="mx-auto" /> */}
                <h3 className="mt-4 text-xl font-semibold">Hot Salsa</h3>
                <p className="mt-2">[Description of hot salsa]</p>
                <p className="mt-1 text-lg font-bold">$[Price of Hot Salsa]</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full text-center py-8 border-t">
        <p>&copy; {new Date().getFullYear()} [Your Salsa Brand Name]. All rights reserved.</p>
      </footer>
    </>
  );
}
