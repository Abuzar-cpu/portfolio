import Footer from './Components/Footer.jsx';
import NavBar from './Components/NavBar.jsx';
import Home from './Components/Home.jsx'
import Galery from './Components/Galery.jsx'
import Contact from './Components/Contact.jsx';

import React, {useState} from 'react';

function App() {
  const [activePage, setPage] = useState("home");
  // this.setPage = this.setPage.bind(this);
  return (
    <>
      <NavBar changePage={(page) => setPage(page)}/>
      {activePage === "home" ? <Galery /> : <Contact />}
      <Footer />
    </> 
  );
}

export default App;
