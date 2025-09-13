import { Package, Phone, Mail, MapPin, Facebook, Leaf } from "lucide-react"
import logo from "../assets/logo.png"
const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-2">
          <div className="flex items-center space-x-3 mb-6">
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-xl">
               <img
              src={logo}
              alt="Logo Đình Duy"
              className="w-full h-full object-contain"
            />
            </div>
            <div>
              <h3 className="text-xl font-bold">Cty TNHH MTV</h3>
              <span className="text-2xl font-bold text-secondary tracking-wide">ĐÌNH DUY</span>
            </div>
          </div>

          <p className="text-background/80 mb-6 leading-relaxed max-w-md">
            Nhà sản xuất bao bì hàng đầu Việt Nam với hơn 20 năm kinh nghiệm. Chúng tôi cam kết cung cấp giải pháp bao
            bì chất lượng cao và thân thiện môi trường.
          </p>

          <div className="flex items-center space-x-2 text-secondary">
            <Leaf className="w-5 h-5" />
            <span className="font-medium">100% Thân Thiện Môi Trường</span>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6">Liên Kết Nhanh</h4>
          <ul className="space-y-3">
            {[
              { href: "#home", label: "Trang Chủ" },
              { href: "#about", label: "Về Chúng Tôi" },
              { href: "#services", label: "Dịch Vụ" },
              { href: "#gallery", label: "Hình Ảnh" },
              { href: "#news", label: "Tin Tức" },
              { href: "#contact", label: "Liên Hệ" },
            ].map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-background/80 hover:text-secondary transition-colors duration-200">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6">Thông Tin Liên Hệ</h4>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
              <span className="text-background/80 text-sm">Khu Công Nghiệp, TP. Hồ Chí Minh</span>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
              <a href="tel:0913990405" className="text-background/80 hover:text-secondary transition-colors text-sm">
                0913 990 405
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
              <a
                href="mailto:info@baobidinhduy.com"
                className="text-background/80 hover:text-secondary transition-colors text-sm"
              >
                info@baobidinhduy.com
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <Facebook className="w-5 h-5 text-secondary flex-shrink-0" />
              <a
                href="https://www.facebook.com/baobidinhduy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-secondary transition-colors text-sm"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-background/20 mt-12 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-background/60 text-sm">
            © 2024 Công Ty TNHH MTV Bao Bì Đình Duy. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex items-center space-x-6 text-sm text-background/60">
            <span>Chính sách bảo mật</span>
            <span>Điều khoản sử dụng</span>
            <span>Chứng nhận ISO 9001:2015</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
