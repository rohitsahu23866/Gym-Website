// src/components/Home.jsx
import React from 'react';
import Slideshow from './Slideshow';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-primary text-white p-6 text-center">
        <h1 className="text-4xl font-bold">Welcome to Gym Website</h1>
        <p className="mt-2 text-lg">Your journey to fitness starts here</p>
      </header>
      <main className="mt-8">
        <Slideshow />
        <section className="container mx-auto mt-8 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">Personalized Diet Plans</h2>
              <p className="mt-2">Get diet plans tailored to your goals and preferences.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">Effective Workout Routines</h2>
              <p className="mt-2">Follow workout routines designed by professionals.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">Track Your Progress</h2>
              <p className="mt-2">Log your workouts and diet to see your progress over time.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
