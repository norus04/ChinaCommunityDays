import React, { useState, useRef } from 'react';

const ContactPage = () => {
  const email = 'chinacommunitydays@gmail.com';
  const facebookUrl = 'https://www.facebook.com/p/China-Community-Days-100064769106317/';
  const townWebsite = 'https://chinamaine.org/';
  const [copied, setCopied] = useState(false);
  const textareaRef = useRef(null);

  const handleCopy = async () => {
    // Try modern clipboard API first
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
        return;
      } catch (err) {
        // fallback below
      }
    }
    // Fallback for older browsers/mobile
    if (textareaRef.current) {
      textareaRef.current.value = email;
      textareaRef.current.style.display = 'block';
      textareaRef.current.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      } catch (err) {
        // fallback failed, do nothing
      }
      textareaRef.current.style.display = 'none';
    }
  };

  return (
    <div className="contact-page">
      <h1>Contact</h1>
      <p className="contact-email">
        <img
          src="/images/Gmail-Logo.png"
          alt="Email"
          style={{ width: 48, height: 48, marginRight: 8, verticalAlign: 'middle' }}
        />
        <span>{email}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="contact-copy-btn">
          {copied ? (
            <img src="/images/Copied.png" style={{ width: 30, height: 30 }} />
          ) : (
            <img src="/images/Clipboard.png" style={{ width: 30, height: 30 }} />
          )}
        </button>
        {/* Hidden textarea for fallback copy */}
        <textarea
          ref={textareaRef}
          style={{ position: 'absolute', left: '-9999px', top: 0, opacity: 0, height: 0, width: 0, display: 'none' }}
          aria-hidden="true"
          tabIndex={-1}
          readOnly
        />
      </p>
      <p className="contact-facebook">
        <img
          src="/images/Facebook-Logo.png"
          alt="Facebook"
          style={{ width: 32, height: 32, marginRight: 8, verticalAlign: 'middle' }}
        />
        <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
          @ChinaCommunityDays
        </a>
      </p>
      <p className="town-website">
        <img
          src="/images/China-Logo.png"
          alt="Website"
          style={{ width: 48, height: 38, marginRight: 8, verticalAlign: 'middle' }}
        />
        <a href={townWebsite} target="_blank" rel="noopener noreferrer">
          Town Website
        </a>
      </p>
    </div>
  );
};

export default ContactPage; 