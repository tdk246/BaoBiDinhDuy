import React, { useEffect, useState } from 'react';
import ConfirmDeleteModal from '../components/ConfirmDeleteModal';
import ImageEditModal from '../components/ImageEditModal';

const API = `${process.env.REACT_APP_API_URL}/api/gallery`;
const UPLOAD_API = `${process.env.REACT_APP_API_URL}/api/gallery/upload`;

const AdminGalleryManager = () => {
  const [images, setImages] = useState([]);
  const [form, setForm] = useState({ img: '', caption: '' });
  const [file, setFile] = useState(null);
  const [editId, setEditId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const fetchImages = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setImages(data);
  };

  useEffect(() => { fetchImages(); }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = e => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    let imgUrl = form.img;
    if (file) {
      const data = new FormData();
      data.append('image', file);
      const res = await fetch(UPLOAD_API, {
        method: 'POST',
        body: data
      });
      const result = await res.json();
      imgUrl = result.url;
    }
    if (editId) {
      await fetch(`${API}/${editId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ img: imgUrl, caption: form.caption })
      });
    } else {
      await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ img: imgUrl, caption: form.caption })
      });
    }
    setForm({ img: '', caption: '' });
    setFile(null);
    setEditId(null);
    setShowEditModal(false);
    fetchImages();
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    await fetch(`${API}/${deleteId}`, { method: 'DELETE' });
    setDeleteId(null);
    fetchImages();
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Quản lý Hình ảnh</h2>
      {/* Thay thế form nhập bằng nút Thêm và modal */}
      <button onClick={() => { setForm({ img: '', caption: '' }); setEditId(null); setShowEditModal(true); }} className="bg-blue-600 text-white px-4 py-2 rounded mb-4">Thêm ảnh</button>
      {/* Modal thêm/sửa ảnh */}
      <ImageEditModal
        open={showEditModal}
        onClose={() => setShowEditModal(false)}
        onSubmit={handleSubmit}
        form={form}
        onChange={handleChange}
        onFileChange={handleFileChange}
        isEdit={!!editId}
        title={editId ? 'Sửa ảnh' : 'Thêm ảnh'}
      />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded shadow">
          <thead>
            <tr className="bg-blue-100">
              <th className="py-2 px-3 border text-center w-16">STT</th>
              <th className="py-2 px-3 border text-center w-64">Ảnh</th>
              <th className="py-2 px-3 border text-left">Chú thích</th>
              <th className="py-2 px-3 border text-center w-32">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {images.map((img, idx) => (
              <tr key={img._id || img.id || idx} className="border-b hover:bg-blue-50">
                <td className="py-2 px-3 border text-center font-semibold">{idx + 1}</td>
                <td className="py-2 px-3 border text-center"><img src={img.img} alt="gallery" className="mx-auto w-64 h-24 object-cover rounded shadow" /></td>
                <td className="py-2 px-3 border align-middle">{img.caption}</td>
                <td className="py-2 px-3 border text-center">
                  <button onClick={() => setDeleteId(img._id)} className="bg-red-500 text-white px-3 py-1 rounded shadow hover:bg-red-600">Xoá</button>
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
        text="Bạn có chắc chắn muốn xoá hình ảnh này không?"
      />
    </div>
  );
};

export default AdminGalleryManager;
