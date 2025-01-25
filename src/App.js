import './App.css';
import { Outlet } from 'react-router-dom';
import { CssBaseline } from "@mui/material";
import Footer from './components/Footer/Footer';
import DownloadSection from './components/Sections/DownloadSection/DownloadSection';


function App() {
  return (
    <div>
      <CssBaseline />
      <Outlet/>
      <DownloadSection/>
      <Footer/>
    </div>
  );
}

export default App;
