import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/api/gallery")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch(() =>
        setImages([
          { img: "/img/carton.jpg" },
          { img: "/img/carton2.jpg" },
          { img: "/img/carton3.jpg" },
          { img: "/img/carton4.jpg" },
          { img: "/img/bg_1.jpeg" },
          { img: "/img/carton.jpg" },
          { img: "/img/carton2.jpg" },
          { img: "/img/bg_1.jpeg" },
        ])
      );
  }, []);

  useEffect(() => {
    const visibleCount = 4; 
    if (!images.length) return;
    if (images.length <= visibleCount) return;

    const timer = setInterval(() => {
      setCurrent((c) => {
        if (c >= images.length - visibleCount) return 0; 
        return c + 1;
      });
    }, 2000);
    return () => clearInterval(timer);
  }, [images]);

  if (!images.length) return null;

  return (
    <section id="gallery" className="py-10 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
          Hình Ảnh
        </h2>
        <div className="gallery-carousel-wrapper relative w-full overflow-hidden rounded-lg shadow-lg h-70">
          <div
            className="gallery-track flex transition-transform duration-700 ease-in-out"
            style={{
              width: `${images.length * 12}%`, // tổng track
              transform:
                images.length > 4 ? `translateX(-${current * 25}%)` : "none",
            }}
          >
            {images.map((img, idx) => (
              <div
                key={idx}
                className="gallery-slide w-1/8 flex-shrink-0 p-2"
              >
                <img
                  src={img.img}
                  className="rounded-lg shadow-md w-full h-60 object-cover"
                  alt={`Sản phẩm ${idx + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
