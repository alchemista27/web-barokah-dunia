'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './HomeGalleryLightbox.module.css';

const galleryItems = [
  { src: '/assets/cloves2.webp', alt: 'Dried cloves high eugenol', title: 'Cloves (Cengkeh)' },
  { src: '/assets/kapulaga-copy.webp', alt: 'Premium Indonesian Cardamom', title: 'Cardamom (Kapulaga)' },
  { src: '/assets/red-ginger-copy.webp', alt: 'Robust red ginger', title: 'Red Ginger' },
  { src: '/assets/ginger-powder.webp', alt: 'Finely ground ginger powder', title: 'Ginger Powder' },
  { src: '/assets/dried-ginger.webp', alt: 'Sun-dried ginger root', title: 'Dried Ginger' },
  { src: '/assets/white-ginger.webp', alt: 'Premium white ginger', title: 'White Ginger' },
  { src: '/assets/photo-product-rotan01.webp', alt: 'Handcrafted rattan furniture detail', title: 'Rattan Craft' },
  { src: '/assets/photo-furniture02.webp', alt: 'Ergonomic rattan rocking chair', title: 'Rocking Chair' },
  { src: '/assets/hand-woven-room-devider.webp', alt: 'Hand woven rattan room divider', title: 'Room Divider' },
  { src: '/assets/rattan-horse-rocking.webp', alt: 'Rattan Rocking Horse', title: 'Kids Rocking Horse' },
  { src: '/assets/photo-product-rotan02.webp', alt: 'Natural rattan furniture product', title: 'Natural Rattan' },
  { src: '/assets/photo-furniture.webp', alt: 'Classic rattan piece', title: 'Classic Rattan' },
  { src: '/assets/photo-catapang-leaf.webp', alt: 'Dried catappa leaves', title: 'Catappa Leaves' },
  { src: '/assets/photo-catapang-leaf03.webp', alt: 'Indian Almond leaves bunch', title: 'Premium Almond Leaves' },
  { src: '/assets/photo-banana-leaf.webp', alt: 'Fresh banana leaves', title: 'Banana Leaves' },
  { src: '/assets/photo-banana-leaf04.webp', alt: 'Culinary grade banana leaves', title: 'Culinary Banana Leaves' },
];

export default function HomeGalleryLightbox() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  
  const isOpen = activeIndex !== null;
  const itemsPerPage = 8;
  const totalPages = Math.ceil(galleryItems.length / itemsPerPage);
  const visibleItems = galleryItems.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

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
        {visibleItems.map((item, index) => {
          const absoluteIndex = currentPage * itemsPerPage + index;
          return (
            <button
              className={styles.galleryItem}
              key={item.src}
              type="button"
              onClick={() => setActiveIndex(absoluteIndex)}
              aria-label={`Open ${item.title} image`}
            >
              <img src={item.src} alt={item.alt} />
            </button>
          );
        })}
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button 
            className={styles.pageBtn} 
            onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
            disabled={currentPage === 0}
            aria-label="Previous page"
          >
            &larr; Prev
          </button>
          
          <div className={styles.pageNumbers}>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                type="button"
                className={`${styles.pageDot} ${currentPage === i ? styles.pageDotActive : ''}`}
                onClick={() => setCurrentPage(i)}
                aria-label={`Go to page ${i + 1}`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button 
            className={styles.pageBtn} 
            onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
            disabled={currentPage === totalPages - 1}
            aria-label="Next page"
          >
            Next &rarr;
          </button>
        </div>
      )}

      {activeItem && typeof document !== 'undefined' && createPortal(
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
        </div>,
        document.body
      )}
    </>
  );
}
