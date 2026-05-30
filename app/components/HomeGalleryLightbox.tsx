'use client';

import { useEffect, useState } from 'react';
import styles from './HomeGalleryLightbox.module.css';

const galleryItems = [
  {
    src: '/assets/photo-product-rotan01.webp',
    alt: 'Handcrafted rattan furniture detail',
    title: 'Rattan Craft',
  },
  {
    src: '/assets/photo-furniture02.webp',
    alt: 'Ergonomic rattan rocking chair',
    title: 'Rocking Chair',
  },
  {
    src: '/assets/photo-catapang-leaf.webp',
    alt: 'Dried catappa leaves',
    title: 'Catappa Leaves',
  },
  {
    src: '/assets/photo-banana-leaf.webp',
    alt: 'Fresh banana leaves',
    title: 'Banana Leaves',
  },
  {
    src: '/assets/photo-product-rotan02.webp',
    alt: 'Natural rattan furniture product',
    title: 'Natural Rattan',
  },
  {
    src: '/assets/hand-woven-room-devider.webp',
    alt: 'Hand woven rattan room divider',
    title: 'Room Divider',
  },
];

export default function HomeGalleryLightbox() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isOpen = activeIndex !== null;

  const closeLightbox = () => setActiveIndex(null);

  const showPrevious = () => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current - 1 + galleryItems.length) % galleryItems.length;
    });
  };

  const showNext = () => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current + 1) % galleryItems.length;
    });
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowLeft') showPrevious();
      if (event.key === 'ArrowRight') showNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const activeItem = activeIndex === null ? null : galleryItems[activeIndex];
  const activeDisplayIndex = activeIndex === null ? 0 : activeIndex + 1;

  return (
    <>
      <div className={styles.galleryGrid}>
        {galleryItems.map((item, index) => (
          <button
            className={styles.galleryItem}
            key={item.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Open ${item.title} image`}
          >
            <img src={item.src} alt={item.alt} />
          </button>
        ))}
      </div>

      {activeItem && (
        <div 
          className={`${styles.lightboxOverlay} ${isOpen ? styles.isOpen : ''}`} 
          role="dialog" 
          aria-modal="true" 
          aria-label="Gallery image viewer" 
          onClick={closeLightbox}
        >
          <div className={styles.lightboxContainer} onClick={(event) => event.stopPropagation()}>
            <button className={`${styles.lightboxNav} ${styles.lightboxPrev}`} type="button" onClick={showPrevious} aria-label="Previous image">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{width: 24, height: 24}}>
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <figure className={styles.lightboxFigure}>
              <img src={activeItem.src} className={styles.lightboxImg} alt={activeItem.alt} />
              <figcaption className={styles.lightboxCaption}>
                <span>{activeItem.title}</span>
                <span>{activeDisplayIndex} / {galleryItems.length}</span>
              </figcaption>
            </figure>

            <button className={`${styles.lightboxNav} ${styles.lightboxNext}`} type="button" onClick={showNext} aria-label="Next image">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{width: 24, height: 24}}>
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            <button className={styles.lightboxCloseBtn} type="button" onClick={closeLightbox} aria-label="Close gallery">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{width: 24, height: 24}}>
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
