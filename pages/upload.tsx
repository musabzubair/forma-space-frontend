import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Upload() {
  const [file, setFile] = useState<File | null>(null);
  const [style, setStyle] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setError('');
    }
  };

  const handleStyleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStyle(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      setError('Please select an image file.');
      return;
    }
    if (!style) {
      setError('Please select a style.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('roomImage', file);  // <-- changed 'file' to 'roomImage'
      formData.append('style', style);

      const res = await fetch('https://forma-space-backend.onrender.com/api/upload-image', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        throw new Error('Upload failed');
      }

      const data: { filePath: string } = await res.json();

      router.push(`/result?filePath=${encodeURIComponent(data.filePath)}&style=${encodeURIComponent(style)}`);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Something went wrong');
      }
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Upload Your Room Photo</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md flex flex-col gap-4">
        <input type="file" accept="image/*" onChange={handleFileChange} />

        <select value={style} onChange={handleStyleChange} className="p-2 border rounded">
          <option value="">Select Style</option>
          <option value="modern">Modern</option>
          <option value="vintage">Vintage</option>
          <option value="bold">Bold</option>
        </select>

        {error && <p className="text-red-600">{error}</p>}

        <button type="submit" className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
          Upload and Style
        </button>
      </form>
    </main>
  );
}
