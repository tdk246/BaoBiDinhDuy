import React, { useState } from 'react';
import AdminBannerManager from './AdminBannerManager';
import AdminNewsManager from './AdminNewsManager';
import AdminGalleryManager from './AdminGalleryManager';

const MENU = [
  { key: 'banner', label: 'Quản lý Banner' },
  { key: 'gallery', label: 'Quản lý Hình ảnh' },
  { key: 'news', label: 'Quản lý Tin tức' },
];

const AdminLayout = () => {
  const [active, setActive] = useState('banner');

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-56 bg-blue-700 text-white flex flex-col py-8 px-4 shadow-lg">
        <h2 className="text-xl font-bold mb-8 text-center">Admin Menu</h2>
        {MENU.map(item => (
          <button
            key={item.key}
            onClick={() => setActive(item.key)}
            className={`mb-4 py-2 px-3 rounded transition-all font-semibold text-left ${active===item.key?'bg-yellow-400 text-blue-900 scale-105 shadow':''} hover:bg-yellow-300 hover:text-blue-900`}
          >
            {item.label}
          </button>
        ))}
      </aside>
      {/* Main content */}
      <main className="flex-1 p-8">
        {active==='banner' && <AdminBannerManager />}
        {active==='gallery' && <AdminGalleryManager />}
        {active==='news' && <AdminNewsManager />}
      </main>
    </div>
  );
};

export default AdminLayout;
