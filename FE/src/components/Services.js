import { Package, Printer, Recycle, ArrowRight } from "lucide-react"

const Services = () => (
  <section id="services" className="py-10 bg-muted scroll-mt-20">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Các Dịch Vụ Của Chúng Tôi</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Chúng tôi cung cấp giải pháp bao bì toàn diện với chất lượng cao và thân thiện môi trường
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: Package,
            title: "Bao Bì Carton",
            description:
              "Sản xuất hộp carton 3 lớp, 5 lớp, carton sóng… đảm bảo độ bền, chịu lực tốt, thích hợp cho đóng gói và vận chuyển hàng hóa.",
            features: ["Carton 3-5 lớp", "Chống ẩm tốt", "Tùy chỉnh kích thước"],
            color: "from-blue-500 to-blue-600",
          },
          {
            icon: Printer,
            title: "In Offset",
            description:
              "Cung cấp dịch vụ in offset chất lượng cao cho bao bì, hộp giấy, túi giấy. Hình ảnh sắc nét, màu sắc trung thực, nâng cao giá trị thương hiệu.",
            features: ["In 4 màu CMYK", "Chất lượng cao", "Thiết kế tùy chỉnh"],
            color: "from-purple-500 to-purple-600",
          },
          {
            icon: Recycle,
            title: "Bao Bì PE",
            description:
              "Bao bì nhựa PE dẻo dai, chống thấm nước, phù hợp cho nhiều ngành hàng. Sản phẩm an toàn, bền bỉ, đáp ứng yêu cầu đóng gói đa dạng.",
            features: ["Chống thấm nước", "An toàn thực phẩm", "Tái chế được"],
            color: "from-green-500 to-green-600",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="group bg-background rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div
              className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
            >
              <service.icon className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
              {service.title}
            </h3>

            <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

            <ul className="space-y-2 mb-6">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  {feature}
                </li>
              ))}
            </ul>

            {/* <button className="group/btn flex items-center text-primary font-semibold hover:text-secondary transition-colors">
              Tìm hiểu thêm
              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </button> */}
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Services
