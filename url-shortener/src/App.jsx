import { useState } from 'react';
import './App.css';

export default function App() {
  const [inputUrl, setInputUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleShorten = async () => {
    setError('');
    setShortUrl('');
    if (!inputUrl.trim()) return setError("Please enter a URL");
    setLoading(true);

    try {
      const res = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(inputUrl)}`);
      if (!res.ok) throw new Error("Failed to fetch");
      const text = await res.text();
      setShortUrl(text);
    } catch (err) {
      console.error("Shortening error:", err);
      setError("Unable to shorten the URL. Try a different one.");
    } finally {
      setLoading(false);
    }
  };

  const HandleCopy = () => {
    if (!shortUrl) return;
    navigator.clipboard.writeText(shortUrl)
      .then(() => document.getElementById('copyButton').innerText = 'Copied!')
      .catch(err => console.error("Copy failed:", err));
    setTimeout(() => {
      document.getElementById('copyButton').innerText = 'Copy';
      
    },2000);
  };

  return (

    <div className='flex flex-col items-center justify-center min-w-screen min-h-screen bg-black'>
      <div className='w-9/10 h-full md:w-5/10 md:h-4/5 p-10 border rounded-xl bg-gradient-to-r from-green-500 to to-blue-600 text-white flex flex-col items-center justify-center gap-5'>

        <h2 className='font-semibold text-3xl mb-5'>🔗 URL Shortener</h2>
        <input
          type="text"
          placeholder="Enter a long URL"
          value={inputUrl}
          onChange={e => setInputUrl(e.target.value)}
          className='w-full p-2 border rounded mb-4 foucs:outline-none'

        />
        <button
          onClick={handleShorten}
          disabled={loading}
          className='w-full p-2 bg-black/80 text-white rounded hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed'

        >
          {loading ? 'Shortening...' : 'Shorten URL'}
        </button>

        {error && <p className='text-red-600'>{error}</p>}

        {shortUrl && (
          <div className='w-full mt-4 flex justify-around items-center'>
            <p 
            className='text-black p-2 text-center border'>
              Shortened URL: <a href={shortUrl} className='hover:underline' target="_blank" rel="noopener noreferrer">{shortUrl}</a>
            </p>
            <button
            onClick={HandleCopy}
            id='copyButton'
            className='p-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50 cursor-pointer'>Copy</button>
          </div>
        )}
      </div>
    </div>
  );
}
