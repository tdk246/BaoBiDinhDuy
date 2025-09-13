import { CheckCircle, Leaf, Award, Globe } from "lucide-react"
import bg1 from "../assets/bg_1.jpeg"
const About = () => (
  <section id="about" className="py-10 bg-background scroll-mt-20">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16 animate-fade-in-up">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Award className="w-6 h-6 text-primary" />
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Công Ty TNHH MTV Bao Bì Đình Duy</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-slide-in-left">
          <img
            src={bg1}
            alt="Nhà máy sản xuất bao bì Đình Duy"
            className="rounded-2xl shadow-2xl w-full h-auto"
          />
        </div>

        <div className="animate-fade-in-up">
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Chúng tôi là nhà sản xuất bao bì hàng đầu tại Việt Nam, chuyên cung cấp các giải pháp bao bì đa dạng từ hộp
            carton, túi giấy, bao bì sinh học đến bao bì công nghiệp. Với hơn 20 năm kinh nghiệm, chúng tôi cam kết sử
            dụng vật liệu thân thiện môi trường và công nghệ hiện đại.
          </p>

          <div className="space-y-4 mb-8">
            {[
              { icon: CheckCircle, text: "Hơn 20 năm kinh nghiệm trong ngành bao bì" },
              { icon: Leaf, text: "100% vật liệu thân thiện với môi trường" },
              { icon: Globe, text: "Phục vụ khách hàng trên toàn quốc" },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-card rounded-xl">
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Khách Hàng</div>
            </div>
            <div className="text-center p-6 bg-card rounded-xl">
              <div className="text-3xl font-bold text-secondary mb-2">20+</div>
              <div className="text-sm text-muted-foreground">Năm Kinh Nghiệm</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default About
