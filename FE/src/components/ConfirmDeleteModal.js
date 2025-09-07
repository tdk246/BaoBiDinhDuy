import React from 'react';

const ConfirmDeleteModal = ({ open, onClose, onConfirm, text }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl">×</button>
        <h3 className="text-xl font-bold mb-4 text-center text-red-600">Xác nhận xoá</h3>
        <p className="mb-6 text-center text-gray-700">{text || 'Bạn có chắc chắn muốn xoá mục này không?'}</p>
        <div className="flex justify-center gap-4">
          <button onClick={onClose} className="px-4 py-2 rounded bg-gray-300">Huỷ</button>
          <button onClick={onConfirm} className="bg-red-600 text-white px-4 py-2 rounded">Xoá</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
