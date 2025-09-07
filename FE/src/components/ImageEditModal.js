import React from 'react';

const ImageEditModal = ({ open, onClose, onSubmit, form, onChange, onFileChange, isEdit, title }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl">×</button>
        <h3 className="text-2xl font-bold mb-4">{title || (isEdit ? 'Sửa' : 'Thêm')}</h3>
        <form onSubmit={e => { onSubmit(e); onClose(); }} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Ảnh</label>
            <input type="file" accept="image/*" onChange={onFileChange} className="border p-2 rounded w-full" required={!isEdit} />
            {form.img && <img src={form.img} alt="preview" className="mt-2 w-32 h-20 object-cover rounded shadow" />}
          </div>
          {form.title !== undefined && (
            <div>
              <label className="block font-semibold mb-1">Tiêu đề</label>
              <input name="title" value={form.title} onChange={onChange} placeholder="Tiêu đề" className="border p-2 rounded w-full" />
            </div>
          )}
          {form.link !== undefined && (
            <div>
              <label className="block font-semibold mb-1">Link</label>
              <input name="link" value={form.link} onChange={onChange} placeholder="Link" className="border p-2 rounded w-full" />
            </div>
          )}
          {form.caption !== undefined && (
            <div>
              <label className="block font-semibold mb-1">Chú thích</label>
              <input name="caption" value={form.caption} onChange={onChange} placeholder="Chú thích" className="border p-2 rounded w-full" />
            </div>
          )}
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded bg-gray-300">Huỷ</button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">{isEdit ? 'Lưu' : 'Thêm'}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ImageEditModal;
