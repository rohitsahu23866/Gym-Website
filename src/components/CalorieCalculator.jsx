import React, { useState } from 'react';

const CalorieCalculator = () => {
  const [gender, setGender] = useState('male');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [activity, setActivity] = useState(1.2);
  const [goal, setGoal] = useState('maintain');
  const [pace, setPace] = useState(0.25);
  const [calories, setCalories] = useState(null);
  const [macros, setMacros] = useState({ protein: 0, carbs: 0, fat: 0 });

  const calculateCalories = () => {
    const bmr =
      gender === 'male'
        ? (10 * weight) + (6.25 * height) - (5 * age) + 5
        : (10 * weight) + (6.25 * height) - (5 * age) - 161;
  
    const maintenanceCalories = bmr * activity;
  
    let calorieAdjustment = 0;
    if (goal === 'lose') {
      calorieAdjustment = -pace * 7700 / 7;
    } else if (goal === 'gain') {
      calorieAdjustment = pace * 7700 / 7;
    }
  
    const totalCalories = maintenanceCalories + calorieAdjustment;
    setCalories(totalCalories);
  
    // Adjust protein intake based on activity level
    let proteinFactor = 2.2; // Default factor for protein (g/kg)
    if (activity === 1.2) {
      proteinFactor = 1.2; // Sedentary
    } else if (activity === 1.375) {
      proteinFactor = 1.4; // Lightly active
    } else if (activity === 1.55) {
      proteinFactor = 1.6; // Moderately active
    } else if (activity === 1.725) {
      proteinFactor = 1.8; // Very active
    } else if (activity === 1.9) {
      proteinFactor = 2.0; // Extra active
    }
  
    const protein = weight * proteinFactor;
    const fat = totalCalories * 0.25 / 9; // 25% of total calories
    const carbs = (totalCalories - (protein * 4 + fat * 9)) / 4;
  
    setMacros({
      protein: protein.toFixed(2),
      fat: fat.toFixed(2),
      carbs: carbs.toFixed(2),
    });
  };
  
  return (
    <div className="container mx-auto p-6 max-w-lg bg-secondary-color rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold  mb-4 text-center   text-black">Calorie Calculator</h2>
      <div className="mb-6">
        <label className="block mb-2 font-semibold">Gender:</label>
        <div className="flex space-x-4">
          <button
            className={`p-2 w-full rounded ${gender === 'male' ? 'bg-primary-color text-white' : 'bg-gray-200'}`}
            onClick={() => setGender('male')}
          >
            Male
          </button>
          <button
            className={`p-2 w-full rounded ${gender === 'female' ? 'bg-primary-color text-white' : 'bg-gray-200'}`}
            onClick={() => setGender('female')}
          >
            Female
          </button>
        </div>
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-semibold">Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-semibold">Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-semibold">Age (years):</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-semibold">Activity Level:</label>
        <select
          value={activity}
          onChange={(e) => setActivity(parseFloat(e.target.value))}
          className="p-2 border border-gray-300 rounded w-full"
        >
          <option value={1.2}>Sedentary (little or no exercise)</option>
          <option value={1.375}>Lightly active (light exercise/sports 1-3 days/week)</option>
          <option value={1.55}>Moderately active (moderate exercise/sports 3-5 days/week)</option>
          <option value={1.725}>Very active (hard exercise/sports 6-7 days a week)</option>
          <option value={1.9}>Extra active (very hard exercise/physical job)</option>
        </select>
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-semibold">Goal:</label>
        <div className="flex space-x-4">
          <button
            className={`p-2 w-full rounded ${goal === 'lose' ? 'bg-primary-color text-white' : 'bg-gray-200'}`}
            onClick={() => setGoal('lose')}
          >
            Lose Weight
          </button>
          <button
            className={`p-2 w-full rounded ${goal === 'maintain' ? 'bg-primary-color text-white' : 'bg-gray-200'}`}
            onClick={() => setGoal('maintain')}
          >
            Maintain Weight
          </button>
          <button
            className={`p-2 w-full rounded ${goal === 'gain' ? 'bg-primary-color text-white' : 'bg-gray-200'}`}
            onClick={() => setGoal('gain')}
          >
            Gain Weight
          </button>
        </div>
      </div>
      {goal !== 'maintain' && (
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Pace (kg/week):</label>
          <div className="flex space-x-4">
            {[0.25, 0.5, 0.75, 1].map((p) => (
              <button
                key={p}
                className={`p-2 w-1/4 rounded ${pace === p ? 'bg-primary-color text-white' : 'bg-gray-200'}`}
                onClick={() => setPace(p)}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      )}
      <button
        onClick={calculateCalories}
        className="bg-primary-color text-white p-3 rounded w-full font-semibold hover:bg-[#7776B3]"
      >
        Calculate
      </button>
      {calories !== null && (
        <div className="mt-6 p-4 bg-white rounded-lg shadow">
          <h3 className="text-xl font-bold text-[#5A639C]">Calories Required:</h3>
          <p className="text-lg">{calories.toFixed(2)} kcal/day</p>
          <h3 className="text-xl font-bold text-[#5A639C] mt-4">Macro Breakdown:</h3>
          <p className="text-lg">Protein: {macros.protein} g</p>
          <p className="text-lg">Carbs: {macros.carbs} g</p>
          <p className="text-lg">Fat: {macros.fat} g</p>
        </div>
      )}
    </div>
  );
};

export default CalorieCalculator;
 