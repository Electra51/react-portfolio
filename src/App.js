import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes';
import { Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  },[])
  return (
    <div className="App max-w-screen-xl mx-auto">
      <RouterProvider router={router} />
      <Toaster/>
    </div>
  );
}

export default App;
