import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Camera } from "lucide-react"

const Gallery = () => {
  const [images, setImages] = useState([])
  const [current, setCurrent] = useState(0)
  const visibleCount = 4
const slideWidth = 100 / visibleCount

  // Lấy dữ liệu từ API (giữ code cũ)
  useEffect(() => {
    const API_BASE = process.env.REACT_APP_API_URL || window.location.origin
    fetch(`${API_BASE}/api/gallery`)
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch(() =>
        setImages([
          { img: `${API_BASE}/img/carton.jpg` },
          { img: `${API_BASE}/img/carton2.jpg` },
          { img: `${API_BASE}/img/carton3.jpg` },
          { img: `${API_BASE}/img/carton4.jpg` },
          { img: `${API_BASE}/img/bg_1.jpeg` },
          { img: `${API_BASE}/img/carton.jpg` },
          { img: `${API_BASE}/img/carton2.jpg` },
          { img: `${API_BASE}/img/bg_1.jpeg` },
        ])
      )
  }, [])

// Auto slide
useEffect(() => {
  if (!images.length || images.length <= visibleCount) return

  const timer = setInterval(() => {
    setCurrent((c) => {
      if (c >= images.length - 1) return 0
      return c + 1
    })
  }, 1500)
  return () => clearInterval(timer)
}, [images])

const nextSlide = () => {
  setCurrent((c) => {
    if (c >= images.length - 1) return 0
    return c + 1
  })
}

const prevSlide = () => {
  setCurrent((c) => {
    if (c <= 0) return images.length - 1
    return c - 1
  })
}


  if (!images.length) return null

  return (
    <section id="gallery" className="py-10 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Tiêu đề */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Camera className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Hình Ảnh Sản Phẩm
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Khám phá bộ sưu tập sản phẩm bao bì chất lượng cao của chúng tôi
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6"></div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div
  className="flex transition-transform duration-700 ease-in-out"
  style={{
  width: `${images.length * (100 / visibleCount)}%`,
  transform:
    images.length > visibleCount
      ? `translateX(-${current * (100 / images.length)}%)`
      : "none",
}}

>
              {images.map((img, idx) => (
                <div key={idx} className="w-1/4 flex-shrink-0 p-2">
                  <div className="group relative overflow-hidden rounded-xl bg-card">
                    <img
                      src={img.img}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      alt={`Sản phẩm ${idx + 1}`}
                    />
                    {/* Overlay hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="font-semibold">Sản phẩm {idx + 1}</p>
                        <p className="text-sm opacity-90">Bao bì chất lượng cao</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nút trái/phải */}
          {images.length > 4 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Chấm tròn */}
          {images.length > 4 && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.max(0, images.length - 3) }).map(
                (_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      current === idx ? "bg-primary w-8" : "bg-muted-foreground/30"
                    }`}
                  />
                )
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Gallery
