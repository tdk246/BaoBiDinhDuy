import React, { useState } from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import About from './pages/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  const [adminToken, setAdminToken] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  // Đơn giản: truy cập /admin sẽ vào trang admin
  const isAdminRoute = window.location.pathname.startsWith('/admin');

  if (isAdminRoute) {
    if (!adminToken) {
      return <AdminLogin onLogin={token => { setAdminToken(token); setIsAdmin(true); }} />;
    }
    return <AdminDashboard token={adminToken} />;
  }

  return (
    <div className="App">
      <Header />
      <main className="pt-16">
        <HeroBanner />
        <About />
        <Services />
        <Gallery />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
