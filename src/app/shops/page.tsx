import Head from 'next/head';
import Navigation from '@/components/Navigation'; // Import the Navigation component

export default function ShopsPage() {
  return (
    <>
      <Head>
        <title>Find Our Salsa Locally - Your Salsa Brand</title>
        <meta name="description" content="Find local shops that sell our salsa" />
      </Head>

      <Navigation /> {/* Add the Navigation component */}

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* Local Shops Section */}
        <section className="w-full py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-8">Find Our Salsa Locally</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Placeholder for a single shop */}
              <div className="border p-4 rounded-lg">
                <h3 className="text-xl font-semibold">[Shop Name]</h3>
                <p className="mt-2 text-gray-700">[Shop Address]</p>
                <p className="mt-1 text-gray-700">[Shop City, State, Zip]</p>
                {/* Optional: Link to shop website */}
                {/* <p className="mt-2"><a href="[Shop Website URL]" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[Shop Name] Website</a></p> */}
              </div>

              {/* Repeat the div above for other shops */}

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

