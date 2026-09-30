'use client';

import React from 'react';
import styles from './contact.module.css';
import { WA_NUMBER } from '@/app/lib/data';
import Reveal from '../components/Reveal';

const WAIcon = () => (
  <svg className={styles.iconWa} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.113.553 4.094 1.521 5.812L.057 23.41a.75.75 0 00.917.918l5.662-1.473A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.889 0-3.667-.5-5.207-1.377l-.373-.214-3.865 1.006 1.024-3.752-.232-.388A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
  </svg>
);

export default function ContactPage() {
  return (
    <main className={styles.pageMain}>
      {/* PAGE HERO */}
      <section className={styles.pageHero} aria-label="Contact hero">
        <Reveal className={`container ${styles.pageHeroInner}`}>
          <span className={styles.pageHeroEyebrow}>Get in Touch</span>
          <h1 className={styles.pageHeroTitle}>
            Let's Start a<br /><em>Conversation</em>
          </h1>
        </Reveal>
      </section>

      {/* CONTACT SECTION */}
      <section className={styles.contactSection} aria-labelledby="contact-title">
        <div className="container">
          <div className={styles.contactSectionGrid}>
            {/* LEFT: Info Column */}
            <Reveal className={styles.contactInfo}>
              <p className={`label ${styles.contactInfoEyebrow}`}>Contact Information</p>
              <h2 id="contact-title" className={styles.contactInfoTitle}>We'd Love to<br />Hear From You</h2>
              <div className={styles.divider}></div>
              <p className={styles.contactInfoLead}>
                Whether you're looking for bulk orders, custom product specifications, export documentation, or simply want to know more about what we do — reach out. Our team responds within 24 hours.
              </p>

              {/* Contact Cards */}
              <div className={styles.contactCards}>
                {[
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                      </svg>
                    ),
                    title: 'Office Address',
                    content: (
                      <>
                        Jl. Bandara SSK II, Perhentian Marpoyan,<br />
                        Kec. Marpoyan Damai, Kota Pekanbaru,<br />
                        Riau 28288, Indonesia
                      </>
                    )
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                    ),
                    title: 'Email',
                    content: 'info@barokahdunia.com',
                    isLink: true,
                    href: 'mailto:info@barokahdunia.com'
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                    ),
                    title: 'Phone',
                    content: '+62 813-5328-1615',
                    isLink: true,
                    href: 'tel:+6281353281615'
                  },
                  {
                    icon: <WAIcon />,
                    title: 'WhatsApp',
                    content: '+62 877-5928-2334',
                    isLink: true,
                    href: `https://wa.me/${WA_NUMBER}`
                  }
                ].map((card, i) => (
                  <div key={i} className={styles.contactCard}>
                    <div className={styles.contactCardIconWrap}>{card.icon}</div>
                    <div className={styles.contactCardBody}>
                      <p className={styles.contactCardLabel}>{card.title}</p>
                      {card.isLink ? (
                        <p className={styles.contactCardValue}>
                          <a href={card.href} target={card.href?.startsWith('https') ? '_blank' : undefined} rel={card.href?.startsWith('https') ? 'noopener noreferrer' : undefined}>
                            {card.content}
                          </a>
                        </p>
                      ) : (
                        <p className={styles.contactCardValue}>{card.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA inline */}
              <div className={styles.waCta}>
                <div className={styles.waCtaContent}>
                  <h3 className={styles.waCtaTitle}>Fastest Response via WhatsApp</h3>
                  <p className={styles.waCtaSub}>Chat directly with our export team for quotes, specs, and custom orders.</p>
                </div>
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=Hello%20PT%20Barokah%20Dunia%20Semesta%2C%20I%20would%20like%20to%20enquire%20about%20your%20products.`}
                  className={`${styles.btnPrimary} ${styles.waCtaBtn}`}
                  id="contact-wa-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WAIcon /> Open WhatsApp
                </a>
              </div>
            </Reveal>

            {/* RIGHT: Map Column */}
            <Reveal delay={200} className={styles.contactMap}>
              <div className={styles.mapWrap}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.5972607017!2d101.37975!3d0.47685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5b1e1cf1b0001%3A0x0!2sPerhentian%20Marpoyan%2C%20Kec.%20Marpoyan%20Damai%2C%20Kota%20Pekanbaru%2C%20Riau!5e0!3m2!1sen!2sid!4v1716300000000!5m2!1sen!2sid"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PT Barokah Dunia Semesta office location in Pekanbaru, Riau"
                ></iframe>
              </div>

              {/* Business Hours */}
              <div className={styles.card}>
                <p className={`label ${styles.cardLabel}`}>Business Hours</p>
                <table className={styles.hoursTable}>
                  <tbody>
                    <tr>
                      <td>Monday – Friday</td>
                      <td>08:00 – 17:00 WIB</td>
                    </tr>
                    <tr>
                      <td>Saturday</td>
                      <td>08:00 – 13:00 WIB</td>
                    </tr>
                    <tr>
                      <td>Sunday</td>
                      <td>Closed</td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.hoursNote}>
                  WhatsApp messages received outside office hours will be replied on the next business day.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHATSAPP BANNER */}
      <section className={styles.waBanner} aria-label="WhatsApp contact banner">
        <Reveal className="container">
          <div className={styles.waBannerInner}>
            <div className={styles.waBannerContent}>
              <p className={`label ${styles.waBannerEyebrow}`}>Preferred Contact Method</p>
              <h2 className={styles.waBannerTitle}>Chat with Our Team<br />on WhatsApp</h2>
              <p className={styles.waBannerSub}>
                Get instant answers on product availability, pricing, export documentation, and custom order options. We're here to help you bring Indonesia's natural artistry to your market.
              </p>
            </div>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=Hello%20PT%20Barokah%20Dunia%20Semesta%2C%20I%20have%20an%20enquiry.`}
              className={styles.btnPrimaryLg}
              id="wa-banner-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WAIcon /> +62 877-5928-2334
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
