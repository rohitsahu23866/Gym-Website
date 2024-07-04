import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Diet from './components/Diet';
import Workout from './components/Workout';
import CalorieCalculator from './components/CalorieCalculator';
import Home from './components/Home';
import WeightTracker from './components/WeightTracker';



const App = () => {
  return (
    <Router>
      <video
        className="min-w-full min-h-full object-cover fixed z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="flex flex-col min-h-screen relative z-10" >
      
        <Header />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/diet" element={<Diet />} />
            <Route path="/workout" element={<Workout />} />
            <Route path="/" element={<Home />} />
            <Route path="/calorie-calculator" element={<CalorieCalculator />} />
            <Route path="/weight-tracker" element={<WeightTracker />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}; 

export default App;
