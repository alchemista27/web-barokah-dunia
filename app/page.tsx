import Link from "next/link";
import HomeGalleryLightbox from "./components/HomeGalleryLightbox";
import styles from "./page.module.css";

const WAIcon = () => (
  <svg className={styles.iconWa} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.113.553 4.094 1.521 5.812L.057 23.41a.75.75 0 00.917.918l5.662-1.473A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.889 0-3.667-.5-5.207-1.377l-.373-.214-3.865 1.006 1.024-3.752-.232-.388A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
  </svg>
);

export default function Home() {
  return (
    <main className={styles.pageMain}>

      {/* HERO */}
      <section className={styles.hero} aria-label="Hero section">
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>Est. Indonesia · Global Export</span>
            <h1 className={styles.heroHeadline}>
              Bringing <em>Nature&apos;s</em><br />Finest Art<br />into Your Home
            </h1>
            <p className={styles.heroSub}>
              We transform Indonesia&apos;s rich natural heritage into timeless home décor — handwoven rattan furniture and
              premium botanical products, crafted for the world.
            </p>
            <div className={styles.heroCta}>
              <a
                href="https://wa.me/6287759282334?text=Hello%20PT%20Barokah%20Dunia%20Semesta%2C%20I%20am%20interested%20in%20your%20products."
                className="btn btn-primary btn-lg"
                id="hero-cta-wa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
              >
                <WAIcon />
                Chat with Us
              </a>
              <Link href="/our-products" className="btn btn-outline-light" id="hero-cta-products">
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className={styles.stats} aria-label="Company statistics">
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Sustainable Materials</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>5+</div>
              <div className={styles.statLabel}>Product Categories</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>Global</div>
              <div className={styles.statLabel}>Export Standards</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>✦</div>
              <div className={styles.statLabel}>Handcrafted by Artisans</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES / WHY CHOOSE US */}
      <section className={styles.features} aria-labelledby="features-title">
        <div className="container">
          <div className={styles.featuresHeader}>
            <p className={`label ${styles.sectionEyebrow}`}>Why Choose Us</p>
            <h2 id="features-title">Crafted with Purpose,<br />Delivered with Excellence</h2>
            <div className={`${styles.divider} ${styles.dividerCenter}`}></div>
            <p className={styles.textSecondary} style={{ maxWidth: "52ch", marginInline: "auto", marginTop: "var(--sp-md)" }}>
              Every product we make carries the soul of Indonesian craftsmanship and the promise of global quality standards.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <svg className={styles.featureCardIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C8.1 3 5 6.1 5 10c0 5.25 7 11 7 11s7-5.75 7-11c0-3.9-3.1-7-7-7z" />
                <circle cx="12" cy="10" r="2.5" strokeLinecap="round" />
              </svg>
              <h3 className={styles.featureCardTitle}>100% Sustainable Materials</h3>
              <p className={styles.featureCardBody}>
                We prioritize the planet by using renewable organic fibers — rattan, banana leaf, and sea almond — that leave a minimal environmental footprint.
              </p>
            </div>
            <div className={styles.featureCard}>
              <svg className={styles.featureCardIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className={styles.featureCardTitle}>Authentic Craftsmanship</h3>
              <p className={styles.featureCardBody}>
                Every piece is handwoven with precision by skilled local artisans, ensuring that no two items are exactly alike — each carries a unique story.
              </p>
            </div>
            <div className={styles.featureCard}>
              <svg className={styles.featureCardIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
              <h3 className={styles.featureCardTitle}>Global Quality Standards</h3>
              <p className={styles.featureCardBody}>
                While our roots are local, our quality is international. All products are durable, beautiful, and certified ready for the global market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT TEASER */}
      <section className={styles.productTeaser} aria-labelledby="teaser-title">
        <div className="container">
          <div className={styles.productTeaserHeader}>
            <div>
              <p className={`label ${styles.sectionEyebrow}`}>Our Products</p>
              <h2 id="teaser-title">From Forest to Your Home</h2>
            </div>
            <Link href="/our-products" className="btn btn-outline" id="teaser-see-all">
              See All Products →
            </Link>
          </div>

          <div className={styles.productTeaserGrid}>
            <article className={styles.productThumb}>
              <div className={styles.productThumbImgWrap}>
                <span className={styles.productThumbTag}>Rattan</span>
                <img src="/assets/photo-product-rotan01.webp" alt="Rattan Furniture" className={styles.productThumbImg} />
              </div>
              <div className={styles.productThumbBody}>
                <p className={styles.productThumbCategory}>Rattan Furniture</p>
                <h3 className={styles.productThumbName}>Ergonomic Rocking Chair</h3>
                <p className={styles.productThumbDesc}>High-grade rattan poles with contoured backrest for lumbar support. EU certified.</p>
              </div>
            </article>
            <article className={styles.productThumb}>
              <div className={styles.productThumbImgWrap}>
                <span className={styles.productThumbTag}>Botanical</span>
                <img src="/assets/photo-catapang-leaf.webp" alt="Dried Catappa Leaves" className={styles.productThumbImg} />
              </div>
              <div className={styles.productThumbBody}>
                <p className={styles.productThumbCategory}>Botanical Products</p>
                <h3 className={styles.productThumbName}>Dried Catappa Leaves</h3>
                <p className={styles.productThumbDesc}>Premium Grade A Indian Almond Leaves — natural tannins for aquatic health.</p>
              </div>
            </article>
            <article className={styles.productThumb}>
              <div className={styles.productThumbImgWrap}>
                <span className={styles.productThumbTag}>Botanical</span>
                <img src="/assets/photo-banana-leaf.webp" alt="Fresh Banana Leaves" className={styles.productThumbImg} />
              </div>
              <div className={styles.productThumbBody}>
                <p className={styles.productThumbCategory}>Botanical Products</p>
                <h3 className={styles.productThumbName}>Fresh Banana Leaves</h3>
                <p className={styles.productThumbDesc}>Culinary Grade — vibrant, organic, pesticide-free. Air freight ready.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className={styles.gallery} aria-labelledby="gallery-title">
        <div className="container">
          <div className={styles.galleryHeader}>
            <p className={`label ${styles.sectionEyebrow}`}>Our Gallery</p>
            <h2 id="gallery-title">A Glimpse of Our Craft</h2>
            <div className={`${styles.divider} ${styles.dividerCenter}`}></div>
          </div>
          <HomeGalleryLightbox />
        </div>
      </section>

      {/* CERTIFICATION & COMPLIANCE */}
      <section className={styles.gallery} aria-labelledby="certification-title">
        <div className="container">
          <div className={styles.galleryHeader}>
            <p className={`label ${styles.sectionEyebrow}`}>Quality &amp; Trust</p>
            <h2 id="certification-title">Certification &amp; Compliance</h2>
            <div className={`${styles.divider} ${styles.dividerCenter}`}></div>
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <img
              src="/assets/certification-compliance.webp"
              alt="Certification & Compliance"
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className={styles.ctaBanner} aria-label="Call to action">
        <div className={`container ${styles.ctaBannerInner}`}>
          <span className={styles.ctaBannerEyebrow}>Ready to Order?</span>
          <h2 className={styles.ctaBannerTitle}>Let&apos;s Bring Nature&apos;s Art to Your World</h2>
          <p className={styles.ctaBannerSub}>
            Contact our team on WhatsApp for custom orders, bulk pricing, and export enquiries. We respond within 24 hours.
          </p>
          <a
            href="https://wa.me/6287759282334?text=Hello%20PT%20Barokah%20Dunia%20Semesta%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
            className="btn btn-primary btn-lg"
            id="cta-banner-wa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WAIcon />
            WhatsApp Us Now
          </a>
        </div>
      </section>

    </main>
  );
}
