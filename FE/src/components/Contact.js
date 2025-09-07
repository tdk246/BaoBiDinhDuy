import React from 'react';

const Contact = () => (
  <section id="contact" className="py-12 bg-gray-100 scroll-mt-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Liên Hệ</h2>
      <div className="rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208092.80773957627!2d105.2332704153609!3d9.281749743834455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a1150066c924b9%3A0x7afa52fc27018b9f!2zQ3R5IFROSEggTVRWIEJhbyBCw6wgxJDDrG5oIER1eQ!5e0!3m2!1svi!2s!4v1756956137759!5m2!1svi!2s"
          width="100%"
          height="500"
          style={{border:0}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
);

export default Contact;
