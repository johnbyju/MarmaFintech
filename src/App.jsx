import React, { useEffect } from 'react';
import './App.css';
import Border from './component/Border/Border';
import disableDevtool from 'disable-devtool';


// Added disable devtool for user can't able to open the devtool
const App = () => {
  // useEffect(() => {
    
  //   disableDevtool({
  //     debug: false, 
  //     ondevtoolopen: () => {}, 
  //   });
  // }, []);

  return (
      <>
        <Border />
      </>
  );
};

export default App;
