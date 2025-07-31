import './App.css';
import './styles/header.css';
import Header from './Components/Header.jsx';
import Hero from './Components/Hero.jsx';
import Services from './Components/Services.jsx';
import Footer from './Components/Footer.jsx';
{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css" /> */}

function App() {

  return (
    <>
    <Header hero={<Hero/>}/>
    <Services />
    <Footer />
    </>
  )
}

export default App;
