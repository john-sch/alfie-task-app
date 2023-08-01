'use client';
import React, { useState } from 'react';
import { Task } from './types/Task';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { TASK_INTIAL_VALUE } from './constants';

const Task: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<Task>(TASK_INTIAL_VALUE);
  const [isEditMode, setIsEditMode] = useState<Boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTask(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddTask = () => {
    if (task.name.trim() === '' || task.description.trim() === '') return;
    if (isEditMode) {
      setTasks(prevTasks =>
        prevTasks.map(prev => (prev.id === task.id ? task : prev))
      );
      setIsEditMode(false);
    } else {
      const newTask: Task = {
        id: Date.now(),
        name: task.name,
        description: task.description,
        isComplete: false
      };
      setTasks(prevTasks => [...prevTasks, newTask]);
    }
    setTask(TASK_INTIAL_VALUE);
  };

  const handleToggleComplete = (id: number) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  };

  const handleEditTask = (updatedTask: Task) => {
    window.taskForm.showModal();
    setIsEditMode(true);
    setTask(updatedTask);
  };

  const handleDeleteTask = (id: number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  return (
    <div className='flex flex-col items-center'>
      <h1 className='mb-3'>Task Manager</h1>
      <TaskForm
        onAddTask={handleAddTask}
        task={task}
        handleChange={handleChange}
        isEditMode={isEditMode}
      />
      <TaskList
        tasks={tasks}
        onToggleComplete={handleToggleComplete}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default Task;
