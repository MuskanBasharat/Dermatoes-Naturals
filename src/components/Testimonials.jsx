import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.css'

function Testimonials() {
  const swiperRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: 'Sana ',
      gender: 'female',
      rating: 5,
      comment: 'The face wash is so gentle yet effective. My skin has never felt better!',
      avatar: 'https://raw.githubusercontent.com/MuskanBasharat/DermatoesNaturals/refs/heads/main/images/girl.png',
    },
    {
      id: 2,
      name: 'Ali',
      gender: 'male',
      rating: 4,
      comment: 'The hair oil reduced my hair fall significantly within just 2 weeks of use.',
      avatar: 'https://raw.githubusercontent.com/MuskanBasharat/DermatoesNaturals/refs/heads/main/images/boy.png',
    },
    {
      id: 3,
      name: 'Ayesha',
      gender: 'female',
      rating: 5,
      comment: 'Love the natural ingredients. No side effects and visible results!',
      avatar: 'https://raw.githubusercontent.com/MuskanBasharat/DermatoesNaturals/refs/heads/main/images/girl.png',
    },
    {
      id: 4,
      name: 'Hassan',
      gender: 'male',
      rating: 5,
      comment: 'Best skincare products I have ever used. Worth every penny!',
      avatar: 'https://raw.githubusercontent.com/MuskanBasharat/DermatoesNaturals/refs/heads/main/images/boy.png',
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonials-container"
          onTouchStart={() => swiperRef.current?.autoplay.stop()}
          onTouchEnd={() => swiperRef.current?.autoplay.start()}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonial-card">
                <div className="testimonial-image">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                </div>
                <div className="testimonial-content">
                  <div className="testimonial-rating">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`fas fa-star ${i < testimonial.rating ? 'filled' : ''}`}
                      ></i>
                    ))}
                  </div>
                  <p className="testimonial-comment">"{testimonial.comment}"</p>
                  <h4 className="testimonial-name">- {testimonial.name}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
