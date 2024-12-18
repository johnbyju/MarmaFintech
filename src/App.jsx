import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Border from './component/Border/Border';
import Root from './component/MarmaAdmin/components/Auth/Root';
import disableDevtool from 'disable-devtool';

const App = () => {
  // useEffect(() => {
  //   disableDevtool({
  //     debug: false, 
  //     ondevtoolopen: () => {}, 
  //   });
  // }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Border />} />
        <Route path="/admin/*" element={<Root />} />
      </Routes>
    </>
  );
};

export default App;
