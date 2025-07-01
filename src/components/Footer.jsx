import { useState } from 'react';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = 'chinacommunitydays@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <footer className="footer">
      <div>For any questions, contact</div>
      <div>
        <button onClick={handleCopy} className="email-copy-button">
          {copied ? 'Copied' : 'chinacommunitydays@gmail.com'}
        </button>
      </div>
      <div>
        {/* Social media icons/links here */}
      </div>
    </footer>
  );
} 