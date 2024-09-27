import React, { useState, useEffect } from 'react';
import HabitForm from '../components/molecules/HabitForm';
import HabitList from '../components/organisms/HabitList';
import axios from 'axios';

const HomePage = () => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    fetchHabits();
  }, []);

  const fetchHabits = async () => {
    try {
      const response = await axios.get('http://localhost:3000/habits');
      setHabits(response.data);
    } catch (error) {
      console.error('Error fetching habits:', error);
    }
  };

  const addHabit = async (name) => {
    try {
      const response = await axios.post('http://localhost:3000/habits', { name });
      setHabits([...habits, response.data]);
    } catch (error) {
      console.error('Error adding habit:', error);
    }
  };

  const toggleHabit = async (id) => {
    // Implement toggle functionality, e.g., mark as completed
  };

  const deleteHabit = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/habits/${id}`);
      setHabits(habits.filter((habit) => habit.id !== id));
    } catch (error) {
      console.error('Error deleting habit:', error);
    }
  };

  return (
    <div className="home-page">
      <h1>Habit Tracker</h1>
      <HabitForm addHabit={addHabit} />
      <HabitList habits={habits} toggleHabit={toggleHabit} deleteHabit={deleteHabit} />
    </div>
  );
};

export default HomePage;
