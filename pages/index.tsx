import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

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

      <main className="min-h-screen flex flex-col bg-white">
        {/* Navbar */}
        <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto w-full">
          <h1
            className="text-3xl font-extrabold text-indigo-700 cursor-pointer select-none"
            aria-label="Forma Space logo"
          >
            Forma Space
          </h1>
          <Link
            href="/upload"
            className="inline-block rounded-md bg-indigo-600 px-6 py-2 text-white font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition"
            aria-label="Get started with Forma Space"
          >
            Get Started
          </Link>
        </nav>

        {/* Hero Section */}
        <section
          className="relative flex-grow flex flex-col justify-center items-center text-center px-6 max-w-6xl mx-auto mb-20 rounded-lg overflow-hidden shadow-lg"
          aria-label="Hero section with interior design image"
          style={{
            minHeight: "70vh",
          }}
        >
          {/* Background Image */}
          <Image
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80"
            alt="Beautiful modern living room interior"
            fill
            style={{ objectFit: "cover" }}
            priority
            quality={80}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/80 via-indigo-900/70 to-indigo-900/80"></div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl text-white px-4">
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg animate-fadeInUp">
              Revolutionize Your Interior Design
            </h2>
            <p className="text-lg md:text-xl mb-10 drop-shadow-md animate-fadeInUp animation-delay-200">
              Upload photos of your room and let our AI transform them into stunning interiors with styles inspired by your taste.
            </p>

            <Link
              href="/upload"
              className="inline-block rounded-md bg-indigo-500 hover:bg-indigo-600 px-10 py-4 text-white text-xl font-semibold transition shadow-lg animate-fadeInUp animation-delay-400 focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-50"
              aria-label="Try it now button"
            >
              Try It Now
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section
          className="bg-gray-50 py-16 w-full"
          aria-label="Features section describing AI powered styles, easy upload, multiple styles"
        >
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard
              title="AI Powered Styles"
              description="Our AI generates interior design styles tailored to your room's unique features."
              imageSrc="https://images.unsplash.com/photo-1560448204-5e3f47f6b136?auto=format&fit=crop&w=600&q=80"
            />
            <FeatureCard
              title="Easy Upload"
              description="Simply upload your room photos and see the transformation in seconds."
              imageSrc="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80"
            />
            <FeatureCard
              title="Multiple Styles"
              description="Choose from modern, vintage, bold and more — all designed by AI."
              imageSrc="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80"
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-gray-500 text-sm select-none">
          &copy; {new Date().getFullYear()} Forma Space. All rights reserved.
        </footer>

        {/* Animation Styles */}
        <style jsx>{`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease forwards;
          }
          .animation-delay-200 {
            animation-delay: 0.2s;
          }
          .animation-delay-400 {
            animation-delay: 0.4s;
          }
        `}</style>
      </main>
    </>
  );
}

function FeatureCard({
  title,
  description,
  imageSrc,
}: {
  title: string;
  description: string;
  imageSrc: string;
}) {
  return (
    <article
      className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition p-6 flex flex-col items-center text-center group cursor-default"
      tabIndex={0}
      aria-label={title}
    >
      <div className="w-full h-48 relative mb-6 rounded overflow-hidden group-focus:ring-4 group-focus:ring-indigo-300">
        <Image
          src={imageSrc}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 600px"
        />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-indigo-700 group-focus:text-indigo-900 transition">
        {title}
      </h3>
      <p className="text-gray-700">{description}</p>
    </article>
  );
}
