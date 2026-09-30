'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
          <li
            className="nav-item-dropdown"
            onMouseEnter={() => {
              if (window.innerWidth > 768) setDropdownOpen(true);
            }}
            onMouseLeave={() => {
              if (window.innerWidth > 768) setDropdownOpen(false);
            }}
          >
            <button
              className={`nav-link nav-link-btn${pathname.startsWith('/our-products') ? ' active' : ''}`}
              id="nav-products"
              onClick={() => {
                if (window.innerWidth <= 768) {
                  setDropdownOpen(!dropdownOpen);
                }
              }}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              Products
              <svg className={`dropdown-icon ${dropdownOpen ? 'open' : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div className={`nav-dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
              <Link href="/our-products/furniture-rotan" className={`dropdown-item ${pathname === '/our-products/furniture-rotan' ? 'active' : ''}`} onClick={() => { setMenuOpen(false); setDropdownOpen(false); }}>
                Rattan Furniture
              </Link>
              <Link href="/our-products/daun-daunan" className={`dropdown-item ${pathname === '/our-products/daun-daunan' ? 'active' : ''}`} onClick={() => { setMenuOpen(false); setDropdownOpen(false); }}>
                Botanical Leaves
              </Link>
              <Link href="/our-products/rempah" className={`dropdown-item ${pathname === '/our-products/rempah' ? 'active' : ''}`} onClick={() => { setMenuOpen(false); setDropdownOpen(false); }}>
                Spices
              </Link>
            </div>
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
