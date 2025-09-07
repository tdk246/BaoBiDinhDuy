import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import banner1 from '../assets/carton.jpg';
import banner2 from '../assets/bg_1.jpeg';
import banner3 from '../assets/carton2.jpg';

const HeroBanner = () => {
  const [banners, setBanners] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
  fetch(`${process.env.REACT_APP_API_URL}/api/banner`)
      .then(res => res.json())
      .then(data => {
        // Nếu key không phải 'img', chuyển về đúng định dạng
        let bannersData = data;
        if (Array.isArray(data) && data.length && !('img' in data[0])) {
          bannersData = data.map(item => ({img: item.img || item.url || item.image || ''}));
        }
        setBanners(bannersData);
      })
      .catch(() => {
        const fallback = [
          {img: banner1},
          {img: banner2},
          {img: banner3}
        ];
        setBanners(fallback);
      });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % banners.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [banners]);

  if (!banners.length) return null;

  return (
    <section id="home" className="relative">
      <div className="slides-wrapper relative w-full h-[650px] overflow-hidden">
        {banners.map((banner, idx) => (
          <div key={idx} className={`slide absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${current===idx?'opacity-100 z-10':'opacity-0 z-0'}`}>
            <img src={banner.img} alt={`Banner ${idx+1}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        ))}
        {/* Nội dung luôn hiển thị phía trên banner, không bị che bởi slide */}
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white pointer-events-none z-20 mt-32">
          <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">Giải Pháp Bao Bì Tinh Tế Cho Tương Lai</h2>
          <p className="text-lg mb-8 drop-shadow">Chúng tôi cung cấp bao bì bền vững, chất lượng cao nhằm bảo vệ sản phẩm của bạn và bảo vệ môi trường.</p>
          <a href="https://www.facebook.com/baobidinhduy" target="_blank" className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold transform hover:scale-110 transition duration-300 animate-bounce-slow pointer-events-auto">Liên Hệ Ngay: 0913 990 405</a>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
