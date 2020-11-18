import React from 'react'
import { Container } from 'react-bootstrap'
import NavBar from './components/NavBar'
import LandingSection from './components/LandingSection'
import AboutSection from './components/AboutSection'
import RoomSection from './components/RoomSection'
import Amenities from './components/Amenities'
import RatesCalender from './components/RatesCalender'
import Footer from './components/Footer'

import './css/index.css';

function App() {
  return (
    <div className="App"> 
    <NavBar/>
      <main>
        <LandingSection />
        <AboutSection />
        <Container >
          <RoomSection />
          <Amenities />
          <RatesCalender />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
