'use client';

import React, { useEffect } from 'react';
import styles from './ProductModal.module.css';
import { WA_NUMBER } from '@/app/lib/data';

const WAIcon = () => (
  <svg className={styles.iconWa} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.113.553 4.094 1.521 5.812L.057 23.41a.75.75 0 00.917.918l5.662-1.473A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.889 0-3.667-.5-5.207-1.377l-.373-.214-3.865 1.006 1.024-3.752-.232-.388A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
  </svg>
);

interface Product {
  id: string;
  name: string;
  category: string;
  badge: string;
  image: string;
  shortDesc?: string;
  desc: string;
  specs: Array<{ key: string; val: string }>;
  waText: string;
}

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className={styles.modalOverlay} onClick={onClose} role="dialog" aria-modal="true" aria-label="Product details">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className={styles.modalImgWrap}>
          <img src={product.image} alt={product.name} className={styles.modalImg} />
          <span className={styles.modalBadge}>{product.badge}</span>
        </div>

        <div className={styles.modalBody}>
          <p className={styles.modalCategory}>{product.category}</p>
          <h2 className={styles.modalTitle}>{product.name}</h2>
          <div className={styles.modalDivider}></div>
          <p className={styles.modalDesc}>{product.desc}</p>

          <p className={styles.modalSpecsLabel}>Full Specifications</p>
          <div className={styles.modalSpecs}>
            {product.specs.map((spec, i) => (
              <div key={i} className={styles.modalSpecRow}>
                <span className={styles.modalSpecKey}>{spec.key}</span>
                <span className={styles.modalSpecVal}>{spec.val}</span>
              </div>
            ))}
          </div>

          <div className={styles.modalFooter}>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${product.waText}`}
              className={styles.btnPrimary}
              target="_blank"
              rel="noopener noreferrer"
              id="modal-wa-btn"
            >
              <WAIcon /> Enquire on WhatsApp
            </a>
            <button className={styles.btnOutline} onClick={onClose} id="modal-close-footer">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
