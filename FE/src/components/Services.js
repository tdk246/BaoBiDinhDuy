import React from 'react';

const Services = () => (
  <section id="services" className="py-12 bg-gray-100 scroll-mt-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Các Dịch Vụ</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold mb-3 text-blue-700">Bao Bì Carton</h3>
          <p className="text-gray-600">Sản xuất hộp carton 3 lớp, 5 lớp, carton sóng… đảm bảo độ bền, chịu lực tốt, thích hợp cho đóng gói và vận chuyển hàng hóa.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold mb-3 text-blue-700">In Offset</h3>
          <p className="text-gray-600">Cung cấp dịch vụ in offset chất lượng cao cho bao bì, hộp giấy, túi giấy. Hình ảnh sắc nét, màu sắc trung thực, nâng cao giá trị thương hiệu.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold mb-3 text-blue-700">Bao Bì PE</h3>
          <p className="text-gray-600">Bao bì nhựa PE dẻo dai, chống thấm nước, phù hợp cho nhiều ngành hàng. Sản phẩm an toàn, bền bỉ, đáp ứng yêu cầu đóng gói đa dạng.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
