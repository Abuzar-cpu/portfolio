import Footer from './Components/Footer.jsx';
import NavBar from './Components/NavBar.jsx';
import Home from './Components/Home.jsx'
import Gallery from './Components/Gallery.jsx'
import Contact from './Components/Contact.jsx';

import React, {useState} from 'react';

function App() {
  const [activePage, setPage] = useState("home");
  let current;
  if (activePage === "home") {
      current = <Home />
  } else if (activePage === "contact") {
      current = <Contact />
  } else {
      current = <Gallery />
  }
      // this.setPage = this.setPage.bind(this);
  return (
    <>
      <NavBar active={activePage} name={"Abuzar Karimzada"} changePage={(page) => setPage(page)}/>
        {current}
      <Footer />
    </> 
  );
}

export default App;
