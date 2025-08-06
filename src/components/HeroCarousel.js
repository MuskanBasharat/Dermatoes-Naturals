import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import images from '../images/images';
import './HeroCarousel.css'
function HeroCarousel() {
  const carouselImages = [
    images.carousel1,
    images.carousel2,
    images.carousel3,
    images.carousel4,
    images.carousel5,
    images.carousel6,
    images.carousel7,
  ];

  return (
    <section className="hero-carousel" id='home'>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={1700} // <-- Smooth slide speed (in ms)
        autoplay={{
          delay: 2000, // Wait before auto-slide
          disableOnInteraction: false,
        }}
        className="carousel-container"
      >
        {carouselImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="carousel-slide">
              <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeroCarousel;
