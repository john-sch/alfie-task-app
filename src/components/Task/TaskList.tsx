import React from 'react';
import { Task } from './types/Task';

type TaskListProps = {
  tasks: Task[];
  onToggleComplete: (id: number) => void;
  onEditTask: (updatedTask: Task) => void;
  onDeleteTask: (id: number) => void;
};

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggleComplete,
  onEditTask,
  onDeleteTask
}) => {
  return (
    <ul className='w-[348px] md:w-[500px]'>
      {tasks.map(task => (
        <li
          key={task.id}
          className='flex items-center mb-2 justify-between	bg-slate-100	rounded-md p-3'
        >
          <div className='flex'>
            <input
              type='checkbox'
              checked={task.isComplete}
              onChange={() => onToggleComplete(task.id)}
              className='mr-2'
            />
            <span
              className={`mr-3 text-ellipsis font-medium truncate w-12 md:w-16 ${
                task.isComplete ? 'line-through text-gray-500' : 'text-black'
              }`}
            >
              {task.name}
            </span>
            <div
              className={`truncate text-ellipsis w-16 md:w-[200px] ${
                task.isComplete ? 'line-through text-gray-500' : 'text-black'
              }`}
            >
              {task.description}
            </div>
          </div>
          <div className='flex'>
            <button
              onClick={() => onEditTask(task)}
              className='bg-yellow-500 text-white rounded px-2 py-1 mx-2'
            >
              Edit
            </button>
            <button
              onClick={() => onDeleteTask(task.id)}
              className='bg-red-500 text-white rounded px-2 py-1'
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
