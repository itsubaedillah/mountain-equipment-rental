import React, { useState, useEffect, useRef } from "react";
import "./HeroSection.css";

export default function HeroSection() {
  const images = [
    "/src/assets/mountain.jpg",
    "/src/assets/mountain2.jpg",
    "/src/assets/mountain3.jpg",
  ];

  // duplikasi gambar pertama di akhir agar looping mulus
  const extendedImages = [...images, images[0]];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
      setIsTransitioning(true);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // reset posisi ke awal setelah mencapai slide duplikat terakhir
  useEffect(() => {
    if (currentIndex === extendedImages.length - 1) {
      const timer = setTimeout(() => {
        setIsTransitioning(false); // hilangkan transisi sesaat
        setCurrentIndex(0); // kembali ke slide 0
      }, 1000); // tunggu hingga animasi selesai
      return () => clearTimeout(timer);
    }
  }, [currentIndex, extendedImages.length]);

  return (
    <section className="hero">
      <div
        ref={sliderRef}
        className="hero-slider"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? "transform 1s ease-in-out" : "none",
        }}
      >
        {extendedImages.map((src, i) => (
          <div
            key={i}
            className="slide"
            style={{ backgroundImage: `url(${src})` }}
          ></div>
        ))}
      </div>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>Sewa Peralatan Gunung!</h1>
        <p>Semua perlengkapan outdoor untuk pendakian dan camping ada di sini.</p>
      </div>
    </section>
  );
}
