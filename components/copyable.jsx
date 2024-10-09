import { useState } from "react";

const CopyableField = ({ label, value }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000); 
  };

  return (
    <div className="mb-4 flex justify-between items-center">
      <div>
        <p className="font-bold text-md md:text-lg">{label}:</p>
        <p>{value}</p>
      </div>
      <button
        onClick={handleCopy}
        title={copied ? "Copied!" : "Copy to Clipboard"}
        className={`p-2 rounded-full border-2 border-blue-500 transition-colors duration-300 ${
          copied ? "bg-blue-500 text-white" : "bg-white text-blue-500 hover:bg-blue-100"
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path d="M8 1a2 2 0 00-2 2v1H4a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-2V3a2 2 0 00-2-2H8z" />
          <path d="M6 5h8v2H6V5z" />
        </svg>
      </button>
    </div>
  );
};

export default CopyableField;
