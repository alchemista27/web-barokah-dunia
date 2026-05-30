'use client';

import { useState, useEffect } from 'react';

import styles from './FloatingWA.module.css';

const WA_NUMBER = '6287759282334';
const WA_URL = `https://wa.me/${WA_NUMBER}?text=Hello%20PT%20Barokah%20Dunia%20Semesta%2C%20I%20am%20interested%20in%20your%20products.`;

export default function FloatingWA() {
  const [chatOpen, setChatOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const sendMessage = () => {
    const text = message.trim() || 'Hello PT Barokah Dunia Semesta, I am interested in your products.';
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
    setChatOpen(false);
    setMessage('');
  };

  return (
    <div className={styles.waWidget} aria-label="WhatsApp chat widget">
      {/* Chatbox */}
      <div className={`${styles.waChatbox} ${chatOpen ? styles.isActive : ''}`} role="dialog" aria-label="WhatsApp chat">
        <div className={styles.waChatboxHeader}>
          <div className={styles.waChatboxAvatar}>
            <img src="/assets/logo.webp" alt="PT Barokah Dunia Semesta" />
          </div>
          <div className={styles.waChatboxInfo}>
            <h4>PT Barokah Dunia Semesta</h4>
            <p>Typically replies within 24 hours</p>
          </div>
          <button
            className={styles.waChatboxClose}
            onClick={() => setChatOpen(false)}
            aria-label="Close chat"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className={styles.waChatboxBody}>
          <div className={styles.waChatboxBubble}>
            👋 Hi there! How can we help you today? Feel free to ask about our rattan furniture or botanical products.
          </div>
        </div>

        <div className={styles.waChatboxFooter}>
          <input
            className={styles.waChatboxInput}
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            aria-label="Chat message"
          />
          <button className={styles.waChatboxSend} onClick={sendMessage} aria-label="Send message">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Back to top */}
      <button
        className={`${styles.backToTopBtn} ${showTop ? styles.isVisible : ''}`}
        onClick={scrollTop}
        aria-label="Back to top"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>

      {/* Float button */}
      <button
        className={styles.waFloatBtn}
        onClick={() => setChatOpen((prev) => !prev)}
        aria-label="Open WhatsApp chat"
        id="wa-float-btn"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.113.553 4.094 1.521 5.812L.057 23.41a.75.75 0 00.917.918l5.662-1.473A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.889 0-3.667-.5-5.207-1.377l-.373-.214-3.865 1.006 1.024-3.752-.232-.388A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
        </svg>
      </button>
    </div>
  );
}
