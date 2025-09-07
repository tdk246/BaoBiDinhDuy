import React from 'react';

const Footer = () => (
  <footer className="bg-blue-400 text-white py-10">
    <div className="container mx-auto px-4 grid md:grid-cols-3 gap-10 text-center md:text-left">
      <div>
        <h3 className="text-lg font-bold mb-3">CÔNG TY TNHH MTV BAO BÌ ĐÌNH DUY</h3>
        <p>Chuyên sản xuất Bao bì Carton, In Offset và Bao bì PE chất lượng cao.</p>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-3">Liên Hệ</h3>
        <p>📍 Địa chỉ: 112, Khóm 5, phường Giá Rai, tỉnh Cà Mau</p>
        <p>📞 Điện thoại: <a href="tel:0909123456" className="hover:underline">091 399 04 05</a></p>
        <p>📧 Email: <a href="mailto:info@dinhduy.com" className="hover:underline">baobidinhduy@gmail.com</a></p>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-3">Kết Nối Với Chúng Tôi</h3>
        <div className="flex justify-center md:justify-start space-x-4">
          <a href="https://www.facebook.com/baobidinhduy" target="_blank" className="transform hover:scale-110 transition">
            <img src="https://img.icons8.com/fluency/48/facebook-new.png" alt="Facebook" className="w-8 h-8" />
          </a>
          <a href="https://zalo.me/your-zalo-id" target="_blank" className="transform hover:scale-110 transition">
            <img src="https://img.icons8.com/color/48/zalo.png" alt="Zalo" className="w-8 h-8" />
          </a>
          <a href="#" target="_blank" className="transform hover:scale-110 transition">
            <img src="https://img.icons8.com/fluency/48/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
    <div className="mt-8 text-center border-t border-blue-500 pt-4 text-sm">&copy; 2025 CTY TNHH MTV Bao Bì Đình Duy. All rights reserved.</div>
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
      <a href="https://zalo.me/your-zalo-id" target="_blank" className="bg-blue-200 p-3 rounded-full shadow-lg animate-bounce-slow">
        <img width="48" height="48" src="https://img.icons8.com/color/48/zalo.png" alt="zalo" />
      </a>
      <a href="https://www.facebook.com/baobidinhduy" target="_blank" className="bg-blue-200 p-3 rounded-full shadow-lg animate-bounce-slow">
        <img width="48" height="48" src="https://img.icons8.com/fluency/48/facebook-new.png" alt="facebook-new" />
      </a>
    </div>
    <style>{`
      @keyframes bounce-slow {
        0%,100% { transform: scale(1); }
        50% { transform: scale(1.2); }
      }
      .animate-bounce-slow { animation: bounce-slow 1.5s infinite; }
    `}</style>
  </footer>
);

export default Footer;
