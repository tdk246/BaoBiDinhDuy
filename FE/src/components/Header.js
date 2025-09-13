import { useState } from "react"
import { Menu, X } from "lucide-react"
import logo from "../assets/logo.png"

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [active, setActive] = useState(window.location.hash || "#home")

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl overflow-hidden">
            <img
              src={logo}
              alt="Logo Đình Duy"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h1 className="text-lg font-bold text-primary">Cty TNHH MTV</h1>
            <span className="text-2xl font-bold text-secondary tracking-wide">
              ĐÌNH DUY
            </span>
          </div>
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { href: "#home", label: "Trang Chủ" },
            { href: "#about", label: "Về Chúng Tôi" },
            { href: "#services", label: "Dịch Vụ" },
            { href: "#gallery", label: "Hình Ảnh" },
            { href: "#news", label: "Tin Tức" },
            { href: "#contact", label: "Liên Hệ" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setActive(item.href)} // cập nhật active khi click
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 ${
                active === item.href
                  ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary font-semibold"
                  : "text-foreground hover:text-primary hover:scale-105"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {showMobileMenu && (
        <div className="md:hidden bg-white border-t border-border shadow-md">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            {[
              { href: "#home", label: "Trang Chủ" },
              { href: "#about", label: "Về Chúng Tôi" },
              { href: "#services", label: "Dịch Vụ" },
              { href: "#gallery", label: "Hình Ảnh" },
              { href: "#news", label: "Tin Tức" },
              { href: "#contact", label: "Liên Hệ" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  setActive(item.href)
                  setShowMobileMenu(false)
                }}
                className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                  active === item.href
                    ? "bg-primary text-white"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
