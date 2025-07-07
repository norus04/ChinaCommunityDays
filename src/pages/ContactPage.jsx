import React, { useState } from 'react';

const ContactPage = () => {
  const email = 'chinacommunitydays@gmail.com';
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="contact-page">
      <h1>Contact</h1>
      <p className="contact-email">
        <span>{email}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="contact-copy-btn"
        >
          {copied ? (
            <img src="/images/Copied.png" style={{ width: 30, height: 30 }} />
          ) : (
            <img src="/images/Clipboard.png" style={{ width: 30, height: 30 }} />
          )}
        </button>
      </p>
    </div>
  );
};

export default ContactPage; 