import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import FirstSlideSection from './components/firstSlideSection/FirstSlideSection';
import DownloadSection from './components/downloadSection/DownloadSection';
import Why from './components/Why/Why';
import Offers from './components/offersScetion/Offers';
import Exprience from './components/exprience/Exprience';
import Feedback from './components/feedback/Feedback';
import Badge from './components/badge/Badge';
import PlaySteps from './components/playSteps/PlaySteps';

function App() {

  return (
    <div className='App'>
      <Navbar />
      <FirstSlideSection />
      <DownloadSection />
      <Why />
      <Offers />
      <Exprience />
      <PlaySteps />
      <Feedback />
      <Badge />
      <Footer />
    </div>
  )
}

export default App
