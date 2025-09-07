import React, { useEffect, useState } from 'react';
import axios from 'axios';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  fetch(`${process.env.REACT_APP_API_URL}/api/news`)
      .then(res => res.json())
      .then(data => { setNews(data); setLoading(false); })
      .catch(() => { setNews([]); setLoading(false); });
  }, []);

  return (
    <section id="news" className="py-8 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Tin Tức</h2>
        <div id="news-container" className="grid md:grid-cols-2 gap-8">
          {loading ? 'Đang tải tin tức...' : (
            news.length ? news.map((item, idx) => (
              <div key={idx} className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-blue-700">{item.title}</h3>
                <p className="text-gray-700 mb-2">{item.summary}</p>
                <div className="text-xs text-gray-500 mb-2">Ngày cập nhật: {(item.updatedAt || item.createdAt) ? new Date(item.updatedAt || item.createdAt).toLocaleString('vi-VN') : ''}</div>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Xem chi tiết</a>
              </div>
            )) : <p>Chưa có tin tức.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default News;
