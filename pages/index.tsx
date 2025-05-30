import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Forma Space - AI Interior Design</title>
        <meta
          name="description"
          content="Welcome to Forma Space - Your AI-powered interior design assistant."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex flex-col">
        {/* Navbar */}
        <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto w-full">
          <h1 className="text-2xl font-bold text-indigo-600 cursor-pointer">Forma Space</h1>
          <div>
            <Link href="/upload" legacyBehavior>
              <a className="rounded-md bg-indigo-600 px-5 py-2 text-white font-semibold hover:bg-indigo-700 transition">
                Get Started
              </a>
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="flex-grow flex flex-col justify-center items-center text-center px-6 max-w-4xl mx-auto">
          <h2 className="text-6xl font-extrabold text-gray-900 mb-6">
            Revolutionize Your Interior Design
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            Upload photos of your room and let our AI transform them into stunning interiors with styles inspired by your taste.
          </p>

          <Link href="/upload" legacyBehavior>
            <a className="rounded-md bg-indigo-600 px-10 py-4 text-white text-xl font-semibold hover:bg-indigo-700 transition">
              Try It Now
            </a>
          </Link>
        </section>

        {/* Features Section */}
        <section className="bg-white py-16 mt-16">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard
              title="AI Powered Styles"
              description="Our AI generates interior design styles tailored to your room's unique features."
            />
            <FeatureCard
              title="Easy Upload"
              description="Simply upload your room photos and see the transformation in seconds."
            />
            <FeatureCard
              title="Multiple Styles"
              description="Choose from modern, vintage, bold and more — all designed by AI."
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Forma Space. All rights reserved.
        </footer>
      </main>
    </>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-indigo-50 rounded-lg p-6 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-3 text-indigo-700">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
