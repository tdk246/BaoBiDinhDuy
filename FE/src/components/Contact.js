import { MapPin, Phone, Mail, Clock, Facebook } from "lucide-react"

const Contact = () => (
  <section id="contact" className=" bg-background scroll-mt-20">
    <div className="container mb-20 mx-auto px-4 lg:px-8">
      <div className="text-center mb-16 animate-fade-in-up">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Liên Hệ Với Chúng Tôi</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Hãy liên hệ để được tư vấn giải pháp bao bì phù hợp nhất cho doanh nghiệp của bạn
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="animate-slide-in-left">
          <h3 className="text-2xl font-bold text-foreground mb-8">Thông Tin Liên Hệ</h3>

          <div className="space-y-6">
          {[
  {
    icon: MapPin,
    title: "Địa chỉ",
    content: "Khu Công Nghiệp, Thành phố Hồ Chí Minh",
    color: "text-blue-600",
  },
  {
    icon: Phone,
    title: "Điện thoại",
    content: "0913 990 405",
    color: "text-green-600",
    link: "tel:0913990405",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@baobidinhduy.com",
    color: "text-purple-600",
    link: "mailto:info@baobidinhduy.com",
  },
  {
    icon: Clock,
    title: "Giờ làm việc",
    content: "Thứ 2 - Thứ 6: 8:00 - 17:00\nThứ 7: 8:00 - 12:00",
    color: "text-orange-600",
  },
  {
    icon: Facebook,
    title: "Facebook",
    content: "facebook.com/baobidinhduy",
    color: "text-blue-500",
    link: "https://www.facebook.com/baobidinhduy",
  },
].map((item, index) => (
  <div
    key={index}
    className="flex items-start space-x-4 p-4 bg-card rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-md"
  >
    <div
      className={`w-12 h-12 ${item.color} bg-current/10 rounded-lg flex items-center justify-center flex-shrink-0`}
    >
      <item.icon className={`w-6 h-6 ${item.color}`} />
    </div>
    <div>
      <h4 className="text-left font-semibold text-foreground mb-1">{item.title}</h4>
      {item.link ? (
        <a
          href={item.link}
          target={item.link.startsWith("http") ? "_blank" : undefined}
          rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
          className={`${item.color} hover:underline whitespace-pre-line`}
        >
          {item.content}
        </a>
      ) : (
        <p className="text-muted-foreground whitespace-pre-line">{item.content}</p>
      )}
    </div>
  </div>
))}
          </div>

          {/* <div className="mt-8">
            <a
              href="tel:0913990405"
              className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Gọi Ngay Để Tư Vấn
            </a>
          </div> */}
        </div>

        <div className="animate-fade-in-up">
          <h3 className="text-2xl font-bold text-foreground mb-8">Vị Trí Trên Bản Đồ</h3>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-72 lg:h-[400px] min-h-[550px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208092.80773957627!2d105.2332704153609!3d9.281749743834455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a1150066c924b9%3A0x7afa52fc27018b9f!2zQ3R5IFROSEggTVRWIEJhbyBCw6wgxJDDrG5oIER1eQ!5e0!3m2!1svi!2s!4v1756956137759!5m2!1svi!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Contact
