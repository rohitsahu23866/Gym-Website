// src/components/Home.jsx
import React from 'react';
import Slideshow from './Slideshow';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div className=" min-h-screen">
      <header className=" text-white p-6 text-center">
        <h1 className="text-4xl font-bold text-secondary-color"><span>Welcome to the </span>
        <TypeAnimation sequence={["Gym Website",3000,"",  
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
                />
        </h1>
        <p className="mt-1 text-lg">Your journey to fitness starts here</p>
      </header>
      <main className="mt-8">
        <Slideshow />
        <section className="container mx-auto mt-8 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-6 bg-secondary-color rounded-lg shadow-md" >
              <h2 className="text-2xl  text-center font-bold">Personalized Diet Plans</h2>
              <p className="mt-2 text-center">Get diet plans tailored to your goals and preferences.</p>
            </div>
            
            <div className="p-6 bg-secondary-color rounded-lg shadow-md">
              <h2 className="text-2xl text-center font-bold">Effective Workout Routines</h2>
              <p className="mt-2 text-center">Follow workout routines designed by professionals.</p>
            </div>
            <div className="p-6 bg-secondary-color rounded-lg shadow-md">
              <h2 className="text-2xl text-center font-bold">Track Your Progress</h2>
              <p className="mt-2 text-center">Log your workouts and diet to see your progress over time.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
