import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

type ProcessResponse = {
  processedImage: string;
  styleApplied: string;
  message: string;
};

export default function Result() {
  const router = useRouter();
  const { filePath, style } = router.query as {
    filePath?: string | string[];
    style?: string | string[];
  };

  const filePathStr = Array.isArray(filePath) ? filePath[0] : filePath;
  const styleStr = Array.isArray(style) ? style[0] : style;

  const [result, setResult] = useState<ProcessResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!filePathStr || !styleStr) return;

    async function fetchProcessed() {
      setLoading(true);
      setError('');
      try {
        const res = await fetch('https://forma-space-backend.onrender.com/api/process-image', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ filePath: filePathStr, style: styleStr }),
        });

        if (!res.ok) {
          throw new Error('Failed to process image');
        }

        const data: ProcessResponse = await res.json();
        setResult(data);
      } catch (err) {
        if (err instanceof Error) setError(err.message);
        else setError('Something went wrong');
      } finally {
        setLoading(false);
      }
    }

    fetchProcessed();
  }, [filePathStr, styleStr]);

  if (!filePathStr || !styleStr) {
    return (
      <main className="min-h-screen p-6 flex flex-col items-center justify-center">
        <p className="text-gray-700">
          Missing parameters. Please{' '}
          <Link href="/upload" className="text-indigo-600 underline">
            upload an image
          </Link>
          .
        </p>
      </main>
    );
  }

  const imgSrc =
    result?.processedImage
      ? `https://forma-space-backend.onrender.com${result.processedImage.startsWith('/') ? '' : '/'}${result.processedImage}`
      : '';

  return (
    <main className="min-h-screen p-6 flex flex-col items-center bg-gray-50">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Your AI Styled Room</h1>

      {loading && <p className="text-gray-700 mb-6">Processing your image, please wait...</p>}

      {error && (
        <p className="text-red-600 mb-6">
          Error: {error} <br />
          <Link href="/upload" className="text-indigo-600 underline">
            Try uploading again
          </Link>
        </p>
      )}

      {result && !loading && !error && (
        <div className="max-w-3xl w-full bg-white rounded shadow p-6 flex flex-col items-center">
          <p className="mb-4 text-gray-700 font-semibold">Style Applied: {result.styleApplied}</p>

          <div className="relative w-full h-[400px] rounded overflow-hidden mb-4">
            {imgSrc && (
              <Image
                src={imgSrc}
                alt={`Processed styled room - ${result.styleApplied}`}
                layout="fill"
                objectFit="contain"
                priority
              />
            )}
          </div>

          <Link href="/upload" className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
            Upload Another Image
          </Link>
        </div>
      )}
    </main>
  );
}
