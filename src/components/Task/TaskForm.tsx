import React from 'react';
import { Task } from './types/Task';

type TaskFormProps = {
  onAddTask: () => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  task: Task;
  isEditMode: Boolean;
};

const TaskForm: React.FC<TaskFormProps> = ({
  onAddTask,
  handleChange,
  task,
  isEditMode
}) => {
  return (
    <React.Fragment>
      <button className='btn mb-3' onClick={() => window.taskForm.showModal()}>
        Add Task
      </button>

      <dialog id='taskForm' className='modal'>
        <form method='dialog' className='modal-box'>
          <h1 className='text-lg mb-3'>
            {isEditMode ? 'Edit Task' : 'Add Task'}
          </h1>
          <input
            type='text'
            placeholder='Name'
            name='name'
            className='input input-bordered input-md w-full mb-3 focus:outline-[#D2D4D7]'
            onChange={handleChange}
            value={task.name}
          />
          <textarea
            placeholder='Description'
            value={task.description}
            name='description'
            onChange={handleChange}
            className='textarea textarea-bordered textarea-md w-full mb-3 focus:outline-[#D2D4D7]'
          ></textarea>
          <div className='modal-action justify-content-start'>
            <button className='btn capitalize' onClick={onAddTask}>
              {isEditMode ? 'Update' : 'Save'}
            </button>
          </div>
        </form>
      </dialog>
    </React.Fragment>
  );
};

export default TaskForm;
