import React, { useEffect, useState } from 'react';
import ConfirmDeleteModal from '../components/ConfirmDeleteModal';

const API = 'http://localhost:5000/api/news';

const AdminNewsManager = () => {
  const [news, setNews] = useState([]);
  const [form, setForm] = useState({ title: '', summary: '', link: '', updatedAt: '' });
  const [editId, setEditId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const fetchNews = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setNews(data);
  };

  useEffect(() => { fetchNews(); }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const now = new Date().toISOString();
    if (editId) {
      // Chỉ cập nhật updatedAt khi sửa
      await fetch(`${API}/${editId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, updatedAt: now })
      });
    } else {
      // Khi thêm mới, tạo cả createdAt và updatedAt
      await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, createdAt: now, updatedAt: now })
      });
    }
    setForm({ title: '', summary: '', link: '', updatedAt: '' });
    setEditId(null);
    fetchNews();
  };

  const handleEdit = item => {
  setForm({ title: item.title, summary: item.summary || '', link: item.link || '' });
    setEditId(item._id);
    setShowModal(true);
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    await fetch(`${API}/${deleteId}`, { method: 'DELETE' });
    setDeleteId(null);
    fetchNews();
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Quản lý Tin tức</h2>
  <button onClick={() => { setForm({ title: '', summary: '', link: '' }); setEditId(null); setShowModal(true); }} className="bg-blue-600 text-white px-4 py-2 rounded mb-4">Thêm tin tức</button>
      {/* Modal nhập dữ liệu */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg relative">
            <button onClick={()=>setShowModal(false)} className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl">×</button>
            <h3 className="text-2xl font-bold mb-4">{editId ? 'Sửa tin tức' : 'Thêm tin tức'}</h3>
            <form onSubmit={e => { handleSubmit(e); setShowModal(false); }} className="space-y-4">
              <div>
                <label className="block font-semibold mb-1">Tiêu đề</label>
                <input name="title" value={form.title} onChange={handleChange} placeholder="Tiêu đề" className="border p-2 rounded w-full" required />
              </div>
              <div>
                <label className="block font-semibold mb-1">Tóm tắt</label>
                <textarea name="summary" value={form.summary} onChange={handleChange} placeholder="Tóm tắt" className="border p-2 rounded w-full min-h-[200px] resize-y" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Link</label>
                <input name="link" value={form.link} onChange={handleChange} placeholder="Link" className="border p-2 rounded w-full" />
              </div>
              {/* Bỏ trường nội dung */}
              <div className="flex justify-end gap-2">
                <button type="button" onClick={()=>setShowModal(false)} className="px-4 py-2 rounded bg-gray-300">Huỷ</button>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">{editId ? 'Lưu' : 'Thêm'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Bảng dữ liệu */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded shadow">
          <thead>
            <tr className="bg-blue-100">
              <th className="py-2 px-3 border">Tiêu đề</th>
              <th className="py-2 px-3 border">Tóm tắt</th>
              <th className="py-2 px-3 border">Link</th>
              <th className="py-2 px-3 border">Ngày cập nhật</th>
              <th className="py-2 px-3 border">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {news.map((n, idx) => (
              <tr key={n._id || n.id || idx} className="border-b">
                <td className="py-2 px-3 border font-bold">{n.title}</td>
                <td className="py-2 px-3 border">{n.summary}</td>
                <td className="py-2 px-3 border"><a href={n.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Link</a></td>
                <td className="py-2 px-3 border text-sm text-gray-500">{(n.updatedAt || n.createdAt) ? new Date(n.updatedAt || n.createdAt).toLocaleString('vi-VN') : ''}</td>
                <td className="py-2 px-3 border">
                  <button onClick={() => handleEdit(n)} className="bg-yellow-400 px-2 py-1 rounded mr-2">Sửa</button>
                  <button onClick={() => setDeleteId(n._id)} className="bg-red-500 text-white px-2 py-1 rounded">Xoá</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    <ConfirmDeleteModal
      open={!!deleteId}
      onClose={() => setDeleteId(null)}
      onConfirm={handleDelete}
      text="Bạn có chắc chắn muốn xoá tin tức này không?"
    />
  </div>
  );
};

export default AdminNewsManager;
