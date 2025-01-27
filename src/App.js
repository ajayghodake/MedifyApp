import './App.css';
import { Outlet } from 'react-router-dom';
import { CssBaseline } from "@mui/material";
import Footer from './components/Footer/Footer';
import DownloadSection from './components/Sections/DownloadSection/DownloadSection';
import DevInfo from './components/DevInfo/DevInfo';


function App() {
  return (
    <div>
      <CssBaseline />
      <Outlet/>
      <DownloadSection/>
      <Footer/>
      <DevInfo/>
    </div>
  );
}

export default App;
