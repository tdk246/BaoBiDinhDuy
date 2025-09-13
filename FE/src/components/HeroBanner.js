"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Phone, Leaf, Award, Users } from "lucide-react"

const HeroBanner = () => {
  const [banners, setBanners] = useState([])
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const API_BASE = process.env.REACT_APP_API_URL || window.location.origin

    fetch(`${API_BASE}/api/banner`)
      .then((res) => res.json())
      .then((data) => {
        let bannersData = data
        // Chuẩn hoá key về { img: ... }
        if (Array.isArray(data) && data.length && !("img" in data[0])) {
          bannersData = data.map((item) => ({
            img: item.img || item.url || item.image || "",
          }))
        }
        setBanners(bannersData)
      })
      .catch(() => {
        // fallback ảnh local nếu API fail
        const fallback = [
          { img: `${API_BASE}/img/carton.jpg` },
          { img: `${API_BASE}/img/bg_1.jpeg` },
          { img: `${API_BASE}/img/carton2.jpg` },
        ]
        setBanners(fallback)
      })
  }, [])

  useEffect(() => {
    if (banners.length === 0) return
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % banners.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [banners])

  if (!banners.length) return null

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background slideshow */}
      <div className="absolute inset-0 overflow-hidden">
        {banners.map((banner, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              current === idx ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={banner.img || "/placeholder.svg"}
              alt={`Banner ${idx + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl">
          <div className="animate-fade-in-up">
            <div className="flex items-center space-x-2 mb-6">
              <Leaf className="w-6 h-6 text-secondary" />
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                Bao Bì Thân Thiện Môi Trường
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Giải Pháp Bao Bì
              <span className="block text-secondary">Tinh Tế Cho Tương Lai</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              Chúng tôi cung cấp bao bì bền vững, chất lượng cao nhằm bảo vệ sản phẩm của bạn và bảo vệ môi trường.
            </p>

            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center space-x-2 text-white">
                <Award className="w-5 h-5 text-secondary" />
                <span className="font-medium">20+ Năm Kinh Nghiệm</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Leaf className="w-5 h-5 text-secondary" />
                <span className="font-medium">100% Thân Thiện Môi Trường</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Users className="w-5 h-5 text-secondary" />
                <span className="font-medium">1000+ Khách Hàng Tin Tưởng</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0913990405"
                className="group inline-flex items-center justify-center px-8 py-4 bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Liên Hệ Ngay: 0913 990 405
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all duration-300"
              >
                Xem Dịch Vụ
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
