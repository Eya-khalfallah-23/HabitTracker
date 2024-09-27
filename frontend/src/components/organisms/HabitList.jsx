import React from 'react';
import HabitItem from '../molecules/HabitForm';

const HabitList = ({ habits, toggleHabit, deleteHabit }) => {
  return (
    <div className="habit-list">
      {habits.map((habit) => (
        <HabitItem
          key={habit.id}
          habit={habit}
          toggleHabit={toggleHabit}
          deleteHabit={deleteHabit}
        />
      ))}
    </div>
  );
};

export default HabitList;
