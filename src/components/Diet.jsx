import React, { useState } from 'react';
import { savePDF } from '@progress/kendo-react-pdf';

const Diet = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const diets = [
    {
      title: 'Maintain Weight - Indian',
      meals: [
        {
          name: 'Breakfast',
          vegetarian: { name: 'Upma or Poha', calories: 300 },
          nonVegetarian: { name: 'Egg Bhurji with Roti', calories: 350 },
        },
        {
          name: 'Lunch',
          vegetarian: { name: 'Roti, Dal, Sabzi, and Curd', calories: 500 },
          nonVegetarian: { name: 'Chicken Curry with Rice', calories: 600 },
        },
        {
          name: 'Dinner',
          vegetarian: { name: 'Khichdi with Curd', calories: 400 },
          nonVegetarian: { name: 'Fish Curry with Roti', calories: 450 },
        },
        {
          name: 'Snacks',
          vegetarian: { name: 'Fruit Salad or Roasted Chana', calories: 150 },
          nonVegetarian: { name: 'Chicken Sandwich or Omelette', calories: 250 },
        },
      ],
    },
    {
      title: 'Lose Weight - Indian',
      meals: [
        {
          name: 'Breakfast',
          vegetarian: { name: 'Daliya (Broken Wheat) or Idli-Sambhar', calories: 250 },
          nonVegetarian: { name: 'Egg White Omelette with Toast', calories: 300 },
        },
        {
          name: 'Lunch',
          vegetarian: { name: 'Salad, Roti, Dal, and Sabzi (low oil)', calories: 400 },
          nonVegetarian: { name: 'Grilled Chicken with Salad', calories: 450 },
        },
        {
          name: 'Dinner',
          vegetarian: { name: 'Vegetable Soup and Grilled Paneer', calories: 300 },
          nonVegetarian: { name: 'Fish Curry with Steamed Rice', calories: 350 },
        },
        {
          name: 'Snacks',
          vegetarian: { name: 'Sprouts Salad or Fruit Smoothie', calories: 100 },
          nonVegetarian: { name: 'Grilled Chicken Salad or Boiled Egg', calories: 200 },
        },
      ],
    },
    {
      title: 'Gain Weight - Indian',
      meals: [
        {
          name: 'Breakfast',
          vegetarian: { name: 'Paratha with Curd or Banana Shake', calories: 500 },
          nonVegetarian: { name: 'Egg Paratha with Curd', calories: 550 },
        },
        {
          name: 'Lunch',
          vegetarian: { name: 'Rice, Dal, Sabzi, and Curd (ghee)', calories: 700 },
          nonVegetarian: { name: 'Chicken Biryani with Raita', calories: 800 },
        },
        {
          name: 'Dinner',
          vegetarian: { name: 'Paneer Curry with Roti or Naan', calories: 600 },
          nonVegetarian: { name: 'Mutton Curry with Rice or Naan', calories: 700 },
        },
        {
          name: 'Snacks',
          vegetarian: { name: 'Dry Fruits or Lassi with nuts', calories: 300 },
          nonVegetarian: { name: 'Chicken Tikka or Fish Fry', calories: 400 },
        },
      ],
    },
  ];

  const handleDownloadPDF = (title, meals) => {
    const doc = {
      content: [
        {
          text: title,
          style: 'header',
        },
        {
          ul: meals.map(meal => ({
            text: `${meal.name}:\nVegetarian: ${meal.vegetarian.name} - ${meal.vegetarian.calories} calories\nNon-Vegetarian: ${meal.nonVegetarian.name} - ${meal.nonVegetarian.calories} calories`,
            margin: [0, 10, 0, 0],
          })),
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10],
        },
      },
    };

    savePDF(doc, { fileName: `${title.replace(/ /g, '_')}_Diet_Plan.pdf` });
  };

  return (
    <div className="container  mx-auto p-6 flex flex-col items-center" id="Diet">
      <h1 className="text-4xl font-bold secondary-color mb-6">Diet Plans</h1>
      <div className="w-[60%] max-w-lg">
        {diets.map((diet, index) => (
          <div key={index} className=" bg-primary-color text-center p-6 rounded-lg shadow-lg mb-4">
            <button
              className="text-2xl font-bold text-gray-100 text-center  cursor-pointer w-full text-left mb-4 focus:outline-none"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              {diet.title}
            </button>
            {activeIndex === index && (
              <div className="bg-white p-4 rounded-lg shadow-inner">
                {diet.meals.map((meal, idx) => (
                  <div key={idx} className="mb-4">
                    <h3 className="text-xl font-semibold">{meal.name}</h3>
                    <p className="text-gray-600">
                      <strong>Vegetarian:</strong> {meal.vegetarian.name} - {meal.vegetarian.calories} calories<br />
                      <strong>Non-Vegetarian:</strong> {meal.nonVegetarian.name} - {meal.nonVegetarian.calories} calories
                    </p>
                  </div>
                ))}
                
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Diet;
