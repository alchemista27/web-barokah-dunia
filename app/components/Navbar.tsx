'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <nav
      className={`navbar${scrolled ? ' scrolled' : ''}`}
      id="navbar"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar__inner">
        <Link href="/" className="navbar__logo" id="nav-logo">
          <img src="/assets/logo.webp" alt="PT Barokah Dunia Semesta logo" />
        </Link>

        <ul
          className={`navbar__links${menuOpen ? ' open' : ''}`}
          id="nav-links"
          role="list"
        >
          <li>
            <Link href="/" className={`nav-link${isActive('/') ? ' active' : ''}`} id="nav-home">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about-us" className={`nav-link${isActive('/about-us') ? ' active' : ''}`} id="nav-about">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/our-products" className={`nav-link${isActive('/our-products') ? ' active' : ''}`} id="nav-products">
              Our Products
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className={`nav-link${isActive('/contact-us') ? ' active' : ''}`} id="nav-contact">
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="navbar__actions">
          <a
            href="https://wa.me/6287759282334?text=Hello%2C%20I%20would%20like%20to%20get%20a%20quotation."
            className="btn btn-primary nav-quote-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Quotation
          </a>
          <button
            className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
            id="hamburger"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
