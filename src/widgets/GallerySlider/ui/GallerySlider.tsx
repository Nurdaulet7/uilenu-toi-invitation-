import { useMemo } from 'react';

import { A11y, Keyboard, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { invitation } from '@shared/config/invitation';

import styles from './GallerySlider.module.scss';

type GallerySliderProps = {
  id?: string;
};

export function GallerySlider({ id = 'gallery' }: GallerySliderProps) {
  const slides = invitation.gallery.images;
  const hasMany = slides.length > 1;

  const speed = useMemo(() => {
    if (typeof window === 'undefined') return 420;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 1 : 420;
  }, []);

  if (slides.length === 0) return null;

  return (
    <section className={styles.section} id={id} aria-label="Фотослайдер">
      <div className={styles.wrap}>
        <Swiper
          className={styles.swiper}
          speed={speed}
          slidesPerView={1}
          spaceBetween={0}
          loop={false}
          grabCursor={hasMany}
          keyboard={hasMany ? { enabled: true } : false}
          navigation={hasMany}
          pagination={
            hasMany
              ? {
                  clickable: true,
                }
              : false
          }
          modules={hasMany ? [Navigation, Pagination, Keyboard, A11y] : [Keyboard, A11y]}
          a11y={{
            prevSlideMessage: 'Алдыңғы сурет',
            nextSlideMessage: 'Келесі сурет',
            paginationBulletMessage: 'Слайд {{index}}',
          }}
        >
          {slides.map((item, slideIndex) => (
            <SwiperSlide key={`${item.src}-${slideIndex}`} className={styles.slideRoot}>
              <figure className={styles.slide}>
                <img src={item.src} alt="" loading={slideIndex === 0 ? 'eager' : 'lazy'} decoding="async" />
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
