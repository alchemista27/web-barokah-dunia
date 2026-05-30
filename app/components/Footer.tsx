import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src="/assets/logo.webp" alt="PT Barokah Dunia Semesta" />
            </div>
            <p className="footer__tagline">Bringing Nature&apos;s Finest Art into Your Home</p>
            <p className="footer__desc">
              Exporting premium handcrafted rattan furniture and botanical products from Pekanbaru, Indonesia to the
              global market.
            </p>
          </div>

          <div className="footer__nav">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__links" role="list">
              <li><Link href="/" className="footer__link">Home</Link></li>
              <li><Link href="/about-us" className="footer__link">About Us</Link></li>
              <li><Link href="/our-products" className="footer__link">Our Products</Link></li>
              <li><Link href="/contact-us" className="footer__link">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer__contact">
            <h4 className="footer__heading">Contact</h4>
            <div className="footer__contact-item">
              <svg className="footer__contact-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
              <span>Jl. Bandara SSK II, Perhentian Marpoyan, Kec. Marpoyan Damai, Kota Pekanbaru, Riau 28288</span>
            </div>
            <div className="footer__contact-item">
              <svg className="footer__contact-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <a href="mailto:info@barokahdunia.com">info@barokahdunia.com</a>
            </div>
            <div className="footer__contact-item">
              <svg className="footer__contact-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <a href="tel:+6281353281615">+62 813-5328-1615</a>
            </div>
            <div className="footer__contact-item">
              <svg className="footer__contact-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.113.553 4.094 1.521 5.812L.057 23.41a.75.75 0 00.917.918l5.662-1.473A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.889 0-3.667-.5-5.207-1.377l-.373-.214-3.865 1.006 1.024-3.752-.232-.388A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
              </svg>
              <a href="https://wa.me/6287759282334" target="_blank" rel="noopener noreferrer">+62 877-5928-2334</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © 2026 PT Barokah Dunia Semesta. All rights reserved. &bull; Designed by <a href="https://jauhariandev.vercel.app" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>JauharianDev</a>
          </p>
          <div className="footer__bottom-links">
            <Link href="/" className="footer__bottom-link">Home</Link>
            <Link href="/our-products" className="footer__bottom-link">Products</Link>
            <Link href="/about-us" className="footer__bottom-link">About</Link>
            <Link href="/contact-us" className="footer__bottom-link">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
