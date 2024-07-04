import React, { useState } from 'react';
import { savePDF } from '@progress/kendo-react-pdf';

const Workout = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const workouts = [
    {
      title: '4-Day Workout Split',
      days: [
        {
          day: 'Day 1: Upper Body',
          exercises: [
            { name: 'Bench Press', sets: '3x8-10', description: 'Flat bench press focusing on chest and triceps.' },
            { name: 'Pull-ups', sets: '3x8-10', description: 'Pull-ups targeting back and biceps.' },
            { name: 'Shoulder Press', sets: '3x10-12', description: 'Overhead shoulder press for deltoids.' },
            { name: 'Bicep Curls', sets: '3x10-12', description: 'Isolated bicep curls for arm development.' },
          ],
        },
        {
          day: 'Day 2: Lower Body',
          exercises: [
            { name: 'Squats', sets: '3x8-10', description: 'Barbell squats for overall leg strength.' },
            { name: 'Deadlifts', sets: '3x6-8', description: 'Conventional deadlifts focusing on hamstrings and lower back.' },
            { name: 'Lunges', sets: '3x10-12', description: 'Walking lunges for quadriceps and glutes.' },
            { name: 'Leg Curls', sets: '3x10-12', description: 'Machine leg curls targeting hamstrings.' },
          ],
        },
        { day: 'Day 3: Rest' },
        {
          day: 'Day 4: Upper Body',
          exercises: [
            { name: 'Incline Dumbbell Press', sets: '3x8-10', description: 'Incline bench press focusing on upper chest.' },
            { name: 'Rows', sets: '3x8-10', description: 'Barbell rows for mid-back development.' },
            { name: 'Lateral Raises', sets: '3x10-12', description: 'Side lateral raises for shoulder width.' },
            { name: 'Tricep Dips', sets: '3x10-12', description: 'Tricep dips targeting triceps.' },
          ],
        },
        {
          day: 'Day 5: Lower Body',
          exercises: [
            { name: 'Leg Press', sets: '3x10-12', description: 'Machine leg press for overall leg development.' },
            { name: 'Hamstring Curls', sets: '3x10-12', description: 'Seated hamstring curls for hamstring isolation.' },
            { name: 'Calf Raises', sets: '3x12-15', description: 'Standing calf raises for calf muscles.' },
            { name: 'Glute Bridges', sets: '3x10-12', description: 'Glute bridges for glute activation.' },
          ],
        },
        { day: 'Day 6: Rest' },
        { day: 'Day 7: Rest' },
      ],
    },
    {
      title: '5-Day Workout Split',
      days: [
        {
          day: 'Day 1: Chest & Triceps',
          exercises: [
            { name: 'Bench Press', sets: '3x8-10', description: 'Flat bench press focusing on chest and triceps.' },
            { name: 'Incline Dumbbell Press', sets: '3x8-10', description: 'Incline bench press targeting upper chest.' },
            { name: 'Tricep Pushdown', sets: '3x10-12', description: 'Tricep pushdowns for triceps isolation.' },
          ],
        },
        {
          day: 'Day 2: Back & Biceps',
          exercises: [
            { name: 'Pull-ups', sets: '3x8-10', description: 'Pull-ups focusing on back and biceps.' },
            { name: 'Bent-over Rows', sets: '3x8-10', description: 'Bent-over rows for mid-back development.' },
            { name: 'Bicep Curls', sets: '3x10-12', description: 'Standing bicep curls for biceps.' },
          ],
        },
        {
          day: 'Day 3: Legs',
          exercises: [
            { name: 'Squats', sets: '3x8-10', description: 'Barbell squats for overall leg strength.' },
            { name: 'Lunges', sets: '3x10-12', description: 'Walking lunges for quadriceps and glutes.' },
            { name: 'Leg Curls', sets: '3x10-12', description: 'Machine leg curls for hamstring isolation.' },
          ],
        },
        {
          day: 'Day 4: Shoulders',
          exercises: [
            { name: 'Shoulder Press', sets: '3x8-10', description: 'Overhead shoulder press for deltoid development.' },
            { name: 'Lateral Raises', sets: '3x10-12', description: 'Side lateral raises for shoulder width.' },
            { name: 'Shrugs', sets: '3x10-12', description: 'Barbell shrugs for trapezius muscles.' },
          ],
        },
        {
          day: 'Day 5: Core & Cardio',
          exercises: [
            { name: 'Planks', sets: '3 sets', description: 'Planks for core stabilization.' },
            { name: 'Russian Twists', sets: '3 sets', description: 'Russian twists for oblique muscles.' },
            { name: 'Mountain Climbers', sets: '3 sets', description: 'Mountain climbers for cardiovascular endurance.' },
          ],
        },
        { day: 'Day 6: Rest' },
        { day: 'Day 7: Rest' },
      ],
    },
    {
      title: '6-Day Push/Pull/Legs',
      days: [
        {
          day: 'Day 1: Push',
          exercises: [
            { name: 'Bench Press', sets: '3x8-10', description: 'Flat bench press focusing on chest and triceps.' },
            { name: 'Shoulder Press', sets: '3x8-10', description: 'Overhead shoulder press for deltoid development.' },
            { name: 'Tricep Dips', sets: '3x10-12', description: 'Tricep dips for triceps isolation.' },
          ],
        },
        {
          day: 'Day 2: Pull',
          exercises: [
            { name: 'Deadlifts', sets: '3x6-8', description: 'Conventional deadlifts for hamstring and back strength.' },
            { name: 'Pull-ups', sets: '3x8-10', description: 'Pull-ups targeting back and biceps.' },
            { name: 'Bicep Curls', sets: '3x10-12', description: 'Standing bicep curls for bicep development.' },
          ],
        },
        {
          day: 'Day 3: Legs',
          exercises: [
            { name: 'Squats', sets: '3x8-10', description: 'Barbell squats for overall leg strength.' },
            { name: 'Leg Press', sets: '3x10-12', description: 'Leg press for quadriceps and glute development.' },
            { name: 'Calf Raises', sets: '3x12-15', description: 'Standing calf raises for calf muscles.' },
          ],
        },
        {
          day: 'Day 4: Push',
          exercises: [
            { name: 'Incline Dumbbell Press', sets: '3x8-10', description: 'Incline dumbbell press focusing on upper chest.' },
            { name: 'Lateral Raises', sets: '3x10-12', description: 'Lateral raises for shoulder width development.' },
            { name: 'Tricep Pushdown', sets: '3x10-12', description: 'Tricep pushdowns for tricep isolation.' },
          ],
        },
        {
          day: 'Day 5: Pull',
          exercises: [
            { name: 'Seated Rows', sets: '3x8-10', description: 'Seated rows for mid-back and bicep development.' },
            { name: 'Hammer Curls', sets: '3x10-12', description: 'Hammer curls for bicep development.' },
            { name: 'Face Pulls', sets: '3x10-12', description: 'Face pulls for rear deltoid and upper back development.' },
          ],
        },
        {
          day: 'Day 6: Legs',
          exercises: [
            { name: 'Lunges', sets: '3x10-12', description: 'Walking lunges for quadriceps and glute development.' },
            { name: 'Leg Curls', sets: '3x10-12', description: 'Leg curls for hamstring isolation.' },
            { name: 'Glute Bridges', sets: '3x10-12', description: 'Glute bridges for glute activation.' },
          ],
        },
        { day: 'Day 7: Rest' },
      ],
    },
  ];

  const handleDownloadPDF = (title, days) => {
    const doc = {
      content: [
        {
          text: title,
          style: 'header',
        },
        {
          ul: days.map(day => ({
            text: `${day.day}:\n${day.exercises ? day.exercises.map(exercise => `${exercise.name} - ${exercise.sets}`).join('\n') : 'Rest day'}`,
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
  
    savePDF(doc, { fileName: `${title.replace(/ /g, '_')}_Workout_Split.pdf` });
  };
  

  return (
    <div className="container mx-auto p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white mb-6">Workout Splits</h1>
      <div className="w-full max-w-lg">
        {workouts.map((workout, index) => (
          <div key={index} className="bg-slate-800 p-6 rounded-lg shadow-lg mb-4">
            <button
              className="text-2xl font-bold text-white cursor-pointer w-full text-left mb-4 focus:outline-none"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              {workout.title}
            </button>
            {activeIndex === index && (
              <div className="bg-white p-4 rounded-lg shadow-inner">
                {workout.days.map((day, idx) => (
                  <div key={idx} className="mb-4">
                    <h3 className="text-xl font-semibold">{day.day}</h3>
                    {day.exercises ? (
                      <ul className="list-disc list-inside ml-4">
                        {day.exercises.map((exercise, exIdx) => (
                          <li key={exIdx} className="mb-2">
                            <div className="flex justify-between items-center">
                              <div>
                                <span className="font-semibold">{exercise.name}</span> - {exercise.sets}
                              </div>
                              {exercise.description && (
                                <button
                                  className="text-[#7776B3] hover:text-[#9B86BD] focus:outline-none"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    // Handle showing/hiding description if needed
                                  }}
                                >
                                  Info
                                </button>
                              )}
                            </div>
                            {exercise.description && (
                              <p className="text-sm text-gray-600">{exercise.description}</p>
                            )}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-600">Rest day</p>
                    )}
                  </div>
                ))}
                <button
                  className="bg-[#5A639C] text-white px-4 py-2 rounded-lg mt-2"
                  onClick={() => handleDownloadPDF(workout.title, workout.days)}
                >
                  Download PDF
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workout;
