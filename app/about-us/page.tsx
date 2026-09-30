'use client';

import React from 'react';
import Link from 'next/link';
import Reveal from '../components/Reveal';
import styles from './about.module.css';
import { WA_NUMBER } from '@/app/lib/data';

const WAIcon = () => (
  <svg className={styles.iconWa} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.113.553 4.094 1.521 5.812L.057 23.41a.75.75 0 00.917.918l5.662-1.473A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.889 0-3.667-.5-5.207-1.377l-.373-.214-3.865 1.006 1.024-3.752-.232-.388A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
  </svg>
);

export default function AboutPage() {
  return (
    <main className={styles.pageMain}>
      {/* PAGE HERO */}
      <section className={styles.pageHero} aria-label="About Us hero">
        <Reveal className={`container ${styles.pageHeroInner}`}>
          <span className={styles.pageHeroEyebrow}>Our Story</span>
          <h1 className={styles.pageHeroTitle}>
            Where Tradition<br />Meets <em>Global</em> Excellence
          </h1>
        </Reveal>
      </section>

      {/* OUR STORY */}
      <section className={styles.section} aria-labelledby="story-title">
        <div className="container">
          <div className={styles.storyGrid}>
            <Reveal className={styles.storyContent}>
              <p className={`label ${styles.sectionEyebrow}`}>About Us</p>
              <h2 className={`${styles.h2} ${styles.storyTitle}`} id="story-title">Rooted in Heritage,<br />Reaching the World</h2>
              <div className={styles.divider}></div>
              <p className={styles.storyBody}>
                PT Barokah Dunia Semesta was born from a deep respect for Indonesia's extraordinary natural wealth and the generations of artisans who have transformed it into art. We are based in Pekanbaru, Riau — a region blessed with premium rattan forests and fertile botanical landscapes.
              </p>
              <p className={styles.storyBody} style={{ marginTop: 'var(--sp-md)' }}>
                Our mission is to bridge the gap between Indonesia's rich natural heritage and the global home décor market. By partnering with local weaving communities, we preserve traditional techniques while ensuring every product meets international export standards.
              </p>
              <p className={styles.storyBody} style={{ marginTop: 'var(--sp-md)' }}>
                From handwoven rattan furniture to sun-dried catappa leaves and culinary banana leaves — every product we ship carries the story of our land, our people, and our commitment to a more sustainable world.
              </p>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20PT%20Barokah%20Dunia%20Semesta.`}
                className={styles.btnPrimary}
                id="story-cta"
                style={{ marginTop: 'var(--sp-lg)' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WAIcon /> Get in Touch
              </a>
            </Reveal>

            <Reveal direction="left" delay={200} style={{ position: 'relative' }}>
              <div className={styles.storyImageWrap}>
                <img src="/assets/hero-info-barokah02.webp" alt="Artisan Craftsmanship" className={styles.storyImage} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <blockquote className={styles.pullQuote} aria-label="Company philosophy quote">
        <div className="container">
          <span className={styles.pullQuoteMark} aria-hidden="true">"</span>
          <p className={styles.pullQuoteText}>
            We craft more than just furniture — we deliver stories of nature and craftsmanship to the global stage.
          </p>
          <footer className={styles.pullQuoteAuthor}>PT Barokah Dunia Semesta</footer>
        </div>
      </blockquote>

      {/* PILLARS */}
      <section className={styles.pillarsSection} aria-labelledby="pillars-title">
        <div className="container">
          <Reveal className={styles.pillarsHeader}>
            <p className={`label ${styles.sectionEyebrow}`}>Our Principles</p>
            <h2 className={styles.h2} id="pillars-title">Why Choose Us</h2>
            <div className={styles.dividerCenter}></div>
          </Reveal>

          <div className={styles.pillarsGrid}>
            {[
              {
                number: '01',
                title: '100% Sustainable Materials',
                body: 'We prioritize the planet by using renewable fibers — rattan, banana leaf, and sea almond — that leave a minimal environmental footprint. Our supply chain is traceable from forest to your door.'
              },
              {
                number: '02',
                title: 'Authentic Craftsmanship',
                body: 'Every piece is handwoven with precision by skilled Indonesian artisans, ensuring that no two items are exactly alike. We preserve century-old weaving traditions while creating products for the modern world.'
              },
              {
                number: '03',
                title: 'Global Quality Standards',
                body: 'While our roots are local, our quality is international. We ensure every product is durable, beautiful, and ready for the global market — backed by compliance with EU standards and phytosanitary certification.'
              }
            ].map((pillar, i) => (
              <Reveal delay={i * 150} key={i} className={styles.pillar}>
                <div className={styles.pillarNumber}>{pillar.number}</div>
                <h3 className={`${styles.h3} ${styles.pillarTitle}`}>{pillar.title}</h3>
                <p className={styles.pillarBody}>{pillar.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className={styles.section} aria-labelledby="vm-title">
        <div className="container">
          <div className={styles.textCenter} style={{ marginBottom: 'var(--sp-xl)' }}>
            <p className={`label ${styles.sectionEyebrow}`}>Our Direction</p>
            <h2 className={styles.h2} id="vm-title">Vision &amp; Mission</h2>
            <div className={styles.dividerCenter}></div>
          </div>

          <div className={styles.vmGrid}>
            <div className={styles.vmCard}>
              <p className={`label ${styles.vmCardEyebrow}`}>Vision</p>
              <h3 className={styles.vmCardTitle}>To Be Indonesia's Premier Natural Export Brand</h3>
              <p className={styles.vmCardBody}>
                We envision a world where Indonesia's natural artistry is celebrated in every home across the globe — a world where sustainability and beauty go hand in hand.
              </p>
            </div>
            <div className={styles.vmCard}>
              <p className={`label ${styles.vmCardEyebrow}`}>Mission</p>
              <h3 className={styles.vmCardTitle}>Crafting with Purpose. Exporting with Pride.</h3>
              <p className={styles.vmCardBody}>To fulfil our vision, we commit to:</p>
              <ul className={styles.vmCardList}>
                <li>Empowering local artisan communities</li>
                <li>Using only renewable, organic raw materials</li>
                <li>Maintaining international quality and safety certifications</li>
                <li>Building long-term partnerships with global buyers</li>
                <li>Continuously innovating our product designs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY DOCUMENTS */}
      <section className={styles.sectionSurface} aria-labelledby="documents-title">
        <div className="container">
          <div className={styles.textCenter} style={{ marginBottom: 'var(--sp-xl)' }}>
            <p className={`label ${styles.sectionEyebrow}`}>Downloads</p>
            <h2 className={styles.h2} id="documents-title">Company Documents & Catalogues</h2>
            <div className={styles.dividerCenter}></div>
          </div>

          <div className={styles.grid3}>
            {[
              {
                title: 'Company Profile',
                desc: 'Detailed overview of our company, history, and export capabilities.',
                href: '/documents/Company%20Profile%20Barokah%20Dunia%20Semesta.pdf'
              },
              {
                title: 'Agriculture Catalogue',
                desc: 'Complete catalog of our premium botanical and agricultural products.',
                href: '/documents/Catalogue%20Produk%20Agriculture.pdf'
              },
              {
                title: 'Rattan Catalogue',
                desc: 'Browse our handcrafted collection of premium rattan furniture.',
                href: '/documents/Catalogue%20Produk%20Rotan.pdf'
              }
            ].map((doc, i) => (
              <div key={i} className={styles.card} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 'var(--sp-md)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-tertiary)" strokeWidth="1.5" style={{ width: '48px', height: '48px' }}>
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 className={styles.h3}>{doc.title}</h3>
                <p className={styles.textSecondary} style={{ fontSize: '0.9rem', flexGrow: 1 }}>{doc.desc}</p>
                <a href={doc.href} download className={styles.btnOutline} style={{ width: '100%', justifyContent: 'center' }}>Download PDF</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
