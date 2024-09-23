import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import FirstSlideSection from './components/firstSlideSection/FirstSlideSection';
import DownloadSection from './components/downloadSection/DownloadSection';
import Why from './components/Why/Why';

function App() {

  return (
    <div className='App'>
      <Navbar />
      <FirstSlideSection />
      <DownloadSection />
      <Why />
      <Footer />
    </div>
  )
}

export default App
