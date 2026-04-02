import TodoItem from "../TodoItem/TodoItem";
import {memo} from 'react';
import { useContext } from 'react';
import { TaskContext } from '../../context/taskContext'; 

// используем useContext для получения данных из контекста, чтобы не 
// прокидывать пропсы через все уровни компонентов
// const TodoList = (props) => {

//const TodoList = (props) => {
const TodoList = (props) => {
  console.log('TodoList');
  const {
    styles
  } = props;
  // const {
  //     tasks=[],
  //     onDeleteTaskButtonClick,
  //     onClickTaskDoneButton,
  //     filteredTasks,
  //     firstIncompleteTaskRef,
  //     firstIncompleteTaskId
  // } = props;

  const {
    tasks,
    filteredTasks,
  } = useContext(TaskContext);
  const hasTasks = tasks.length > 0;
  const isEmptyFilteredTasks = filteredTasks?.length === 0;
  
  if (!hasTasks) {
    return(<div className="todo__empty-message">There are not tasks yet</div>)
  }

  if (isEmptyFilteredTasks && hasTasks) {
    return(<div className="todo__empty-message">Tasks not found</div>)
  }
  
  return (
    <ul className={styles['todo__list']}>
      {(filteredTasks ?? tasks).map((task) => (
        <TodoItem 
          key={task.id} {...task} 
          className={styles['todo__item']}
          // ref = {task.id === firstIncompleteTaskId ? firstIncompleteTaskRef : null} 
          // onDeleteButtonClick={deleteTask} 
          // onClickTaskDoneButton={toggleTaskDone} 
        />
      ))} 
    </ul>
  );
};

export default memo(TodoList);