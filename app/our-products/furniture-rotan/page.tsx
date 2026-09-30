'use client';

import React, { useState } from 'react';
import styles from '../products.module.css';
import ProductModal from '@/app/components/ProductModal';
import { PRODUCTS, WA_NUMBER } from '@/app/lib/data';
import Reveal from '@/app/components/Reveal';

const WAIcon = () => (
  <svg className={styles.iconWa} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.113.553 4.094 1.521 5.812L.057 23.41a.75.75 0 00.917.918l5.662-1.473A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.889 0-3.667-.5-5.207-1.377l-.373-.214-3.865 1.006 1.024-3.752-.232-.388A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
  </svg>
);

export default function FurnitureRotanPage() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const products = ['rocking-horse', 'rocking-chair', 'room-divider'];

  const renderProductCard = (productId: string, index: number) => {
    const product = PRODUCTS[productId as keyof typeof PRODUCTS];
    return (
      <Reveal key={productId} delay={index * 100}>
      <article className={styles.productCard}>
        <div className={styles.productCardImgWrap}>
          <span className={styles.productCardBadge}>{product.badge}</span>
          <img
            src={product.image}
            alt={product.name}
            className={styles.productCardImg}
            style={productId === 'rocking-chair' ? { objectPosition: 'center top' } : undefined}
          />
        </div>
        <div className={styles.productCardBody}>
          <p className={styles.productCardCategory}>{product.category}</p>
          <button
            className={`${styles.productCardName} ${styles.productCardNameButton}`}
            type="button"
            title="Click for full specifications"
            onClick={() => setSelectedProduct(productId)}
          >
            {product.name} <span className={styles.productCardNameHint}>↗ Details</span>
          </button>
          <p className={styles.productCardDesc}>{product.shortDesc}</p>
          <div className={styles.productCardFooter}>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${product.waText}`}
              className={styles.btnPrimary}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WAIcon /> Enquire on WhatsApp
            </a>
          </div>
        </div>
      </article>
      </Reveal>
    );
  };

  return (
    <main className={styles.pageMain}>
      <section className={styles.pageHero} aria-label="Products hero">
        <Reveal className={`container ${styles.pageHeroInner}`}>
          <span className={styles.pageHeroEyebrow}>Rattan Furniture</span>
          <h1 className={styles.pageHeroTitle}>
            Handwoven Rattan<br />Collection
          </h1>
        </Reveal>
      </section>

      <section className={styles.productsSection} aria-labelledby="products-title">
        <div className="container">
          <Reveal className={styles.categoryHeader}>
            <p className={`label ${styles.categoryHeaderEyebrow}`}>Rattan Furniture</p>
            <h2 className={styles.categoryHeaderTitle} id="products-title">Premium Rattan Furniture</h2>
            <p className={styles.categoryHeaderBody}>
              Experience the perfect harmony of nature and artistry. Handwoven from premium Indonesian rattan, our furniture collection brings organic warmth and timeless elegance to any living space. Each piece is a masterpiece of durability and sustainable design.
            </p>
          </Reveal>

          <div className={styles.productGrid}>
            {products.map((productId, index) => renderProductCard(productId, index))}
          </div>
        </div>
      </section>

      <section className={styles.orderCta} aria-label="Order call to action">
        <Reveal className="container">
          <h2 className={styles.orderCtaTitle}>Ready to Place an Order?</h2>
          <p className={styles.orderCtaBody}>
            Contact us directly on WhatsApp for bulk pricing, custom specifications, shipping arrangements, and export documentation.
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

      {selectedProduct && (
        <ProductModal
          product={PRODUCTS[selectedProduct as keyof typeof PRODUCTS]}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </main>
  );
}
