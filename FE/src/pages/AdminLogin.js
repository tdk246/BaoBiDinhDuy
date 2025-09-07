import React, { useState } from 'react';

const AdminLogin = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      if (!res.ok) {
        setError('Không kết nối được tới máy chủ hoặc API không tồn tại!');
        return;
      }
      let data;
      try {
        data = await res.json();
      } catch (err) {
        setError('Phản hồi từ máy chủ không hợp lệ!');
        return;
      }
      if (data.success) {
        onLogin(data.token);
      } else {
        setError('Sai tài khoản hoặc mật khẩu!');
      }
    } catch (err) {
      setError('Lỗi mạng hoặc máy chủ không phản hồi!');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Đăng nhập Admin</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <input type="text" placeholder="Tài khoản" value={username} onChange={e => setUsername(e.target.value)} className="w-full mb-4 p-2 border rounded" />
        <input type="password" placeholder="Mật khẩu" value={password} onChange={e => setPassword(e.target.value)} className="w-full mb-6 p-2 border rounded" />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded font-bold hover:bg-blue-600">Đăng nhập</button>
      </form>
    </div>
  );
};

export default AdminLogin;
