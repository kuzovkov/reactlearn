import {memo} from 'react';
import { useContext, useRef } from 'react';
import { TaskContext } from '@/entities/todo'; 
import RouterLink from '@/shared/ui/RouterLink/RouterLink';
import styles from './TodoItem.module.scss';

// используем useContext для получения данных из контекста, чтобы не 
// прокидывать пропсы через все уровни компонентов
// const TodoItem = (props) => {
const TodoItem = (props) => {
  const {
    className='',
    id,
    title = '' ,
    isDone=false,
  } = props;

  const {
    firstIncompleteTaskRef,
    firstIncompleteTaskId,
    deleteTask,
    toggleTaskDone,
    disappearingTaskId,
    appearingTaskId,
  } = useContext(TaskContext);

  return (
    <li 
    className={`
      ${styles['todo-item']} ${className}
       ${disappearingTaskId === id ? styles['is-disappearing'] : ''}
       ${appearingTaskId === id ? styles['is-appearing'] : ''}
       `}
     // ref={ref}
       ref = {firstIncompleteTaskId === id ? firstIncompleteTaskRef : null}
     >
      <input
        className={styles['todo-item__checkbox']}
        id={id}
        type="checkbox"
        checked={isDone}
        onChange={(e) => toggleTaskDone(id, e.target.checked)}
      />
      <label
        className={`${styles['todo-item__label']} ${'visually-hidden'}`}
        htmlFor={id}
      >
        {title}
      </label>
       <RouterLink to={`/tasks/${id}`} aria-label="Task detail page">
        {title}
      </RouterLink>
      <button
        className={styles['todo-item__delete-button']}
        aria-label="Delete"
        title="Delete"
        onClick={() => deleteTask(id)}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 5L5 15M5 5L15 15"
            stroke="#757575"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </li>
  );
};

export default memo(TodoItem);