import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isTransparent, setIsTransparent] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const banner = document.getElementById('home');
      if (!banner) return;
      const bannerRect = banner.getBoundingClientRect();
      setIsTransparent(bannerRect.top <= 0 && bannerRect.bottom > 80);
    };
    window.addEventListener('scroll', onScroll);
    // Đợi DOM render xong mới kiểm tra vị trí banner
    setTimeout(onScroll, 50);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Xác định mục active dựa vào hash
  const [active, setActive] = useState(window.location.hash || '#home');
  useEffect(() => {
    const onHashChange = () => setActive(window.location.hash || '#home');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isTransparent ? 'bg-transparent' : 'bg-blue-500'} text-white`}>
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" style={{height:56}} className="mr-1" />
          <h1 className="text-xl font-bold hidden md:block">
            Cty TNHH MTV
            <span className="text-red-700 ml-2 tracking-wide font-serif" style={{fontSize:'2rem',fontWeight:700,letterSpacing:'2px',textShadow:'1px 1px 2px rgba(0,0,0,0.3)'}}>ĐÌNH DUY</span>
          </h1>
        </div>
        <nav className="hidden md:flex space-x-6 text-white font-bold">
          <a href="#home" className={`transition-transform duration-200 hover:scale-110  `}>Trang Chủ</a>
          <a href="#about" className={`transition-transform duration-200 hover:scale-110 ${active==='#about'?'scale-110 text-blue-800':''}`}>Về Chúng Tôi</a>
          <a href="#services" className={`transition-transform duration-200 hover:scale-110 ${active==='#services'?'scale-110 text-blue-800':''}`}>Dịch Vụ</a>
          <a href="#gallery" className={`transition-transform duration-200 hover:scale-110 ${active==='#gallery'?'scale-110 text-blue-800':''}`}>Hình Ảnh</a>
          <a href="#news" className={`transition-transform duration-200 hover:scale-110 ${active==='#news'?'scale-110 text-blue-800':''}`}>Tin Tức</a>
          <a href="#contact" className={`transition-transform duration-200 hover:scale-110 ${active==='#contact'?'scale-110 text-blue-800':''}`}>Liên Hệ</a>
        </nav>
        <button id="mobile-menu-button" className="md:hidden focus:outline-none" onClick={() => setShowMobileMenu(v => !v)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {showMobileMenu && (
        <nav className="md:hidden bg-blue-500 text-white px-4 py-4 space-y-4 flex flex-col font-bold shadow-lg animate-fade-in absolute top-full left-0 w-full z-50">
          <a href="#home" onClick={()=>setShowMobileMenu(false)} className={`py-2 border-b border-blue-300`}>Trang Chủ</a>
          <a href="#about" onClick={()=>setShowMobileMenu(false)} className={`py-2 border-b border-blue-300`}>Về Chúng Tôi</a>
          <a href="#services" onClick={()=>setShowMobileMenu(false)} className={`py-2 border-b border-blue-300`}>Dịch Vụ</a>
          <a href="#gallery" onClick={()=>setShowMobileMenu(false)} className={`py-2 border-b border-blue-300`}>Hình Ảnh</a>
          <a href="#news" onClick={()=>setShowMobileMenu(false)} className={`py-2 border-b border-blue-300`}>Tin Tức</a>
          <a href="#contact" onClick={()=>setShowMobileMenu(false)} className={`py-2`}>Liên Hệ</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
