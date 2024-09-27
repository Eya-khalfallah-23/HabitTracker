import React, { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const HabitForm = ({ addHabit }) => {
  const [habitName, setHabitName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName.trim()) {
      addHabit(habitName);
      setHabitName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="habit-form">
      <Input
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        placeholder="Enter new habit"
      />
      <Button type="submit">Add Habit</Button>
    </form>
  );
};

export default HabitForm;