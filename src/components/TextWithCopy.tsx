import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export const TextWithCopy = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
      <pre className="whitespace-pre-wrap text-sm text-left bg-gray-50 dark:bg-gray-900 p-3 rounded border border-gray-300 dark:border-gray-700 overflow-x-auto">
        {text}
      </pre>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors flex items-center gap-2"
        onClick={copyToClipboard}
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
        {copied ? 'Copied!' : 'Copy to clipboard'}
      </button>
    </div>
  );
};
