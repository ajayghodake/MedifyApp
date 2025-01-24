import './App.css';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import DownloadSection from './components/Sections/DownloadSection/DownloadSection';


function App() {
  return (
    <div>
      <Outlet/>
      <DownloadSection/>
      <Footer/>
    </div>
  );
}

export default App;
