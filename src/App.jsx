import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Border from './component/Border/Border';
import Root from './component/MarmaAdmin/components/Auth/Root';
import ExtendMission from './component/Mission/ExtendMission';

const App = () => {
  const location = useLocation();
  const isMobile = window.innerWidth <= 900; // Adjust width threshold as needed

  if (isMobile && location.pathname.startsWith('/admin')) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          textAlign: 'center',
        }}
      >
        <h1>Please use a PC or laptop to view this site.</h1>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Border />} />
      <Route path="/mission" element={<ExtendMission />} />
      <Route path="/admin" element={<Root />} />
    </Routes>
  );
};

export default App;

