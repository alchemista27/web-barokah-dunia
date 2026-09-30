import React from 'react';
import Link from 'next/link';
import Reveal from '../components/Reveal';
import styles from './products.module.css';
import { WA_NUMBER } from '@/app/lib/data';

const WAIcon = () => (
  <svg className={styles.iconWa} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.113.553 4.094 1.521 5.812L.057 23.41a.75.75 0 00.917.918l5.662-1.473A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.889 0-3.667-.5-5.207-1.377l-.373-.214-3.865 1.006 1.024-3.752-.232-.388A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
  </svg>
);

export default function ProductsPage() {
  return (
    <main className={styles.pageMain}>
      {/* PAGE HERO */}
      <section className={styles.pageHero} aria-label="Products hero">
        <Reveal className={`container ${styles.pageHeroInner}`}>
          <span className={styles.pageHeroEyebrow}>Product Catalogue 2026</span>
          <h1 className={styles.pageHeroTitle}>
            Nature, <em>Crafted</em><br />for the World
          </h1>
        </Reveal>
      </section>

      {/* CATEGORY HUB */}
      <section className={styles.productsSection} aria-label="Product Categories">
        <div className="container">
          <Reveal className={styles.hubHeader}>
            <p className={`label ${styles.sectionEyebrow}`}>Our Collections</p>
            <h2 className={styles.hubTitle}>Explore Our Categories</h2>
            <div className={styles.dividerCenter}></div>
            <p className={styles.hubSub}>
              Discover our diverse range of premium Indonesian products, carefully categorized to meet your specific needs.
            </p>
          </Reveal>

          <div className={styles.hubGrid}>
            <Reveal delay={100}>
              <Link href="/our-products/furniture-rotan" className={styles.hubCard}>
                <div className={styles.hubCardImgWrap}>
                  <img src="/assets/photo-furniture02.webp" alt="Rattan Furniture" className={styles.hubCardImg} />
                  <div className={styles.hubCardOverlay}></div>
                </div>
                <div className={styles.hubCardBody}>
                  <h3 className={styles.hubCardTitle}>Rattan Furniture</h3>
                  <p className={styles.hubCardDesc}>Handwoven chairs, dividers, and eco-friendly nursery décor.</p>
                  <span className={styles.hubCardLink}>Explore Collection →</span>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={200}>
              <Link href="/our-products/daun-daunan" className={styles.hubCard}>
                <div className={styles.hubCardImgWrap}>
                  <img src="/assets/photo-banana-leaf.webp" alt="Botanical Leaves" className={styles.hubCardImg} />
                  <div className={styles.hubCardOverlay}></div>
                </div>
                <div className={styles.hubCardBody}>
                  <h3 className={styles.hubCardTitle}>Botanical Leaves</h3>
                  <p className={styles.hubCardDesc}>Premium sun-dried catappa and culinary grade banana leaves.</p>
                  <span className={styles.hubCardLink}>Explore Collection →</span>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={300}>
              <Link href="/our-products/rempah" className={styles.hubCard}>
                <div className={styles.hubCardImgWrap}>
                  <img src="/assets/cloves2.webp" alt="Spices" className={styles.hubCardImg} />
                  <div className={styles.hubCardOverlay}></div>
                </div>
                <div className={styles.hubCardBody}>
                  <h3 className={styles.hubCardTitle}>Premium Spices</h3>
                  <p className={styles.hubCardDesc}>High-quality Indonesian cardamom, cloves, and ginger.</p>
                  <span className={styles.hubCardLink}>Explore Collection →</span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ORDER CTA */}
      <section className={styles.orderCta} aria-label="Order call to action">
        <Reveal className="container">
          <h2 className={styles.orderCtaTitle}>Ready to Place an Order?</h2>
          <p className={styles.orderCtaBody}>
            Contact us directly on WhatsApp for bulk pricing, custom specifications, shipping arrangements, and export documentation. Our team responds within 24 hours.
          </p>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hello%20PT%20Barokah%20Dunia%20Semesta%2C%20I%20would%20like%20to%20place%20an%20order.`}
            className={styles.btnPrimaryLg}
            id="order-cta-wa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WAIcon /> WhatsApp Us Now
          </a>
        </Reveal>
      </section>
    </main>
  );
}
